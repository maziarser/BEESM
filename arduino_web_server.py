#Download/install the latest version of Python 2 from https://www.python.org/ftp/python/2.7.8/python-2.7.8.msi
#32-bit installs is fine as we have encountered other libraries/modules that only offered 32-bit versions.
#####################################
#####################################
#####################################
import cherrypy
import logging
import platform
import os
import re
import subprocess
import tempfile
import urllib
from optparse import OptionParser
import sys
import glob
import json
import serial
import syslog
import time
import threading
import urllib3
###################################################
logging.basicConfig(level=logging.DEBUG)
arduino_cmd = '~/arduino-1.8.5/arduino'
###################################################
###################################################
#shoutdown the server
def shutdown():
    cherrypy.engine.exit()
###################################################
#detect the port automatically
def serial_ports():
    if sys.platform.startswith('win'):
        ports = ['COM%s' % (i + 1) for i in range(256)]
    elif sys.platform.startswith('linux') or sys.platform.startswith('cygwin'):
        ports = glob.glob('/dev/tty[A-Za-z]*')
    elif sys.platform.startswith('darwin'):
        ports = glob.glob('/dev/tty.*')
    else:
        raise EnvironmentError('Unsupported platform')

    result = []
    for port in ports:
        try:
            s = serial.Serial(port)
            s.close()
            result.append(port)
        except (OSError, serial.SerialException):
            pass
    return result
###################################################
portList = serial_ports()
if not portList:
    print("List is empty-main! Please connect micro-controller!")
    os.system("pkill -f arduino_web_server.py")
for i in portList:
    print "Port Name:"+i
    port = i
arduData = None
###################################################
###################################################
def get_arduino_command():
    global arduino_cmd
    if not arduino_cmd:
        if platform.system() == "Darwin":
            arduino_cmd_guesses = ["/Applications/Arduino.app/Contents/MacOS/Arduino"]
        elif platform.system() == "Windows":
            arduino_cmd_guesses = [
                "c:\Program Files\Arduino\Arduino_debug.exe",
                "c:\Program Files\Arduino\Arduino.exe",
                "c:\Program Files (x86)\Arduino\Arduino_debug.exe",
                "c:\Program Files (x86)\Arduino\Arduino.exe"
            ]
        else:
            arduino_cmd_guesses = []

        for guess in arduino_cmd_guesses:
            if os.path.exists(guess):
                logging.info("Found Arduino command at %s", guess)
                arduino_cmd = guess
                break
        else:
            logging.info("Couldn't find Arduino command; hoping it's on the path!")
            arduino_cmd = "arduino"
    return arduino_cmd
###################################################
def guess_port_name():
    portname = None
    if platform.system() == "Windows":
        import _winreg as winreg
        key = winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, "HARDWARE\\DEVICEMAP\\SERIALCOMM")
        for i in itertools.count():
            try:
                portname = winreg.EnumValue(key, i)[1]
            except WindowsError:
                break
    else:
        ttys = [filename for filename in os.listdir("/dev")
                if (filename.startswith("tty") or filename.startswith("cu."))
                and not "luetooth" in filename]
        ttys.sort(key=lambda k:(k.startswith("cu."), k))
        if ttys:
            portList = serial_ports()
            for i in portList:
                print "Port Name:"+i
                portname = i

    logging.info("Guessing port name as %s", portname)
    return portname

parser = OptionParser()
parser.add_option("--port", dest="port", help="Upload to serial port named "
                                              "PORT", metavar="PORT")
parser.add_option("--board", dest="board", help="Board definition to use", metavar="BOARD")
parser.add_option("--command", dest="cmd", help="Arduino command name", metavar="CMD")
###################################################
###########serial monitor + web socket#############
###################################################
def arduCherry():
    global arduData
    time.sleep(2)

    while True:
        if (arduData != None and arduData.is_open):
            try:
                msgArdu = arduData.readline()
                print "###"
                print ("CherryPy recieved: ")
                print (msgArdu)
                ###parser
                #for set and get with wifi shield
                '''msg = msgArdu.split()
                if msg[0] == "Waiting":
                    funcSet_port1()
                else:
                    funcSet_port2()'''

                #for set and get without wifi shield
                '''str = msgArdu.split()
                #print str[0]
                if str[0] == "set":
                    funcSet(str[1], str[2])
                    break
                elif str[0] == "setRGB":
                    funcSetRgb(str[1], str[2], str[3], str[4])
                    break
                elif str[0] == "setTV":
                    funcSetTv(str[1], str[2])
                    break
                elif str[0] == "get":
                    funcGet(str[1])
                    break'''
                #
                '''for temp in str:
                    print str[0]'''
                ###parser END
                sendWebSocketMsg(json.dumps({"type":"outputMsg", "value": msgArdu}))
            except TypeError:
                time.sleep(1)
            except UnicodeDecodeError:
                pass
            except:
                closePort()
                time.sleep(1)
                openPort()
        else:
            time.sleep(1)
###################################################
def funcSet(str1, str2):
    name = str1
    value = str2
    http = urllib3.PoolManager()
    http.request("POST", "http://baall-server-2.informatik.uni-bremen.de/api/set?id="+name+"&value="+value)
#####################
def funcSetRgb(str1, str2, str3, str4):
    name = str1
    valueR = str2
    valueG = str3
    valueB = str4
    http = urllib3.PoolManager()
    http.request("POST", "http://baall-server-2.informatik.uni-bremen.de/api/setRGB?id="+name+"&r="+valueR+"&g="+valueG+"&b="+valueB)
#####################
def funcSetTv(str1, str2):
    namePro = "tvProgram"
    value = str1
    httpPro = urllib3.PoolManager()
    httpPro.request("POST", "http://baall-server-2.informatik.uni-bremen.de/api/set?id="+namePro+"&value="+value)

    nameVol = "tvVolume"
    volume = str2
    httpVol = urllib3.PoolManager()
    httpVol.request("POST", "http://baall-server-2.informatik.uni-bremen.de/api/set?id="+nameVol+"&value="+volume)
#####################
def funcGet(str1):
    name = str1
    http = urllib3.PoolManager()
    response = http.request("GET", "http://baall-server-2.informatik.uni-bremen.de/api/item/"+name)
    #response = http.request("GET", "http://baall-server-2.informatik.uni-bremen.de/api/status")
    response_json = json.loads(response.data.decode('utf-8'))
    print response.response_json.status
    return response.response_json.status
###################################################
###################################################
################### parser ########################
###################################################
###################################################
def funcSet_port1(): #for set and get
    global arduData
    arduData = serial.Serial(port,115200)
    return arduData

def funcSet_port2(): #without set and get
    global arduData
    arduData = serial.Serial(port,9600)
    return arduData
###########open and closing the port###############
def openPort():
    global arduData
    arduData = serial.Serial(port,115200)
###################################################
def closePort():
    global arduData
    if (arduData != None):
        try:
            arduData.close()
        except:
            pass
        arduData = None
        time.sleep(1)
###################################################
def uploadAndCompile(self, text):
    closePort()
    print "sketch to upload: " + text
    options, args = parser.parse_args()
    dirname = tempfile.mkdtemp()
    sketchname = os.path.join(dirname, os.path.basename(dirname)) + ".ino"
    f = open(sketchname, "wb")
    f.write(text + "\n")
    f.close()
    print "created sketch at %s" % (sketchname,)
    compile_args = [
        options.cmd or get_arduino_command(),
        "--upload",
        "--port",
        options.port or guess_port_name(),
    ]
    if options.board:
        compile_args.extend([
            "--board",
            options.board
        ])
    compile_args.append(sketchname)
    print "Uploading with %s" % (" ".join(compile_args))
    print "***"
    # Arduino output will be shown in the BEESM output
    rc = subprocess.Popen(" ".join(compile_args), stderr=subprocess.PIPE, stdout=subprocess.PIPE, shell=True)
    #####################
    #to show compiling and verifying as well as uploading in the BEESM output
    sendWebSocketMsg(json.dumps({"type":"compiling", "value": "Compiling..."}))
    while True:
        line = rc.stdout.readline()
        sendWebSocketMsg(json.dumps({"type":"outputCon", "value": line}))
        if (line.startswith("Global variables use")):
            sendWebSocketMsg(json.dumps({"type":"uploading", "value": "Uploading..."}))
        if not line:
            break
    #####################
    (output, err) = rc.communicate()

    rc_status = rc.wait()
    print "Command output : ", output
    print "Error output : ", err
    print "Command exit status/return code: ", rc_status
    print "***"
    print "***"
    msg = json.dumps({"output":output, "error":err,"status":rc_status})
    openPort()
    return msg
###################################################
###################################################
############# Web Socket Connection ###############
###################################################
###################################################
def sendWebSocketMsg(msg):
    for conn in SUBSCRIBERS:
        try:
            conn.send(msg)
        except:
            pass
###################################################
from ws4py.server.cherrypyserver import WebSocketPlugin, WebSocketTool
from ws4py.websocket import WebSocket, EchoWebSocket

WebSocketPlugin(cherrypy.engine).subscribe()
cherrypy.tools.websocket = WebSocketTool()

SUBSCRIBERS = set()

class Publisher(WebSocket):
    def __init__(self, *args, **kw):
        WebSocket.__init__(self, *args, **kw)
        SUBSCRIBERS.add(self)
###################################################
class ArduHandler(object): #SimpleHTTPServer.SimpleHTTPRequestHandler
    #just to check the websocket connection
    @cherrypy.expose
    def ws(self):

    @cherrypy.expose
    def socket(self, msg):
    #####################
    @cherrypy.expose
    def index(self):
        return "Hello ALL!"

    @cherrypy.expose
    def upload(self):
        length = cherrypy.request.headers['Content-Length']
        text = cherrypy.request.body.read(int(length))
        output = uploadAndCompile(self, text)
        cherrypy.response.headers['Access-Control-Allow-Origin'] = "*"

        return output

if __name__ == '__main__':
    serial_ports()
    if not portList:
        print("List is empty-cherry! Please connect micro-controller!")
        os.system("pkill -f arduino_web_server.py")
    print "Blockly-Arduino can now be accessed at http://127.0.0.1:8090/"
    thread = threading.Thread(target=arduCherry)
    thread.daemon = True
    thread.start()
	
    cherrypy.config.update({'server.socket_host':"127.0.0.1", 'server.socket_port': 8090})
    cherrypy.quickstart(ArduHandler(), '/',
                        config={'/ws': {'tools.websocket.on': True,
                                        'tools.websocket.handler_cls': Publisher}})

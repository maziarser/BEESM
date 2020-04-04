//change the Block colors
function reColor(block, hue) {
    var oldInit = block.init;
    block.init = function() {
        oldInit.call(this);
        this.setColour(hue);
    }
}
//--------------------------------
let Logic_color = "#43A047";
let Control_color = "#0277BD";
let Math_color = "#FF9800";
let Text_color = "#AD1457";
let InputOutput_color = "#33691E";
let Audio_color = "#1B5E20";
let Servo_color = "#006064";
let GroveAnalog_color = "#0D47A1";
let Grove_color = "#1976D2";
let GroveLCD_color = "#2196F3";
let GroveMotor_color = "#64B5F6";
let Functions_color = "#01579B";
let Variables_color = "#AFB42B";
let Connection_color = "#D84315";
let Status_color = "#E64A19";
let Design_color = "#29B6F6";
let neopixel = "#388E3C";
let AdafruitIO_con = "#00695C";
let AdafruitIO_feed = "#00796B";
let AdafruitIO_func = "#00897B";
let newVar = "#827717";
let dht22_con = "#37474F";
let dht22_feed = "#455A64";
let Oled_color = "#4CAF50";
let Wifi_color = "#424242"
let weatherOnline_color = "#616161";
let robot_color = "#FF3D00";

reColor(Blockly.Blocks['variables_set'], Variables_color);
reColor(Blockly.Blocks['variables_get'], Variables_color);
reColor(Blockly.Blocks['math_change'], Variables_color);

reColor(Blockly.Blocks['procedures_defreturn'], Functions_color);
reColor(Blockly.Blocks['procedures_defnoreturn'], Functions_color);
reColor(Blockly.Blocks['procedures_callreturn'], Functions_color);
reColor(Blockly.Blocks['procedures_callnoreturn'], Functions_color);
reColor(Blockly.Blocks['procedures_ifreturn'], Functions_color);
reColor(Blockly.Blocks['procedures_mutatorcontainer'], Functions_color);
reColor(Blockly.Blocks['procedures_mutatorarg'], Functions_color);

reColor(Blockly.Blocks['new_func'], AdafruitIO_func);
reColor(Blockly.Blocks['pointer'], AdafruitIO_func);
reColor(Blockly.Blocks['call_func'], AdafruitIO_func);
reColor(Blockly.Blocks['call_func_adv'], AdafruitIO_func);

reColor(Blockly.Blocks['connect_AdafruitIO'], AdafruitIO_con);

reColor(Blockly.Blocks['setup_messagehandler'], AdafruitIO_feed);
reColor(Blockly.Blocks['get_feed_value_int'], AdafruitIO_feed);
reColor(Blockly.Blocks['get_feed_value_string'], AdafruitIO_feed);

reColor(Blockly.Blocks['connect_dht22'], dht22_con);

reColor(Blockly.Blocks['set_feed'], dht22_feed);
reColor(Blockly.Blocks['get_temp_value'], dht22_feed);
reColor(Blockly.Blocks['set_temp_value_int'], dht22_feed);
reColor(Blockly.Blocks['get_humidity_value'], dht22_feed);
reColor(Blockly.Blocks['set_humidity_value_int'], dht22_feed);

reColor(Blockly.Blocks['define_variable'], newVar);
reColor(Blockly.Blocks['use_variable'], newVar);

reColor(Blockly.Blocks['controls_if'], Logic_color);
reColor(Blockly.Blocks['logic_compare'], Logic_color);
reColor(Blockly.Blocks['logic_operation'], Logic_color);
reColor(Blockly.Blocks['logic_negate'], Logic_color);
reColor(Blockly.Blocks['logic_null'], Logic_color);
reColor(Blockly.Blocks['logic_boolean'], Logic_color);
reColor(Blockly.Blocks['logic_ternary'], Logic_color);
reColor(Blockly.Blocks['controls_if_if'], Logic_color);
reColor(Blockly.Blocks['controls_if_elseif'], Logic_color);
reColor(Blockly.Blocks['controls_if_else'], Logic_color);

reColor(Blockly.Blocks['base_delay'], Control_color);
reColor(Blockly.Blocks['controls_repeat_ext'], Control_color);
reColor(Blockly.Blocks['controls_for'], Control_color);
reColor(Blockly.Blocks['controls_whileUntil'], Control_color);
reColor(Blockly.Blocks['controls_flow_statements'], Control_color);
reColor(Blockly.Blocks['foreach_simple'], Control_color);
reColor(Blockly.Blocks['arduino_functions'], Control_color);

reColor(Blockly.Blocks['math_number'], Math_color);
reColor(Blockly.Blocks['math_arithmetic'], Math_color);
reColor(Blockly.Blocks['math_single'], Math_color);
reColor(Blockly.Blocks['math_trig'], Math_color);
reColor(Blockly.Blocks['math_constant'], Math_color);
reColor(Blockly.Blocks['math_number_property'], Math_color);
reColor(Blockly.Blocks['math_round'], Math_color);
reColor(Blockly.Blocks['math_modulo'], Math_color);
reColor(Blockly.Blocks['math_constrain'], Math_color);
reColor(Blockly.Blocks['base_map'], Math_color);
reColor(Blockly.Blocks['math_random_int'], Math_color);
reColor(Blockly.Blocks['math_random_float'], Math_color);
reColor(Blockly.Blocks['lastcheck'], Math_color);
reColor(Blockly.Blocks['resettime'], Math_color);

reColor(Blockly.Blocks['text'], Text_color);
reColor(Blockly.Blocks['text_join'], Text_color);
reColor(Blockly.Blocks['text_length'], Text_color);
reColor(Blockly.Blocks['text_isEmpty'], Text_color);
reColor(Blockly.Blocks['text_append'], Text_color);
reColor(Blockly.Blocks['text_create_join_container'], Text_color);
reColor(Blockly.Blocks['text_create_join_item'], Text_color);

reColor(Blockly.Blocks['inout_highlow'], InputOutput_color);
reColor(Blockly.Blocks['inout_digital_write'], InputOutput_color);
reColor(Blockly.Blocks['inout_digital_read'], InputOutput_color);
reColor(Blockly.Blocks['inout_analog_write'], InputOutput_color);
reColor(Blockly.Blocks['inout_analog_read'], InputOutput_color);
reColor(Blockly.Blocks['serial_print'], InputOutput_color);
reColor(Blockly.Blocks['inout_buildin_led'], InputOutput_color);

reColor(Blockly.Blocks['servo_move'], Servo_color);
reColor(Blockly.Blocks['servo_read_degrees'], Servo_color);

reColor(Blockly.Blocks['inout_tone'], Audio_color);
reColor(Blockly.Blocks['inout_notone'], Audio_color);

reColor(Blockly.Blocks['grove_rotary_angle'], GroveAnalog_color);
reColor(Blockly.Blocks['grove_temporature_sensor'], GroveAnalog_color);
reColor(Blockly.Blocks['grove_sound_sensor'], GroveAnalog_color);
reColor(Blockly.Blocks['grove_thumb_joystick'], GroveAnalog_color);
reColor(Blockly.Blocks['grove_light_sensor'], GroveAnalog_color);
reColor(Blockly.Blocks['grove_humidity_sensor'], GroveAnalog_color);

reColor(Blockly.Blocks['grove_led'], Grove_color);
reColor(Blockly.Blocks['grove_button'], Grove_color);
reColor(Blockly.Blocks['grove_relay'], Grove_color);
reColor(Blockly.Blocks['grove_tilt_switch'], Grove_color);
reColor(Blockly.Blocks['grove_piezo_buzzer'], Grove_color);
reColor(Blockly.Blocks['grove_buzzer'], Grove_color);
reColor(Blockly.Blocks['grove_pir_motion_sensor'], Grove_color);
reColor(Blockly.Blocks['grove_line_finder'], Grove_color);
reColor(Blockly.Blocks['grove_rgb_led'], Grove_color);
reColor(Blockly.Blocks['grove_bluetooth_slave'], Grove_color);
reColor(Blockly.Blocks['grove_ultrasonic_ranger'], Grove_color);
reColor(Blockly.Blocks['grove_mp3_player'], Grove_color);
reColor(Blockly.Blocks['grove_rgb_led_container'], Grove_color);
reColor(Blockly.Blocks['grove_rgb_led_item'], Grove_color);

reColor(Blockly.Blocks['grove_serial_lcd_print'], GroveLCD_color);
reColor(Blockly.Blocks['grove_serial_lcd_power'], GroveLCD_color);
reColor(Blockly.Blocks['grove_serial_lcd_effect'], GroveLCD_color);
reColor(Blockly.Blocks['grove_rgb_lcd_print'], GroveLCD_color);
reColor(Blockly.Blocks['grove_rgb_lcd_setcolor'], GroveLCD_color);
reColor(Blockly.Blocks['grove_rgb_lcd_setcurser'], GroveLCD_color);
reColor(Blockly.Blocks['grove_rgb_lcd_clear'], GroveLCD_color);

reColor(Blockly.Blocks['grove_motor_shield'], GroveMotor_color);

reColor(Blockly.Blocks['setup_display'], Oled_color);
reColor(Blockly.Blocks['display_println'], Oled_color);
reColor(Blockly.Blocks['display_color'], Oled_color);
reColor(Blockly.Blocks['display_textsize'], Oled_color);
reColor(Blockly.Blocks['display_setcurser'], Oled_color);
reColor(Blockly.Blocks['display_clear'], Oled_color);
reColor(Blockly.Blocks['display_display'], Oled_color);

reColor(Blockly.Blocks['setup_neopixel'], neopixel);
reColor(Blockly.Blocks['set_neopixel_brightness'], neopixel);
reColor(Blockly.Blocks['set_pixel_color_rgb'], neopixel);
reColor(Blockly.Blocks['neopixel_show'], neopixel);
reColor(Blockly.Blocks['set_pixel_alphabet'], neopixel);
reColor(Blockly.Blocks['set_pixel_number'], neopixel);
reColor(Blockly.Blocks['neopixel_fade_en'], neopixel);

reColor(Blockly.Blocks['connect_wifi'], Wifi_color);

reColor(Blockly.Blocks['getcurrentWeathercondition'], weatherOnline_color);
reColor(Blockly.Blocks['getWeatherforecast'], weatherOnline_color);

reColor(Blockly.Blocks['connect_baall'], Connection_color);
reColor(Blockly.Blocks['get_status_item'], Connection_color);
reColor(Blockly.Blocks['get_name_simple'], Connection_color);
reColor(Blockly.Blocks['get_status_simple'], Connection_color);
reColor(Blockly.Blocks['get_face_emotion'], Connection_color);

reColor(Blockly.Blocks['set_value'], Status_color);
reColor(Blockly.Blocks['set_value_rgb'], Status_color);
reColor(Blockly.Blocks['set_value_dimmer'], Status_color);
reColor(Blockly.Blocks['set_status_items'], Status_color);
reColor(Blockly.Blocks['tv_program'], Status_color);

reColor(Blockly.Blocks['baall_frontend'], Design_color);
reColor(Blockly.Blocks['baall_frontend_adv'], Design_color);

reColor(Blockly.Blocks['raspy_ardu'], robot_color);
reColor(Blockly.Blocks['raspy_ardu_read'], robot_color);
reColor(Blockly.Blocks['raspy_ardu_write'], robot_color);
//--------------------------------
//field of programming
document.getElementById("ardu").style.background = "rgb(27, 94, 32)";
document.getElementById("english").style.background = "rgb(27, 94, 32)";
//--------------------------------
function consoleLog(msg){
    console.log(msg);
}
//--------------------------------
//Autocode generate flag
var currentValue = document.getElementById("auto").value = "Off";

function autoCode() {
    currentValue = document.getElementById('auto').value;
    if (currentValue == "Off") {
        document.getElementById("auto").value = "On";
        document.getElementById("auto").style.background = "rgb(27, 94, 32)";
        currentValue = document.getElementById('auto').value;
        Blockly.mainWorkspace.addChangeListener(onFirstComment);
    } else {
        document.getElementById("auto").value = "Off";
        document.getElementById("auto").style.background = "rgb(48, 63, 159)";
        currentValue = document.getElementById('auto').value;
        Blockly.mainWorkspace.removeChangeListener(onFirstComment);
    }
    return currentValue;
}

function onFirstComment(event) {
    if ((event.type == Blockly.Events.CHANGE ||
            event.element == 'comment' ||
            !event.oldValue || event.newValue) &&
        currentValue == "On") {
        generateCode();
    }
}
//--------------------------------
var clicks = 0;
//saving/generating
function saveXML() {
    clicks += 1;
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    $('#xmlCode').val(xmlText).focus();

    var xml_text = document.getElementById("xmlCode").value;
    var xml_textAsBlob = new Blob([xml_text], {
        type: 'text/plain'
    });
    var xmlFileName = document.getElementById("fileName").value;

    var DLink = document.createElement("a");
    if (xmlFileName) {
		if (xmlFileName.indexOf(".xml") == -1) {
            xmlFileName  = xmlFileName+".xml";
        }
        DLink.download = xmlFileName;
    } else {
        DLink.download = 'Example[' + clicks + '].xml';
    }
    DLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        DLink.href = window.webkitURL.createObjectURL(xml_textAsBlob);
    } else {
        DLink.href = window.URL.createObjectURL(xml_textAsBlob);
        DLink.style.display = "none";
        document.body.appendChild(DLink);
    }
    DLink.click();
	remoteSaveXML(xml_textAsBlob,xmlFileName);
}
//--------------------------------
//loading	
function loadXML() {
    var fileToLoad = document.getElementById("fileToLoad").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("xmlCode").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");

    setTimeout(
        function() {
            var toload = $('#xmlCode').val();
            var success = load(toload);

            function load(xml) {
                if (typeof xml != "string" || xml.length < 5) {
                    alert("No Input!");
                    return false;
                    return;
                }
                try {
                    var dom = Blockly.Xml.textToDom(xml);
                    Blockly.mainWorkspace.clear();
                    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, dom);
                    return true;
                } catch (e) {
                    alert("Invalid xml!");
                    return false;
                }
            }
        }, 50);
}
//--------------------------------
//saving Arduino code
var saveArdu_clicks = 0;

function saveArdu() {
    saveArdu_clicks += 1;
    //save from workspace
    if ($('#arduCode').css('visibility') == 'visible' && $('#modifier').css('display') == 'none') {
        var ardu_text = document.getElementById("arduCode");
        var my_ardu = ardu_text.innerText || ardu_text.textContent;

        var ardu_textAsBlob = new Blob([my_ardu], {
            type: 'text/plain'
        });

        var arduFileName = document.getElementById("fileName_ardu").value;

        arduLink = document.createElement("a");

        if (arduFileName) {
			if (arduFileName.indexOf(".ino") == -1) {
				arduFileName  = arduFileName+".ino";
			}
            arduLink.download = arduFileName;
        } else {
            arduLink.download = 'arduinoCode[' + saveArdu_clicks + '].ino';
        }
        arduLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            arduLink.href = window.webkitURL.createObjectURL(ardu_textAsBlob);
        } else {
            arduLink.href = window.URL.createObjectURL(ardu_textAsBlob);
            arduLink.style.display = "none";
            document.body.appendChild(arduLink);
        }
        arduLink.click();
    }
    //save from code modifier
    else if ($('#arduCode').css('visibility') != 'visible' && $('#modifier').css('display') != 'none') {
        var ardu_text = document.getElementById("modifyCodeDiv");
        var my_ardu = ardu_text.innerText || ardu_text.textContent;

        var ardu_textAsBlob = new Blob([my_ardu], {
            type: 'text/plain'
        });

        var arduFileName = document.getElementById("fileName_ardu").value;

        arduLink = document.createElement("a");

        if (arduFileName) {
			if (arduFileName.indexOf(".ino") == -1) {
				arduFileName  = arduFileName+".ino";
			}
            arduLink.download = arduFileName;
        } else {
            arduLink.download = 'arduinoCode[' + saveArdu_clicks + '].ino';
        }
        arduLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            arduLink.href = window.webkitURL.createObjectURL(ardu_textAsBlob);
        } else {
            arduLink.href = window.URL.createObjectURL(ardu_textAsBlob);
            arduLink.style.display = "none";
            document.body.appendChild(arduLink);
        }
        arduLink.click();
    }
}
//--------------------------------
//highlight code in the modify code window
$(function() {
    $("body").click(function(e) {
        if (e.target.id == "modifyCodeDiv" || $(e.target).parents("#modifyCodeDiv").length) {
            //hljs.highlightBlock($('#modifyCodeDiv').get(0));
        } else {
            hljs.highlightBlock($('#modifyCodeDiv').get(0));
        }
    });
});
//--------------------------------
//visiable and invisiable the code modifier textbox and run button
$('#modify').click(function() {
    $('#modifier').show();
    hljs.highlightBlock($('#modifyCodeDiv').get(0));
    document.getElementById("hideArdu").style.visibility = "hidden";
    document.getElementById("arduCode").style.visibility = "hidden";
});

$('#generate').click(function() {
    $('#modifier').hide();
    document.getElementById("hideArdu").style.visibility = "visible";
    document.getElementById("arduCode").style.visibility = "visible";
});
//--------------------------------
//this is to call baall.php when they click on the button
$(document).ready(function() {
    $("#showBaall").click(function() {
        $('#baall-wrapper').show();
        $('#designBaall-wrapper').hide();
        $("#baall").load('baall.php');
    });
});

//this is to call design-baall.php when they click on the button
$(document).ready(function() {
    $("#drawBaall").click(function() {
        $('#baall-wrapper').hide();
        $('#designBaall-wrapper').show();
        $("#designBaall").load('design-baall.php');
    });
});
//--------------------------------
//this is to refresh the baall
function refreshBaall() {
    var url = 'index-ardu-en.php';
    $('#baall-wrapper').load(url + ' #baall');
    $('#designBaall-wrapper').load(url + ' #designBaall');
}

//--------------------------------
//WebSocket BAALL
WebSocketBaall();

function WebSocketBaall() {
    var objects = ["bedroomJack1", "bedroomJack2", "bedroomLight1", "bedroomLight2", "livingJack1",
        "livingLight1", "livingLight2", "corridorLight", "kitchenLight", "bathroomLight", "bulblamp",
        "floorlamp", "bathroomLight", "bathroomdoor", "upperLeftDoor", "upperRightDoor", "lowerLeftDoor",
        "lowerRightDoor", "livingLight3", "tvProgram", "bathroomToiletHeight", "basin"];

    if ("WebSocket" in window) {
        //open a web socket
        var ws = new WebSocket("ws://baall-server-2.informatik.uni-bremen.de/panelws");

        ws.onopen = function() {
            //Web Socket is connected, send data using send()
            ws.send("Message to send");
        };

        ws.onmessage = function(evt) {
            var received_msg = evt.data;
            consoleLog("Message is received...");
            var n = received_msg.indexOf('}');
            var m = received_msg.indexOf('}}');
            if (m != -1 && n != -1) {
                var str = received_msg.substring(0, received_msg.indexOf('}}') + 2);
            } else if (n != -1 && m == -1) {
                var str = received_msg.substring(0, received_msg.indexOf('}') + 1);
            }
            var obj = JSON.parse(str);
            if (obj.type === "update") {
                for (i = 0; i < objects.length; i++) {
                    if (obj.id === objects[i]) {
                        refreshBaall();
                    }
                }
            }
        };

        ws.onclose = function() {
            // websocket is closed.
            consoleLog("Connection is closed...");
            setTimeout(function(){WebSocketBaall()}, 7000);
        };

        window.onbeforeunload = function(event) {
            ws.close();
        };
    } else {
        // The browser doesn't support WebSocket
        consoleLog("WebSocket NOT supported by your Browser!");
    }
}
//--------------------------------
function showBaall() {
    //this is to refresh the div=baall when user press show baall btn
    setTimeout(
        function() {
            var url = 'index-ardu-en.php';
            $('#baall-wrapper').load(url + ' #baall');
        }, 100);
}

function drawBaall() {
    //this is to refresh the div=baall when user press show design baall btn
    setTimeout(
        function() {
            var url = 'index-ardu-en.php';
            $('#designBaall-wrapper').load(url + ' #designBaall');
        }, 100);
}
//--------------------------------
var workspace = Blockly.inject('blocklyDiv',
    {media: '../media/',
        toolbox: document.getElementById('toolbox'),
        zoom:
            {controls: true,
                wheel: true,
                startScale: 1.0,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2},
        trashcan: true});
//--------------------------------
//generating the code
function generateCode() {
    // Generate Arduino code and display it
    //generate the code based on the workspace
    Blockly.Arduino.INFINITE_LOOP_TRAP = null;
    var code = Blockly.Arduino.workspaceToCode();
    //Arduino code
    document.getElementById("arduCode").innerText = (code);
    //code modifier
    document.getElementById("modifyCode").value = (code);
    //it is to put textarea content into the middle div which is "modifyCodeDiv"
    document.getElementById("modifyCodeDiv").innerText = document.getElementById("modifyCode").value;
    //highlight the code
    hljs.highlightBlock($('#arduCode').get(0));
    hljs.highlightBlock($('#modifyCodeDiv').get(0));
}
//--------------------------------
function discard() {
    var count = Blockly.mainWorkspace.getAllBlocks().length;
    if (count < 2 || window.confirm('Delete all ' + count + ' blocks?')) {
        Blockly.mainWorkspace.clear();
        //renderContent();
    }
}
//--------------------------------
//WebSocket Arduino
WebSocketArdu();

var arduMsg = "";

function WebSocketArdu() {
    if ("WebSocket" in window) {
        //open a web socket
        var websocket = new WebSocket('ws://localhost:8090/ws');
        websocket.onopen = function () {
            //Web Socket is connected, send data using send()
            websocket.send("Ardu-Message to send");
        };

        websocket.onmessage = function (evt) {
            var received_msg = evt.data;
            consoleLog("Ardu-Data recieved...");
            consoleLog(received_msg);
            var obj = JSON.parse(received_msg);
            if (obj.type === "outputMsg") {
                consoleLog("new Arduino msg recieved!");
                arduMsg = obj.value;
                serialMonitor(arduMsg);
            }
            else if (obj.type === "compiling") {
                var output = document.getElementById('output');
                output.innerHTML = output.innerHTML + obj.value.bold() + "\n";
            }
            else if (obj.type === "outputCon") {
                var output = document.getElementById('output');
                output.innerHTML = output.innerHTML + obj.value;
            }
            else if (obj.type === "uploading") {
                var output = document.getElementById('output');
                output.innerHTML = output.innerHTML + obj.value.bold() + "\n";
            }
        };

        websocket.onclose = function() {
            // websocket is closed
            consoleLog("Ardu-Connection is closed...");
	        setTimeout(function(){WebSocketArdu()}, 7000);
        };

        websocket.onerror   = function (evt) {
            consoleLog('Ardu-Error occured: ' + evt.data);
        };

        window.onbeforeunload = function(evt) {
            ws.close();
        };

    } else {
        // The browser doesn't support WebSocket
        consoleLog("ROS-WebSocket NOT supported by your Browser!");
    }
}
//--------------------------------
function serialMonitor(arduMsg){
    consoleLog(arduMsg);
    output.textContent = output.textContent + "" + arduMsg;
}
//--------------------------------
//this is to refresh the Arduino Output --> for Serial monitor
function refreshOutputArdu() {
    document.getElementById("output").innerText = "";
}
//--------------------------------
function uploadCode(code, callback) {
    refreshOutputArdu();
    var target = document.getElementById('content_arduino');
    var spinner = new Spinner().spin(target);
    var url = "http://127.0.0.1:8090/upload";
    var method = "POST";
    var async = true;
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState != 4) {
            return;
        }

        spinner.stop();

        var status = parseInt(request.status);
        var errorInfo = null;

        switch (status) {
            case 200:
                //show the Arduino output in BEESM output panel
                obj = JSON.parse(request.response);

                console.log(obj);
                var output = document.getElementById('output');
                if ( obj.status === 0 ) {
                    alert("Program successfully uploaded to the board!");
                    document.getElementById("loader").style.display="none";
		            document.getElementById("run").disabled = false;
                    var str_status = "Status:" + obj.status;
                    var str_output = obj.output;
                    var str_error = obj.error;
                    output.innerHTML = str_status + "\n" + str_output + "\n" + str_error;
                    var sMonitor = "\nSerial Monitor Output:\n";
                    output.innerHTML = output.innerHTML + sMonitor.bold();
                }
                else {
                    alert("Program unsuccessful!");
                    document.getElementById("loader").style.display="none";
		            document.getElementById("run").disabled = false;
                    var str_status = "Status:" + obj.status;
                    var str_output = obj.output;
                    var str_error = obj.error;
                    output.innerHTML = str_status + "\n" + str_output + "\n" + str_error;
                }
                break;
            case 0:
                errorInfo = "code 0\n\nCould not connect to server at " + url + ".  Is the local web server running?";
                document.getElementById("loader").style.display="none";
		        document.getElementById("run").disabled = false;
                break;
            case 400:
                errorInfo = "code 400\n\nBuild failed - probably due to invalid source code.  Make sure that there are no missing connections in the blocks.";
                document.getElementById("loader").style.display="none";
		        document.getElementById("run").disabled = false;
                break;
            case 500:
                errorInfo = "code 500\n\nUpload failed.  Is the Board connected to USB port?";
                document.getElementById("loader").style.display="none";
		        document.getElementById("run").disabled = false;
                break;
            case 501:
                errorInfo = "code 501\n\nUpload failed.  Is 'ino' installed and in your path?  This only works on Mac OS X and Linux at this time.";
                document.getElementById("loader").style.display="none";
		        document.getElementById("run").disabled = false;
                break;
            default:
                errorInfo = "code " + status + "\n\nUnknown error.";
                document.getElementById("loader").style.display="none";
		        document.getElementById("run").disabled = false;
                break;
        };
        callback(status, errorInfo);
    };

    request.open(method, url, async);
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    request.send(code);
}
//--------------------------------
function resetClick() {
    document.getElementById("loader").style.display="block";
    document.getElementById("run").disabled = true;
    var code = "void setup() {} void loop() {}";

    uploadCode(code, function(status, errorInfo) {
        if (status != 200) {
            alert("Error resetting program: " + errorInfo);
            document.getElementById("loader").style.display="none";
	    document.getElementById("run").disabled = false;
        }
    });
}
//--------------------------------
function uploadClick() {
    if ($('#arduCode').css('visibility') == 'visible' && $('#modifier').css('display') == 'none') {
        var my_element = document.getElementById('arduCode');
        var my_str = my_element.innerText || my_element.textContent;
        document.getElementById("modifyCode").value = my_str;
        var code = document.getElementById("modifyCode").value;
        alert("Ready to upload to the Board!");
        document.getElementById("loader").style.display="block";
	    document.getElementById("run").disabled = true;

        uploadCode(code, function(status, errorInfo) {
            if (status == 200) {
            } else {
                alert("Error while uploading program: " + errorInfo);
                document.getElementById("loader").style.display="none";
		        document.getElementById("run").disabled = false;
            }
        });
    } else if ($('#arduCode').css('visibility') != 'visible' && $('#modifier').css('display') != 'none') {
        var my_element = document.getElementById('modifyCodeDiv');
        var my_str = my_element.innerText || my_element.textContent;
        document.getElementById("modifyCode").value = my_str;
        var ardu_code = document.getElementById("modifyCode").value;
        if (ardu_code === null) {
            showCode();
        }
        alert("Ready to upload to the Board!");
        document.getElementById("loader").style.display="block";
        document.getElementById("run").disabled = true;

        uploadCode(ardu_code, function(status, errorInfo) {
            if (status == 200) {
            } else {
                alert("Error while uploading program: " + errorInfo);
                document.getElementById("loader").style.display="none";
		        document.getElementById("run").disabled = false;
            }
        });
    }
	var xhr = new XMLHttpRequest();
	var work_area = "ARDU";
    xhr.open("POST", "saveArduCode.php?task="+getTask()+"&area="+work_area, true);
    xhr.send(code);
}
//--------------------------------
function runCode() {}
function secondTime() {}

function remoteEval(code) {}
//--------------------------------
function remoteSaveXML(code, name) {
	var work_area = "ARDU";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "saveXml.php?name="+encodeURI(name)+"&task="+getTask()+"&area="+work_area, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // alert("document saved");
        }
    }
    xhr.send(code);
}
//--------------------------------
function remoteSaveTimer(code) {
	var work_area = "ARDU";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "saveTime.php?task="+getTask()+"&area="+work_area, true);
    xhr.send(code);
}

#Install ROS Completly for Turtlebot 3 in Linux Ubuntu
####################################
#Download/install the latest version of Python 2 from https://www.python.org/ftp/python/2.7.8/python-2.7.8.msi
#32-bit installs is fine as we have encountered other libraries/modules that only offered 32-bit versions.
####################################
#all attributes are available in: http://localhost:8099/
####################################
####################################
import math
import random
import string
import rospy
import sys
import cherrypy
import numpy as np
import tf
import numpy
import geometry_msgs.msg
import json
import subprocess
from math import *
from std_msgs.msg import String, Empty
from geometry_msgs.msg import Pose2D, PoseStamped, Point, Pose, Quaternion, Twist, Vector3, PoseWithCovarianceStamped, PoseWithCovariance, TransformStamped, Transform
from move_base_msgs.msg import MoveBaseGoal, MoveBaseAction, MoveBaseActionGoal
from nav_msgs.msg import Odometry
from tf2_msgs.msg import TFMessage
from sensor_msgs.msg import LaserScan, Imu
import PyKDL
import tf2_ros
import copy
import actionlib
import threading
import time
import serial
import sched
import json
from actionlib_msgs.msg import *
###################################################
###################################################
#rotate the robot based on degree
LINEAR_VELOCITY_MINIMUM_THRESHOLD  = 0.2
ANGULAR_VELOCITY_MINIMUM_THRESHOLD = 0.4

#pose2D
x = np.float64(0)
y = np.float64(0)
theta = np.float64(0)

#PoseStamped --> move_base
x_poseStamped = np.float64(0.5) 
y_poseStamped = np.float64(0) 
z_poseStamped = np.float64(0)
w_poseStamped = np.float64(1)

#Odometry 
#Position
x_odom_position = np.float64(0) 
y_odom_position = np.float64(0) 
z_odom_position = np.float64(0)

#Orientation
x_odom_orientation = np.float64(0) 
y_odom_orientation = np.float64(0) 
z_odom_orientation = np.float64(0)
w_odom_orientation = np.float64(0)

#TF
x_tf_translation = np.float64(0)
y_tf_translation = np.float64(0)
z_tf_translation = np.float64(0)

x_tf_rotation = np.float64(0)
y_tf_rotation = np.float64(0)
z_tf_rotation = np.float64(0)
w_tf_rotation = np.float64(0)

#amcl
x_amcl = np.float64(0)
y_amcl = np.float64(0)
z_amcl = np.float64(0)
w_amcl = np.float64(0)

#name
name_desk = "tb3_desk"
name_logo = "tb3_logo"

#laser scanner 
ranges_filter = [None]*359
intensities_filter = [None]*359

ranges_scanner = []
intensities_scanner = []

ranges_scanner_total = [None]*359
intensities_scanner_total = [None]*359

ranges_scanner_boolean = False
intensities_scanner_boolean = False

ranges_scanner_safe = []
scanBoolean_safe = False
stop_robots = True
###################################################
###################################################
############# Web Socket Connection ###############
###################################################
###################################################
def sendWebSocketMsg(msg):
    for conn in SUBSCRIBERS:
        conn.send(msg)

from ws4py.server.cherrypyserver import WebSocketPlugin, WebSocketTool
from ws4py.websocket import WebSocket, EchoWebSocket

WebSocketPlugin(cherrypy.engine).subscribe()
cherrypy.tools.websocket = WebSocketTool()

SUBSCRIBERS = set()

class Publisher(WebSocket):
    def __init__(self, *args, **kw):
        WebSocket.__init__(self, *args, **kw)
        SUBSCRIBERS.add(self)

    def received_message(self,message):
        self.send(createAMCLPoseMessage())

    def closed(self, code, reason=None):
        SUBSCRIBERS.remove(self)
###################################################
###################################################
#Pose2D
def callback(data):
    global x,y,theta
    x = data.x
    y = data.y
    theta = data.theta
###################################################
#Odometry
def callback_odom(msg):
    global x_odom_position,y_odom_position,z_odom_position,x_odom_orientation,y_odom_orientation,z_odom_orientation,w_odom_orientation
    #when it will run Forward --> X increased      Y increased
    x_odom_position = msg.pose.pose.position.x
    y_odom_position = msg.pose.pose.position.y
    z_odom_position = msg.pose.pose.position.z

    #when it will go Left --> Z increased      W increased
    x_odom_orientation = msg.pose.pose.orientation.x
    y_odom_orientation = msg.pose.pose.orientation.y
    z_odom_orientation = msg.pose.pose.orientation.z
    w_odom_orientation = msg.pose.pose.orientation.w
###################################################
#TF transform.translation
def callback_tf(msg):
    global x_tf_translation,y_tf_translation,z_tf_translation,x_tf_rotation,y_tf_rotation,z_tf_rotation,w_tf_rotation
    #when it will run Forward --> X increased      Y increased
    x_tf_translation = msg.transforms.transform.translation.x
    y_tf_translation = msg.transforms.transform.translation.y
    z_tf_translation = msg.transforms.transform.translation.z

    #when it will go Left --> Z increased      W increased
    x_tf_rotation = msg.transforms.transform.orientation.x
    y_tf_rotation = msg.transforms.transform.orientation.y
    z_tf_rotation = msg.transforms.transform.orientation.z
    w_tf_rotation = msg.transforms.transform.orientation.w
###################################################
#PoseStamped --> move_base_simple
def callback_move_simple(data):
    global x_poseStamped,y_poseStamped,z_poseStamped,w_poseStamped
    x_poseStamped = data.pose.position.x 
    y_poseStamped = data.pose.position.y 
    z_poseStamped = data.pose.orientation.z 
    w_poseStamped = data.pose.orientation.w
###################################################
#MoveBaseActionGoal --> move_base
def callback_move(data):
    global x_moveBase,y_moveBase,z_moveBase,w_moveBase
    x_moveBase = data.target_pose.pose.position.x 
    y_moveBase = data.target_pose.pose.position.y 
    z_moveBase = data.target_pose.pose.orientation.z 
    w_moveBase = data.target_pose.pose.orientation.w
###################################################
def createAMCLPoseMessage():
    global x_amcl,y_amcl,z_amcl,w_amcl
    msg = "{\"publisher\":""\"amcl_pose\""",\"type\":""\"update_loc\""",\"x\":"+str(x_amcl)+",\"y\":"+str(y_amcl)+",\"z\":"+str(z_amcl)+"}"
    return msg
###################################################
#amcl posel --> amcl_pose
def callback_amcl(data):
    global x_amcl,y_amcl,z_amcl,w_amcl
    movement = False
    if x_amcl != data.pose.pose.position.x:
       movement = True
    if y_amcl != data.pose.pose.position.y:
       movement = True
    if z_amcl != data.pose.pose.position.z:
       movement = True

    x_amcl = data.pose.pose.position.x
    y_amcl = data.pose.pose.position.y
    z_amcl = data.pose.pose.orientation.z
    w_amcl = data.pose.pose.orientation.w

    if (movement == True):
        sendWebSocketMsg(createAMCLPoseMessage())
###################################################
###################################################
################ laser scanner ####################
###################################################
###################################################
#web socket
lastSend = int(round(time.time() * 1000))

def formatLaser(index):
    global ranges_filter
    if (str(ranges_filter[index]) == "inf"):
        ranges_filter[index] = 0
    return ranges_filter[index]
######################################
'''def sendLaserScanner():
    msg = "["+str(formatLaser(0))
    for j in range (1, 359):
        msg = msg + ","+str(formatLaser(j))
    
    msg = msg + "]"
'''
######################################
def createLaserScannerMessage():
    msg = "{\"publisher\":""\"laser_scan\""",\"type\":""\"update_laser\""",\"value\":["+str(formatLaser(0))
    for j in range (1, 359):
        msg = msg + ","+str(formatLaser(j))

    msg = msg + "]}"
    return msg
###################################################
def sendLaserScanner():
    sendWebSocketMsg(createLaserScannerMessage())
###################################################
def sendDataJson():
    msg = "[{\"publisher\":""\"amcl_pose\""",\"type\":""\"update_loc\""",\"x\":"+str(x_amcl)+",\"y\":"+str(y_amcl)+",\"z\":"+str(z_amcl)+"}, {\"publisher\":""\"laser_scan\""",\"type\":""\"update_laser\""",\"value\":["+str(formatLaser(0))
    for j in range (1, 359):
        msg = msg + ","+str(formatLaser(j))
    msg = msg + "]}]"
    with open('poser.json', 'w') as outfile:
        outfile.write(msg + '\n')
    return msg
###################################################
###################################################
#copy the range and intensities of "/scan" topic to "ranges_filter" and "intensities_filter"
#you need to convert them to "list" as "data.ranges" and "data.intensities" are "tuple"
def callback_scan(data):
    global ranges_filter, intensities_filter, lastSend, ranges_scanner_total, intensities_scanner_total

    len(data.ranges)
    len(data.intensities)

    #convert them to list
    ranges_filter = list(copy.copy(data.ranges))
    intensities_filter = list(copy.copy(data.intensities))

    ranges_scanner_total = list(copy.copy(data.ranges))
    intensities_scanner_total = list(copy.copy(data.intensities))

    #filtering those angles that I do not want them (based on the question)
    for x in range(40, 135):  #45, 135
        ranges_filter[x] = 0
        intensities_filter[x] = 0
        
    for y in range(220, 315):   #225, 315
        ranges_filter[y] = 0
        intensities_filter[y] = 0

    endTime = int(round(time.time() * 1000)) - lastSend
    if endTime > 1000:
        sendLaserScanner()
        sendDataJson()
        lastSend = int(round(time.time() * 1000))
###################################################
#Change 3D Scanner Data
def filter_scanner():
    #it is based on the type of laser scanner (length of data.ranges)
    num_readings = 359
    laser_frequency = 40

    count = 0
    rate = rospy.Rate(1.0) #1 time per second (it can be 10)
    while not rospy.is_shutdown():
        current_time = rospy.Time.now()

        filter_scan = LaserScan()

        filter_scan.header.stamp = current_time
        filter_scan.header.frame_id = 'base_scan' #'laser_frame'
        filter_scan.angle_min = 0 #-1.57 # start angle of the scan [rad]
        filter_scan.angle_max = math.pi * 2 #1.57 # end angle of the scan [rad]
        filter_scan.angle_increment = 0.0174532923847 #math.pi / num_readings # angular distance between measurements [rad]
        filter_scan.time_increment = 2.98699997074 #(1.0 / laser_frequency) / (num_readings) # time between measurements [seconds]
        filter_scan.range_min = 0.0 # minimum range value [m]
        filter_scan.range_max = 3.5 #100.0 # maximum range value [m]
        filter_scan.ranges = []
        filter_scan.intensities = []
	
        for i in range(0, num_readings-1):
            filter_scan.ranges = copy.copy(ranges_filter)
            filter_scan.intensities = copy.copy(intensities_filter)

        scan_pub.publish(filter_scan)
        rate.sleep()
###################################################
def quat_to_angle(quat):
    rot = PyKDL.Rotation.Quaternion(quat.x, quat.y, quat.z, quat.w)
    return rot.GetRPY()[2]
###################################################
def normalize_angle(angle):
    res = angle
    while res > pi:
        res -= 2.0 * pi
    while res < -pi:
        res += 2.0 * pi
    return res
###################################################
#getting odometry for movement based on meter
def get_odom(tf_listener, odom_frame, base_frame):
    # Get the current transform between the odom and base frames
    try:
        (trans, rot)  = tf_listener.lookupTransform(odom_frame, base_frame, rospy.Time(0))
    except (tf.Exception, tf.ConnectivityException, tf.LookupException):
        rospy.loginfo("TF Exception")
        return

    return (Point(*trans))
###################################################
#getting odometry for rotation
def get_odomRotate(tf_listener, odom_frame, base_frame):
    # Get the current transform between the odom and base frames
    try:
        (trans, rot)  = tf_listener.lookupTransform(odom_frame, base_frame, rospy.Time(0))
    except (tf.Exception, tf.ConnectivityException, tf.LookupException):
        rospy.loginfo("TF Exception")
        return

    return (quat_to_angle(Quaternion(*rot)))
###################################################
################SAFE MOVEMENT######################
###################################################
def safeMovement(range1, range2, distance, direction):
    global ranges_scanner_safe, ranges_scanner_total, scanBoolean_safe
    ranges_scanner_safe = []
    scanBoolean_safe = False

    if (direction == 1):
        ranges_scanner_safe = []
        for x in range(range1, 359):
            ranges_scanner_safe.append(ranges_scanner_total[x])
        for y in range(0, range2):
            ranges_scanner_safe.append(ranges_scanner_total[y])
        for i in range(0, len(ranges_scanner_safe)):
            if ranges_scanner_safe[i] <= distance and ranges_scanner_safe[i] != 0:
                rospy.loginfo(str(ranges_scanner_safe[i]))
                rospy.loginfo("*****There is a block near to you!*****")
                scanBoolean_safe = True
                flag = False
                break

    if (direction == 0):
        ranges_scanner_safe = []
        for x in range(range1, range2):
            ranges_scanner_safe.append(ranges_scanner_total[x])
        for i in range(0, len(ranges_scanner_safe)):
            if ranges_scanner_safe[i] <= distance and ranges_scanner_safe[i] != 0:
                rospy.loginfo(str(ranges_scanner_safe[i]))
                rospy.loginfo("*****I detected an obstacle!*****")
                scanBoolean_safe = True
                break

    return scanBoolean_safe

############################################################################
########################### EXPOSE FUNCTIONS ###############################
############################################################################
class block_ros_code(object):
###################################################
##############Web Socket connection################
###################################################
    #just to check the websocket connection
    @cherrypy.expose
    def ws(self):
        "Method must exist to serve as a exposed hook for the websocket"
        #handler = cherrypy.request.ws_handler
###################################################
    @cherrypy.expose
    def socket(self, msg):
        for conn in SUBSCRIBERS:
            conn.send(msg)
###################################################
    #send random data --> for checking only
    @cherrypy.expose
    def sendRandom(self):
        hello_str = "hello world %s" % rospy.get_time()
        rospy.loginfo(hello_str)
        pub.publish(hello_str)
        return 'Random Data Sent!'
###################################################
###################ROBOT STATUS####################
###################################################
#to get the JSON --> Pose2D data
    @cherrypy.expose
    def status(self):
        global x,y,theta, x_poseStamped, y_poseStamped, z_poseStamped, w_poseStamped, x_odom_position, y_odom_position, z_odom_position, x_odom_orientation, y_odom_orientation, z_odom_orientation, w_odom_orientation, ranges_scanner_boolean
        position = json.dumps([{"publisher":"Pose2D", "name":"tb3_baall", "x":str(x), "y":str(y), "theta":str(theta)}, {"publisher":"PoseStamped", "name":"tb3_baall", "x-pose":str(x_poseStamped), "y-pose":str(y_poseStamped), "z-pose":str(z_poseStamped), "w-pose":str(w_poseStamped)}, {"publisher":"Pose", "name":"tb3_baall", "x-position":str(x_odom_position), "y-position":str(y_odom_position), "z-position":str(z_odom_position), "x-orientation":str(x_odom_orientation), "y-orientation":str(y_odom_orientation), "z-orientation":str(z_odom_orientation), "w-orientation":str(w_odom_orientation)}, {"scan_data_block":str(ranges_scanner_boolean)}])
        return position
###################################################
#to get the JSON --> amcl data
    @cherrypy.expose
    def status_loc(self):
        global x_amcl,y_amcl,z_amcl,w_amcl
        name = "TurtleRobot3"
        position = json.dumps({"publisher":"amcl_pose","type":"update_loc","name":name,"x":str(x_amcl),"y":str(y_amcl),"z":str(z_amcl),"w":str(w_amcl)});
        return position
###################################################
    @cherrypy.expose
    def status_total(self):
        global x_amcl,y_amcl,z_amcl,w_amcl
        msg = "[{\"publisher\":""\"amcl_pose\""",\"type\":""\"update_loc\""",\"x\":"+str(x_amcl)+",\"y\":"+str(y_amcl)+",\"z\":"+str(z_amcl)+"}, {\"publisher\":""\"laser_scan\""",\"type\":""\"update_laser\""",\"value\":["+str(formatLaser(0))
        for j in range (1, 359):
            msg = msg + ","+str(formatLaser(j))

        msg = msg + "]}]"
        return msg
###################################################
#send Pose2D data
    @cherrypy.expose
    def poseBot(self,x=0,y=0,theta=0):
        v = Pose2D()
        v.x = np.float64(x)
        v.y = np.float64(y)
        v.theta = np.float64(theta)
        pub.publish(v)
        return 'Positioning & Rotating Data Sent!'
###################################################
#only x and y --> pose2D data
    @cherrypy.expose
    def sendBot(self,x=0,y=0):
        v = Pose2D()
        v.x = np.float64(x)
        v.y = np.float64(y)
        pub.publish(v)
        return 'Positioning Data Sent!'
###################################################
#only theta --> pose2D data
    @cherrypy.expose
    def rotateBot(self,theta=0):
        v = Pose2D()
        v.theta = np.float64(theta)
        pub.publish(v)
        return 'Rotation Data Sent!'
###################################################
###########BASED ON THE MAP and POSE###############
###################################################
#Change Pose Data --> start point
    @cherrypy.expose
    def initialization_pose(self):
        rate = rospy.Rate(1.0) #1 time per second (it can be 10)
        current_time = rospy.Time.now()

        initialpose = PoseWithCovarianceStamped()
        initialpose.header.stamp = current_time
        initialpose.header.frame_id = 'map'
        initialpose.pose.pose.position.x = 4.850
        initialpose.pose.pose.position.y = -1.754
        initialpose.pose.pose.position.z = 0.00

        initialpose.pose.pose.orientation.x = 0.00
        initialpose.pose.pose.orientation.y = 0.00
        initialpose.pose.pose.orientation.z = -0.999978085133
        initialpose.pose.pose.orientation.w = 0.00662036656129

        pose_pub.publish(initialpose)
        rate.sleep()
        return "Initialisation of Pose Data Sent!"
###################################################
#Change Pose Data --> by users --> it needs more calculation of the degrees
    @cherrypy.expose
    def change_pose(self, x_tar=0, y_tar=0, degreeAngle=0):
        rate = rospy.Rate(1.0) #1 time per second (it can be 10)
        current_time = rospy.Time.now()
        newpose = PoseWithCovarianceStamped()
        degreeAngle = np.float64(degreeAngle)
        degree2radian = degreeAngle* pi/180

        while(degree2radian < 0):
            degree2radian += 2* pi


        while(degree2radian >= 2* pi):
            degree2radian -= 2* pi

        #based on the SLAM map
        newpose.header.stamp = current_time
        newpose.header.frame_id = 'map'
        newpose.pose.pose.position.x = np.float64(x_tar)
        newpose.pose.pose.position.y = np.float64(y_tar)
        newpose.pose.pose.position.z = 0.00

        newpose.pose.pose.orientation.x = 0.00
        newpose.pose.pose.orientation.y = 0.00
        newpose.pose.pose.orientation.z = degree2radian
        newpose.pose.pose.orientation.w = 1

        pose_pub.publish(newpose)
        rate.sleep()
        print "angle_turned: %s" %newpose.pose.pose.orientation.z
        return "Initialisation of Pose Data Sent!"
###################################################
#send PoseStamped --> move_base data -->based on a SLAM map
    @cherrypy.expose
    def moveBot_map_simple(self,x_poseStamped=0.5,y_poseStamped=0,z_poseStamped=0):
        rate = rospy.Rate(10) # 10Hz
        goal = PoseStamped()
        goal.header.frame_id = "/base_footprint"
        goal.header.stamp = rospy.Time.now()
	
        goal.pose.position.x = np.float64(x_poseStamped)
        goal.pose.position.y = np.float64(y_poseStamped)
        goal.pose.position.z = 0.00

        goal.pose.orientation.x = 0.00
        goal.pose.orientation.y = 0.00
        goal.pose.orientation.z = np.float64(z_poseStamped)
        goal.pose.orientation.w = 1.00 #np.float64(w_poseStamped)
		
        while not rospy.is_shutdown():
            pub_move_simple.publish(goal)
            rate.sleep()
        goal = PoseStamped()
        pub_move_simple.publish(goal)

        return 'Moving Data Sent!'
###################################################
##################FREE NAVIGATION##################
################BASED ON THE CMD_VEL###############
###################################################
#moving forward for X second forward and backward
    @cherrypy.expose
    def movebot_second(self,direction=0,second=0,speed=0): #not more than 20 second
        global stop_robots
        rate = rospy.Rate(10) # 10Hz
        twist = Twist()
        start = time.time()
        flag=True #time flag
        speed=np.float64(speed)
        second=np.float64(second)
        direction=np.float64(direction)
		
        twist.linear.z = 0.00

        if second > 30:
            second = 30
			
        if speed == 0:
            twist.linear.x = 0.00

        if speed == 1 and direction == 1:
            twist.linear.x = 0.10
        elif speed == 2 and direction == 1:
            twist.linear.x = 0.30
        elif speed == 3 and direction == 1:
            twist.linear.x = 0.50

        if speed == 1 and direction == 0:
            twist.linear.x = -0.10
        elif speed == 2 and direction == 0:
            twist.linear.x = -0.30
        elif speed == 3 and direction == 0:
            twist.linear.x = -0.50

        while not rospy.is_shutdown() and flag and stop_robots:
            sample_time=time.time()
            if ((sample_time - start) > second):
                flag=False
                break
            velocity_pub.publish(twist)
            rate.sleep()

        twist = Twist()
        velocity_pub.publish(twist) 
        rate.sleep()
        return 'Second Movement Data Sent!'
###########################################
#turning for X second to right and left
    @cherrypy.expose
    def turnbot_second(self,clockwise=0,second=0,speed=0): #not more than 20 second
        global stop_robots
        rate = rospy.Rate(10) # 10Hz
        twist = Twist()
        start = time.time()
        flag=True #time flag
        speed=np.float64(speed)
        second=np.float64(second)
        clockwise=np.float64(clockwise)
		
        twist.linear.x = 0.00
        twist.linear.y = 0.00
        twist.linear.z = 0.00
		
        twist.angular.x = 0.00
        twist.angular.y = 0.00
		
        if second > 30:
            second = 30
		
        if speed == 0:
            twist.angular.z = 0.00

        if speed == 1 and clockwise == 1:
            twist.angular.z = -0.10
        elif speed == 2 and clockwise == 1:
            twist.angular.z = -0.25
        elif speed == 3 and clockwise == 1:
            twist.angular.z = -0.75

        if speed == 1 and clockwise == 0:
            twist.angular.z = 0.10
        elif speed == 2 and clockwise == 0:
            twist.angular.z = 0.25
        elif speed == 3 and clockwise == 0:
            twist.angular.z = 0.75

        while not rospy.is_shutdown() and flag and stop_robots:
            sample_time=time.time()
            if ((sample_time - start) > second):
                flag = False
                break

            velocity_pub.publish(twist)
            rate.sleep()

        twist = Twist()
        velocity_pub.publish(twist)
        rate.sleep()
        return 'Rotational Movement Data Sent!'
###################################################
#moving for X distance forward and backward
#based on /tf
    @cherrypy.expose
    def movebot_distance(self,direction=0,distance=0,speed=0): #not more than 3 meter
        global stop_robots
        #declare a Twist message to send velocity commands
        twist = Twist()
        speed=np.float64(speed)
        distance=np.float64(distance)
        direction=np.float64(direction)

        # declare tf transform listener: this transform listener will be used to listen and capture the transformation between
        # the odom frame (that represent the reference frame) and the base_footprint frame the represent moving frame
        listener = tf.TransformListener()

        #set the linear velocity to a positive value if direction is forward
        if distance > 3:
            distance = 3
        #get distance in meter
        #distance = distance * 10

        # all velocities of other axes must be zero.
        twist.linear.z = 0.00
        twist.linear.y = 0.00

        #The angular velocity of all axes must be zero because we want  a straight motion
        twist.angular.x = 0.00
        twist.angular.y = 0.00
        twist.angular.z = 0.00

        distance_moved = 0
        rate = rospy.Rate(20) # we publish the velocity at 10 Hz (20 times a second)

        if speed == 0:
            twist.linear.x = 0.00
        if speed == 1 and direction == 1:
            twist.linear.x = 0.10
        elif speed == 2 and direction == 1:
            twist.linear.x = 0.30
        elif speed == 3 and direction == 1:
            twist.linear.x = 0.50

        if speed == 1 and direction == 0:
            twist.linear.x = -0.10
        elif speed == 2 and direction == 0:
            twist.linear.x = -0.30
        elif speed == 3 and direction == 0:
            twist.linear.x = -0.50

        #  First, we capture the initial transformation before starting the motion.
        # we call this transformation "init_transform"
        # It is important to "waitForTransform" otherwise, it might not be captured.
        odom_frame = "/odom"
        try:
            #wait for the transform to be found
            listener.waitForTransform(odom_frame, "/base_footprint", rospy.Time(0),rospy.Duration(1.0))
            base_frame = "/base_footprint"
            #Once the transform is found,get the initial_transform transformation.
        except (tf.Exception, tf.ConnectivityException, tf.LookupException):
            try:
                listener.waitForTransform(odom_frame, "/base_link", rospy.Time(0),rospy.Duration(1.0))
                base_frame = "/base_link"
            except (tf.Exception, tf.ConnectivityException, tf.LookupException):
                rospy.loginfo("Cannot find transform between /odom and /base_link or /base_footprint")
                rospy.signal_shutdown("tf Exception")

        ###################################################
        # Initialize the position variable as a Point type
        position = Point()

        # Get the starting position values
        position = get_odom(listener, odom_frame, base_frame)
        x_start = position.x
        y_start = position.y

        # Keep track of the distance traveled
        distance_moved = 0

        while not rospy.is_shutdown() and stop_robots:
            #publish velocity
            velocity_pub.publish(twist)
            rate.sleep()
            # Get the current position
            position = get_odom(listener, odom_frame, base_frame)
            #estimate the distance moved by robot
            distance_moved = sqrt(pow((position.x - x_start), 2) + pow((position.y - y_start), 2))

            print "distance: %s" %distance
            print "moved: %s" %distance_moved
            if (distance_moved >= distance-0.10):
                if(direction == 1):
                    twist.linear.x = 0.10
                else:
                    twist.linear.x = -0.10

            if (distance_moved > distance):
                print "Breaking!!!"
                break

            velocity_pub.publish(twist)
            rate.sleep()

        #stop the robot when the distance is reached
        twist = Twist()
        twist.linear.x = 0
        velocity_pub.publish(twist)
        rate.sleep()

        return 'Distance Movement Data Sent!'
###################################################
#turning for X degree to right and left
#based on /tf --> with angular tolerance
    @cherrypy.expose
    def turnbot_degree(self,clockwise=0,degreeAngle=0,speed=0): # not more than 180 degree in each direction
        global stop_robots
        #declare a Twist message to send velocity commands
        twist = Twist()
        speed=np.float64(speed)
        degreeAngle=np.float64(degreeAngle)
        clockwise=np.float64(clockwise)

        # declare tf transform listener: this transform listener will be used to listen and capture the transformation between
        # the odom frame (that represent the reference frame) and the base_footprint frame the represent moving frame
        listener = tf.TransformListener()

        # Set the angular tolerance in degrees converted to radians
        if(clockwise == 0):
            angular_tolerance = radians(2.5)
        else:
            angular_tolerance = radians(-2.5)

        # Set the rotation angle to Pi radians (180 degrees)
        goal_angle = degreeAngle*(pi/180)

        twist.linear.x = 0.00
        twist.linear.y = 0.00
        twist.linear.z = 0.00

        twist.angular.x = 0.00
        twist.angular.y = 0.00

        turn_angle = 0
        rate = rospy.Rate(20) # we publish the velocity at 10 Hz (20 times a second)

        # Angular velocity = linear velocity / radius
        if speed == 0:
            twist.angular.z = 0.00

        if speed == 1 and clockwise == 0:
            twist.angular.z = 0.25
        elif speed == 2 and clockwise == 0:
            twist.angular.z = 0.5
        elif speed == 3 and clockwise == 0:
            twist.angular.z = 0.75

        if speed == 1 and clockwise == 1:
            twist.angular.z = -0.25
        elif speed == 2 and clockwise == 1:
            twist.angular.z = -0.5
        elif speed == 3 and clockwise == 1:
            twist.angular.z = -0.75

        # Set the odom frame
        odom_frame = "/odom"

        try:
            #wait for the transform to be found
            listener.waitForTransform(odom_frame, "/base_footprint", rospy.Time(0),rospy.Duration(1.0))
            base_frame = "/base_footprint"
            #Once the transform is found,get the initial_transform transformation.
        except (tf.Exception, tf.ConnectivityException, tf.LookupException):
            try:
                listener.waitForTransform(odom_frame, "/base_link", rospy.Time(0),rospy.Duration(1.0))
                base_frame = "/base_link"
            except (tf.Exception, tf.ConnectivityException, tf.LookupException):
                rospy.loginfo("Cannot find transform between /odom and /base_link or /base_footprint")
                rospy.signal_shutdown("tf Exception")

        ###################################################
        # Get the starting position values
        rotation = get_odomRotate(listener, odom_frame, base_frame)

        # Track the last angle measured
        last_angle = rotation

        # Track how far we have turned
        turn_angle = 0

        while not rospy.is_shutdown() and stop_robots:
            #publish velocity
            velocity_pub.publish(twist)
            rate.sleep()

            #Get the current rotation
            rotation = get_odomRotate(listener, odom_frame, base_frame)
            #Compute the amount of rotation since the last loop
            delta_angle = normalize_angle(rotation - last_angle)

            # Add to the running total
            turn_angle += delta_angle
            last_angle = rotation

            turn = abs(turn_angle + angular_tolerance)
            goal = abs(goal_angle)

            print "goal_angle: %s" %goal_angle
            print "rotate: %s" %rotation
            if (abs(turn_angle + angular_tolerance) > abs(goal_angle)-0.25):
                if(clockwise == 0):
                    twist.angular.z = 0.20
                else:
                    twist.angular.z = -0.20
            print "turn: %s" %turn
            print "goal_angle: %s" %goal
            if (abs(turn_angle + angular_tolerance) > abs(goal_angle)):
                print "Breaking!!!"
                break

            velocity_pub.publish(twist)
            rate.sleep()

        twist = Twist()
        twist.angular.z = 0.00
        velocity_pub.publish(twist)
        rate.sleep()

        return 'Rotational Movement Data Sent!'
###################################################
##############SAFE MOVEMENT METER##################
###################################################
#based on /tf
    @cherrypy.expose
    def safeMovebot_distance(self,direction=0,distance=0,speed=0): #not more than 3 meter
        global stop_robots
        global scanBoolean_safe
        global ranges_scanner, ranges_scanner_total
        #declare a Twist message to send velocity commands
        twist = Twist()

        turnFlag = 0
        turnDegree = 0

        speed = np.float64(speed)
        distance = np.float64(distance)
        direction = np.float64(direction)

        fx_range = 345
        fy_range = 15

        bx_range = 165
        by_range = 195

        block_distance = 50

        fx_range = int(fx_range)
        fy_range = int(fy_range)

        bx_range = int(bx_range)
        by_range = int(by_range)

        block_distance = float(block_distance)

        block_distance = block_distance/100

        # declare tf transform listener: this transform listener will be used to listen and capture the transformation between
        # the odom frame (that represent the reference frame) and the base_footprint frame the represent moving frame
        listener = tf.TransformListener()

        if distance > 3:
            distance = 3

        # all velocities of other axes must be zero.
        twist.linear.z = 0.00
        twist.linear.y = 0.00

        #The angular velocity of all axes must be zero because we want  a straight motion
        twist.angular.x = 0.00
        twist.angular.y = 0.00
        twist.angular.z = 0.00

        distance_moved = 0
        rate = rospy.Rate(20) # we publish the velocity at 10 Hz (10 times a second)

        if speed == 0:
            twist.linear.x = 0.00

        if speed == 1 and direction == 1:
            twist.linear.x = 0.10
        elif speed == 2 and direction == 1:
            twist.linear.x = 0.30
        elif speed == 3 and direction == 1:
            twist.linear.x = 0.50

        if speed == 1 and direction == 0:
            twist.linear.x = -0.10
        elif speed == 2 and direction == 0:
            twist.linear.x = -0.30
        elif speed == 3 and direction == 0:
            twist.linear.x = -0.50

        ranges_scanner = list(ranges_scanner_total)
        ranges_scanner_help = []
        ###################################################
        scanBoolean = False

        odom_frame = "/odom"
        try:
            #wait for the transform to be found
            listener.waitForTransform(odom_frame, "/base_footprint", rospy.Time(0),rospy.Duration(1.0))
            base_frame = "/base_footprint"
            #Once the transform is found,get the initial_transform transformation
        except (tf.Exception, tf.ConnectivityException, tf.LookupException):
            try:
                listener.waitForTransform(odom_frame, "/base_link", rospy.Time(0),rospy.Duration(1.0))
                base_frame = "/base_link"
            except (tf.Exception, tf.ConnectivityException, tf.LookupException):
                rospy.loginfo("Cannot find transform between /odom and /base_link or /base_footprint")
                rospy.signal_shutdown("tf Exception")

        ###################################################
        # Initialize the position variable as a Point type
        position = Point()

        # Get the starting position values
        position = get_odom(listener, odom_frame, base_frame)
        x_start = position.x
        y_start = position.y

        # Keep track of the distance traveled
        distance_moved = 0

        while not rospy.is_shutdown() and stop_robots:
            #publish velocity
            velocity_pub.publish(twist)
            rate.sleep()
            # Get the current position
            position = get_odom(listener, odom_frame, base_frame)
            #estimate the distance moved by robot
            distance_moved = sqrt(pow((position.x - x_start), 2) + pow((position.y - y_start), 2))

            print "distance: %s" %distance
            print "moved: %s" %distance_moved
            if (distance_moved >= distance-0.10):
                if(direction == 1):
                    twist.linear.x = 0.10
                else:
                    twist.linear.x = -0.10

            if (distance_moved > distance):
                print "Breaking!!!"
                break

            checkAgain = False
            ###################################################
            #when it is already rotated for one time
            if(turnDegree != 0):
                #moving forward
                if (direction == 1):
                    #moving to right
                    if(turnFlag == 1):
                        if(safeMovement(turnDegree-20, turnDegree+20, 0.5, 0) == False):
                            self.turnbot_degree(0, turnDegree, 2)
                            turnFlag = 0
                            turnDegree = 0
                        else:
                            rospy.loginfo("*****there is still an obstacle to the left")
                            checkAgain = True
                    #moving to left
                    else:
                        if(safeMovement(360-turnDegree-20, 360-turnDegree+20, 0.5, 0) == False):
                            self.turnbot_degree(1, turnDegree, 2)
                            turnFlag = 0
                            turnDegree = 0
                        else:
                            rospy.loginfo("*****there is still an obstacle to the right")
                            checkAgain = True
                #Moving backward
                else:
                    #moving to left
                    if(turnFlag == 0):
                        if(safeMovement(180-turnDegree-50, 180-turnDegree+20, 0.5, 0) == False):
                            self.turnbot_degree(1, turnDegree, 2)
                            turnFlag = 0
                            turnDegree = 0
                        else:
                            rospy.loginfo("*****there is still an obstacle to the right")
                            checkAgain = True
                            #moving to right
                    else:
                        if(safeMovement(180+turnDegree-20, 180+turnDegree+20, 0.5, 0) == False):
                            self.turnbot_degree(0, turnDegree, 2)
                            turnFlag = 0
                            turnDegree = 0
                        else:
                            rospy.loginfo("*****there is still an obstacle to the left")
                            checkAgain = True
            ###################Check scanner###################
            #for the first time rotation
            else:
                #moving forward
                if direction == 1:
                    if(safeMovement(fx_range, fy_range, block_distance, direction) == True):
                        rospy.loginfo("*****%There is a block near to you%!*****")
                        if(safeMovement(16, 45, 0.6, 0) == True):
                            rospy.loginfo("*****There is a block near to left01!*****")
                            if(safeMovement(315, 344, 0.6, 0) == True):
                                rospy.loginfo("*****There is a block near to right01!*****")
                                if(safeMovement(46, 70, 0.6, 0) == True):
                                    rospy.loginfo("*****There is a block near to left02!*****")
                                    if(safeMovement(290, 314, 0.6, 0) == True):
                                        rospy.loginfo("*****There is a block near to right02!*****")
                                        if(safeMovement(71, 90, 0.6, 0) == True):
                                            rospy.loginfo("*****There is a block near to left03!*****")
                                            if(safeMovement(270, 289, 0.6, 0) == True):
                                                rospy.loginfo("*****There is a block near to right03!*****")
                                                break
                                            else: #right03
                                                turnFlag = 1
                                                turnDegree = 70
                                                self.turnbot_degree(turnFlag, turnDegree, 2)
                                        else: #left03
                                            turnFlag = 0
                                            turnDegree = 70
                                            self.turnbot_degree(turnFlag, turnDegree, 2)
                                    else: #right02
                                        turnFlag = 1
                                        turnDegree = 50
                                        self.turnbot_degree(turnFlag, turnDegree, 2)
                                else: #left02
                                    turnFlag = 0
                                    turnDegree = 50
                                    self.turnbot_degree(turnFlag, turnDegree, 2)
                            else: #right01
                                turnFlag = 1
                                turnDegree = 30
                                self.turnbot_degree(turnFlag, turnDegree, 2)
                        else: #left01
                            turnFlag = 0
                            turnDegree = 30
                            self.turnbot_degree(turnFlag, turnDegree, 2)
                    else:
                        rospy.loginfo("There is NO block near to you!")

                        scanBoolean = False
                ###################################################
                #moving backward
                elif direction == 0:
                    if(safeMovement(bx_range, by_range, block_distance, direction) == True):
                        rospy.loginfo("*****%There is a block near to you%!*****")
                        if(safeMovement(135, 165, 0.6, 0) == True):
                            rospy.loginfo("*****There is a block near to left01!*****")
                            if(safeMovement(196, 225, 0.6, 0) == True):
                                rospy.loginfo("*****There is a block near to right01!*****")
                                if(safeMovement(110, 134, 0.6, 0) == True):
                                    rospy.loginfo("*****There is a block near to left02!*****")
                                    if(safeMovement(226, 250, 0.6, 0) == True):
                                        rospy.loginfo("*****There is a block near to right01!*****")
                                        if(safeMovement(90, 109, 0.6, 0) == True):
                                            rospy.loginfo("*****There is a block near to left03!*****")
                                            if(safeMovement(251, 270, 0.6, 0) == True):
                                                rospy.loginfo("*****There is a block near to right03!*****")
                                                scanBoolean = True
                                                break
                                            else: #right03
                                                turnFlag = 0
                                                turnDegree = 70
                                                self.turnbot_degree(turnFlag, turnDegree, 2)
                                        else: #left03
                                            turnFlag = 1
                                            turnDegree = 70
                                            self.turnbot_degree(turnFlag, turnDegree, 2)
                                    else: #right02
                                        turnFlag = 0
                                        turnDegree = 50
                                        self.turnbot_degree(turnFlag, turnDegree, 2)
                                else: #left02
                                    turnFlag = 1
                                    turnDegree = 50
                                    self.turnbot_degree(turnFlag, turnDegree, 2)
                            else: #right01
                                turnFlag = 0
                                turnDegree = 30
                                self.turnbot_degree(turnFlag, turnDegree, 2)
                        else: #left01
                            turnFlag = 1
                            turnDegree = 30
                            self.turnbot_degree(turnFlag, turnDegree, 2)
                    else:
                        rospy.loginfo("There is NO block near to you!")

                    scanBoolean = False
            #if there is an obtacle in the direction that robot want to routate back to, it needs to check an obstacle in front
            #if it is, robot stop moving
            if (checkAgain):
                if (direction == 1):
                    if(safeMovement(fx_range, fy_range, block_distance, direction) == True):
                        rospy.loginfo("*****%There is a block near to you%! - I am breaking!!!*****")
                        break
                else:
                    if(safeMovement(bx_range, by_range, block_distance, direction) == True):
                        rospy.loginfo("*****%There is a block near to you%! - I am breaking!!!*****")
                        break
            ###################################################
            velocity_pub.publish(twist)
            rate.sleep()

        #stop the robot when the distance is moved
        twist = Twist()
        twist.linear.x = 0
        velocity_pub.publish(twist)
        rate.sleep()

        return 'Distance Movement Data Sent!'
###################################################
###############SAFE MOVEMENT SECOND################
###################################################
# moving forward for X second forward and backward
    @cherrypy.expose
    def safeMovebot_second(self, direction=0, second=0, speed=0):  # not more than 20 second
        global stop_robots
        global scanBoolean_safe
        global ranges_scanner, ranges_scanner_total

        turnFlag = 0
        turnDegree = 0

        rate = rospy.Rate(10)  # 10Hz
        twist = Twist()
        start = time.time()
        flag = True  # time flag
        speed = np.float64(speed)
        second = np.float64(second)
        direction = np.float64(direction)

        twist.linear.z = 0.00

        if second > 30:
            second = 30

        if speed == 0:
            twist.linear.x = 0.00

        if speed == 1 and direction == 1:
            twist.linear.x = 0.05
        elif speed == 2 and direction == 1:
            twist.linear.x = 0.07
        elif speed == 3 and direction == 1:
            twist.linear.x = 0.10

        if speed == 1 and direction == 0:
            twist.linear.x = -0.05
        elif speed == 2 and direction == 0:
            twist.linear.x = -0.07
        elif speed == 3 and direction == 0:
            twist.linear.x = -0.10

        fx_range = 345
        fy_range = 15

        bx_range = 165
        by_range = 195

        distance = 50

        fx_range = int(fx_range)
        fy_range = int(fy_range)

        bx_range = int(bx_range)
        by_range = int(by_range)

        distance = float(distance)

        distance = distance/100

        ranges_scanner = list(ranges_scanner_total)
        ranges_scanner_help = []
        ###################################################
        scanBoolean = False
        while not rospy.is_shutdown() and flag and stop_robots:
            sample_time = time.time()
            if ((sample_time - start) > second):
                flag = False
                break
            checkAgain = False
            ###################################################
            #when it is already rotated for one time
            if(turnDegree != 0):
                #moving forward
                if (direction == 1):
                    #moving to right
                    if(turnFlag == 1):
                        if(safeMovement(turnDegree-20, turnDegree+20, 0.5, 0) == False):
                            self.turnbot_degree(0, turnDegree, 2)
                            turnFlag = 0
                            turnDegree = 0
                        else:
                            rospy.loginfo("*****there is still an obstacle to the left")
                            checkAgain = True
                    #moving to left
                    else:
                        if(safeMovement(360-turnDegree-20, 360-turnDegree+20, 0.5, 0) == False):
                            self.turnbot_degree(1, turnDegree, 2)
                            turnFlag = 0
                            turnDegree = 0
                        else:
                            rospy.loginfo("*****there is still an obstacle to the right")
                            checkAgain = True
                #Moving backward
                else:
                    #moving to left
                    if(turnFlag == 0):
                        if(safeMovement(180-turnDegree-30, 180-turnDegree+20, 0.5, 0) == False):
                            self.turnbot_degree(1, turnDegree, 2)
                            turnFlag = 0
                            turnDegree = 0
                        else:
                            rospy.loginfo("*****there is still an obstacle to the right")
                            checkAgain = True
                    #moving to right
                    else:
                        if(safeMovement(180+turnDegree-20, 180+turnDegree+20, 0.5, 0) == False):
                            self.turnbot_degree(0, turnDegree, 2)
                            turnFlag = 0
                            turnDegree = 0
                        else:
                            rospy.loginfo("*****there is still an obstacle to the left")
                            checkAgain = True
            #####################Check scanner#################
            #for the first time rotation
            else:
                #moving forward
                if direction == 1:
                    if(safeMovement(fx_range, fy_range, distance, direction) == True):
                        rospy.loginfo("*****%There is a block near to you%!*****")
                        if(safeMovement(16, 45, 0.6, 0) == True):
                            rospy.loginfo("*****There is a block near to left01!*****")
                            if(safeMovement(315, 344, 0.6, 0) == True):
                                rospy.loginfo("*****There is a block near to right01!*****")
                                if(safeMovement(46, 70, 0.6, 0) == True):
                                    rospy.loginfo("*****There is a block near to left02!*****")
                                    if(safeMovement(290, 314, 0.6, 0) == True):
                                        rospy.loginfo("*****There is a block near to right02!*****")
                                        if(safeMovement(71, 90, 0.6, 0) == True):
                                            rospy.loginfo("*****There is a block near to left03!*****")
                                            if(safeMovement(270, 289, 0.6, 0) == True):
                                                rospy.loginfo("*****There is a block near to right03!*****")
                                                flag = False
                                                break
                                            else: #right03
                                                turnFlag = 1
                                                turnDegree = 70
                                                self.turnbot_degree(turnFlag, turnDegree, 2)
                                        else: #left03
                                            turnFlag = 0
                                            turnDegree = 70
                                            self.turnbot_degree(turnFlag, turnDegree, 2)
                                    else: #right02
                                        turnFlag = 1
                                        turnDegree = 50
                                        self.turnbot_degree(turnFlag, turnDegree, 2)
                                else: #left02
                                    turnFlag = 0
                                    turnDegree = 50
                                    self.turnbot_degree(turnFlag, turnDegree, 2)
                            else: #right01
                                turnFlag = 1
                                turnDegree = 30
                                self.turnbot_degree(turnFlag, turnDegree, 2)
                        else: #left01
                            turnFlag = 0
                            turnDegree = 30
                            self.turnbot_degree(turnFlag, turnDegree, 2)
                    else:
                        rospy.loginfo("There is NO block near to you!")

                        scanBoolean = False
                ###################################################
                #moving backward
                elif direction == 0:
                    if(safeMovement(bx_range, by_range, distance, direction) == True):
                        rospy.loginfo("*****%There is a block near to you%!*****")
                        if(safeMovement(135, 165, 0.6, 0) == True):
                            rospy.loginfo("*****There is a block near to left01!*****")
                            if(safeMovement(196, 225, 0.6, 0) == True):
                                rospy.loginfo("*****There is a block near to right01!*****")
                                if(safeMovement(110, 134, 0.6, 0) == True):
                                    rospy.loginfo("*****There is a block near to left02!*****")
                                    if(safeMovement(226, 250, 0.6, 0) == True):
                                        rospy.loginfo("*****There is a block near to right02!*****")
                                        if(safeMovement(90, 109, 0.6, 0) == True):
                                            rospy.loginfo("*****There is a block near to left03!*****")
                                            if(safeMovement(251, 270, 0.6, 0) == True):
                                                rospy.loginfo("*****There is a block near to right03!*****")
                                                scanBoolean = True
                                                flag = False
                                                break
                                            else: #right03
                                                turnFlag = 0
                                                turnDegree = 70
                                                self.turnbot_degree(turnFlag, turnDegree, 2)
                                        else: #left03
                                            turnFlag = 1
                                            turnDegree = 70
                                            self.turnbot_degree(turnFlag, turnDegree, 2)
                                    else: #right02
                                        turnFlag = 0
                                        turnDegree = 50
                                        self.turnbot_degree(turnFlag, turnDegree, 2)
                                else: #left02
                                    turnFlag = 1
                                    turnDegree = 50
                                    self.turnbot_degree(turnFlag, turnDegree, 2)
                            else: #right01
                                turnFlag = 0
                                turnDegree = 30
                                self.turnbot_degree(turnFlag, turnDegree, 2)
                        else: #left01
                            turnFlag = 1
                            turnDegree = 30
                            self.turnbot_degree(turnFlag, turnDegree, 2)
                    else:
                        rospy.loginfo("There is NO block near to you!")

                    scanBoolean = False
            #if there is an obtacle in the direction that robot want to routate back to, it needs to check an obstacle in front
            #if it is, robot stop moving
            if (checkAgain):
                if (direction == 1):
                    if(safeMovement(fx_range, fy_range, distance, direction) == True):
                        rospy.loginfo("*****%There is a block near to you%! - I am breaking!!!*****")
                        flag = False
                        break
                else:
                    if(safeMovement(bx_range, by_range, distance, direction) == True):
                        rospy.loginfo("*****%There is a block near to you%! - I am Breaking!!!*****")
                        flag = False
                        break
            ###########################################
            velocity_pub.publish(twist)
            rate.sleep()

        twist = Twist()
        velocity_pub.publish(twist)
        rate.sleep()
        return 'Second Movement Data Sent!'
###################################################
###################################################
###################################################
#sleep for X seconds
    @cherrypy.expose
    def sleep_robot(self,x_second=0):
        x_second=np.float64(x_second)
        print "robot Slpeeping: %s" %x_second
        rospy.sleep(x_second)
        return 'Sleping Time Set!'
###################################################
# stop turtlebot
    @cherrypy.expose
    def stop_robot(self):
        global stop_robots
        rate = rospy.Rate(10) # 10Hz
        twist = Twist()
        start = time.time()
        flag=True #time flag

        twist.linear.x = 0.00
        twist.linear.y = 0.00
        twist.linear.z = 0.00
        twist.angular.x = 0.00
        twist.angular.y = 0.00
        twist.angular.z = 0.00

        while not rospy.is_shutdown() and flag:
            sample_time=time.time()
            if ((sample_time - start) > 2):
                flag=False
                break
            velocity_pub.publish(twist)
        twist = Twist()
        velocity_pub.publish(twist)
        rate.sleep()

        rospy.loginfo("*********************ROBOT STOPED**************************")

        return 'Shutdown Set!'
###################################################
#################FOR SCANNER DATA##################
###################################################
#return all scanner data
    @cherrypy.expose
    def scanner_data(self):
        global ranges_filter, intensities_filter, ranges_scanner, intensities_scanner, ranges_scanner_total, intensities_scanner_total
        ranges_scanner = list(ranges_scanner_total)
        rospy.loginfo("#################" + str(ranges_scanner[10]) + "#################")
        rospy.loginfo("#################" + str(len(ranges_scanner)) + "#################")
    
        if (str(ranges_scanner[0]) == "inf"):
            ranges_scanner[0] = 0
        galaxies = "{\"publisher\":""\"laser_scan\""",\"type\":""\"update_laser\""",\"value\":["+str(ranges_scanner[0])
        for j in range (1, len(ranges_scanner)):
            if (str(ranges_scanner[j]) == "inf"):
                ranges_scanner[j] = 0
            galaxies = galaxies + ","+str(ranges_scanner[j])

        galaxies = galaxies + "]}"

        return galaxies
###################################################
#return scanner data between 2 degrees
    @cherrypy.expose
    def scanner_data_limit(self, x_range=0, y_range=0):
        global ranges_filter, intensities_filter, ranges_scanner, intensities_scanner, ranges_scanner_total, intensities_scanner_total, intensities_scanner_total

        x_range=np.float64(x_range)
        y_range=np.float64(y_range)

        x_range=int(x_range)
        y_range=int(y_range)

        ranges_scanner = list(ranges_scanner_total)
        ranges_scanner_limit = []

        if x_range > y_range:
            rospy.loginfo("value of x is bigger than y!")
            for x in range(x_range, 359):
                ranges_scanner_limit.append(ranges_scanner_total[x])
            for y in range(0, y_range):
                ranges_scanner_limit.append(ranges_scanner_total[y])
        elif x_range < y_range:
            rospy.loginfo("value of x is smaller than y!")
            for x in range(x_range, y_range):
                ranges_scanner_limit.append(ranges_scanner_total[x])
        elif x_range == y_range:
            rospy.loginfo("value of x is equal to y!")
            ranges_scanner_limit.append(0)
        if (str(ranges_scanner_limit[0]) == "inf"):
            ranges_scanner_limit[0] = 0
        galaxies = "{\"publisher\":""\"laser_scan\""",\"type\":""\"update_laser\""",\"value\":["+str(ranges_scanner_limit[0])
        for j in range (1, len(ranges_scanner_limit)):
            if (str(ranges_scanner_limit[j]) == "inf"):
                ranges_scanner_limit[j] = 0

            galaxies = galaxies + ","+str(ranges_scanner_limit[j])

        galaxies = galaxies + "]}"

        return galaxies
###################################################
#checking laser scanner data based --> return boolean
    @cherrypy.expose
    def scanner_data_check(self, x_range=0, y_range=0, distance=0):
        global ranges_filter, intensities_filter, ranges_scanner, intensities_scanner, ranges_scanner_boolean, ranges_intensities_boolean, ranges_scanner_total, intensities_scanner_total

        x_range=np.float64(x_range)
        y_range=np.float64(y_range)
        distance=np.float64(distance)

        x_range=int(x_range)
        y_range=int(y_range)
        distance=float(distance)

        distance = distance/100
        print "@@@@@@@@@@@@@@@@ distance %s" %distance


        ranges_scanner = list(ranges_scanner_total)
        ranges_scanner_help = []

        if x_range > y_range:
            for x in range(x_range, 359):
                if (str(ranges_scanner_total[x]) == "inf"):
                    ranges_scanner_total[x] = 0
                ranges_scanner_help.append(ranges_scanner_total[x])
            for y in range(0, y_range):
                if (str(ranges_scanner_total[y]) == "inf"):
                    ranges_scanner_total[y] = 0
                ranges_scanner_help.append(ranges_scanner_total[y])

        elif x_range < y_range:
            for x in range(x_range, y_range):
                if (str(ranges_scanner_total[x]) == "inf"):
                    ranges_scanner_total[x] = 0
                ranges_scanner_help.append(ranges_scanner_total[x])

        elif x_range == y_range:
            return 'value of x is equal to y!'


        for i in range(0, len(ranges_scanner_help)):
            if ranges_scanner_help[i] <= distance and ranges_scanner_help[i] != 0: #and intensities_scanner[i] > 3800
                rospy.loginfo("There is a block near to you!")
                ranges_scanner_boolean = 1
                break
            elif ranges_scanner_help[i] > distance or ranges_scanner_help[i] == 0: #and intensities_scanner[i] > 3800
                rospy.loginfo(str(ranges_scanner_help[i]))
                rospy.loginfo("There is NO block near to you!")
                ranges_scanner_boolean = 0

        print "@@@@@@@@@@@@@@@@ There is a block?!: %s" %ranges_scanner_boolean
        return str(ranges_scanner_boolean)
###################################################
##just to check the data
    @cherrypy.expose
    def check_scanner_data(self):
        global ranges_filter, intensities_filter, ranges_scanner, intensities_scanner, ranges_scanner_total, intensities_scanner_total
        ranges_scanner = list(ranges_scanner_total)

        rospy.loginfo("#################" + str(ranges_scanner[10]) + "#################")
        return " " +str(ranges_scanner[10])+" "
###################################################
################MAP NAVIGATION#####################
############BASED ON THE MOVE_BASE#################
###################################################
#send MoveBaseActionGoal --> move_base data -->based on base_footprint
    @cherrypy.expose
    def movebot_link(self,target_x=0):
        rate = rospy.Rate(10) # 10Hz
        target_x=np.float64(target_x)
	    #tell the action client that we want to spin a thread by default
        move_base = actionlib.SimpleActionClient("/move_base", MoveBaseAction)
        rospy.loginfo("wait for the action server to come up")
	    #allow up to 10 seconds for the action server to come up
        move_base.wait_for_server(rospy.Duration(5.0))

        #send a goal to the robot to move X meters forward
        goal = MoveBaseGoal()
        goal.target_pose.header.frame_id = 'base_link' #base_footprint OR base_link
        goal.target_pose.header.stamp = rospy.Time.now()
        goal.target_pose.pose.position.x = target_x #X meters
        goal.target_pose.pose.orientation.w = 1 #always 1

        #start moving
        move_base.send_goal(goal)

        #allow robot up to 60 seconds to complete task
        success = move_base.wait_for_result(rospy.Duration(60))

        if not success:
            move_base.cancel_goal()
            rospy.loginfo("The base failed to move" +str(target_x)+ " meter forward")
            return False
        elif success:
            state = move_base.get_state()
            if state == GoalStatus.SUCCEEDED:
                rospy.loginfo("the robot moved " +str(target_x)+ " meter forward")

        return 'Moving Data Sent!'
###################################################
#send MoveBaseActionGoal --> move_base data -->based on base_link
    @cherrypy.expose
    def turnbot_link(self,degreeAngle=0):
        rate = rospy.Rate(10) # 10Hz
        degreeAngle=np.float64(degreeAngle)
	    #tell the action client that we want to spin a thread by default
        move_base = actionlib.SimpleActionClient("/move_base", MoveBaseAction)
        rospy.loginfo("wait for the action server to come up")
	    #allow up to 10 seconds for the action server to come up
        move_base.wait_for_server(rospy.Duration(5.0))

        degree2radian = degreeAngle* pi/180
        print "degree2radian: %s" %degree2radian

        while(degree2radian < 0):
                degree2radian += 2* pi

        while(degree2radian >= 2* pi):
            degree2radian -= 2* pi

        #send a goal to the robot to move X meters forward
        goal = MoveBaseGoal()
        goal.target_pose.header.frame_id = 'base_link' #base_footprint OR base_link
        goal.target_pose.header.stamp = rospy.Time.now()
        goal.target_pose.pose.orientation.z = degree2radian #X degree
        goal.target_pose.pose.orientation.w = 1 #always 1

        #start rotating
        move_base.send_goal(goal)

        #allow robot up to 60 seconds to complete task
        success = move_base.wait_for_result(rospy.Duration(60))

        if not success:
            move_base.cancel_goal()
            rospy.loginfo("The base failed to turn" +str(degreeAngle)+ " degree")
            return False
        elif success:
            state = move_base.get_state()
            if state == GoalStatus.SUCCEEDED:
                rospy.loginfo("the robot turned " +str(degreeAngle)+ " degree")

        return 'Rotational Data Sent!'
###################################################
#send MoveBaseActionGoal --> move_base data -->based on base_link
    @cherrypy.expose
    def movebot_to_start(self):
        rate = rospy.Rate(10) # 10Hz
        xBegin = 4.850
        yBegin = -1.754

	    #tell the action client that we want to spin a thread by default
        move_base = actionlib.SimpleActionClient("/move_base", MoveBaseAction)
        rospy.loginfo("wait for the action server to come up")
	    #allow up to 10 seconds for the action server to come up
        move_base.wait_for_server(rospy.Duration(5.0))

        #send a goal to the robot to move X meters forward
        goal = MoveBaseGoal()
        goal.target_pose.header.frame_id = 'map' #base_footprint OR base_link
        goal.target_pose.header.stamp = rospy.Time.now()

        goal.target_pose.pose.position =  Point(xBegin,yBegin,0)


        goal.target_pose.pose.orientation.x = 0
        goal.target_pose.pose.orientation.y = 0
        goal.target_pose.pose.orientation.z = -0.999978085133
        goal.target_pose.pose.orientation.w = 0.00662036656129

        #start moving
        rospy.loginfo("Sending goal location ...")
        move_base.send_goal(goal)

        #allow robot up to 60 seconds to complete task
        success = move_base.wait_for_result(rospy.Duration(60))

        if not success:
            move_base.cancel_goal()
            rospy.loginfo("The robot failed to reach the destination")
            return False
        elif success:
            state = move_base.get_state()
            if state == GoalStatus.SUCCEEDED:
                rospy.loginfo("The robot have reached the destination")

        return 'Moving Data Sent!'
###################################################
#send MoveBaseActionGoal --> move_base data -->based on base_link
    @cherrypy.expose
    def movebot_to_location(self, goal_point=0):
        rate = rospy.Rate(10) # 10Hz
		
        goal_point=np.float64(goal_point)

        degreeAngle=0
		
        xKitchen = -1.7607
        yKitchen = -1.5837

        xBed = 3.846
        yBed = -0.190

        xBathroom = 0.837
        yBathroom = -0.905

        xSofa = -3.300
        ySofa = 1.717

        xTV = -4.5557
        yTV = 1.2095

        xTable = -4.2057
        yTable = -1.0968

        xWordrobe = 0.584
        yWordrobe = 0.439

        xBookshelf = 3.607
        yBookshelf = -2.354

        xMainDoor = 4.850
        yMainDoor = -1.754
		
	    #tell the action client that we want to spin a thread by default
        move_base = actionlib.SimpleActionClient("/move_base", MoveBaseAction)
        rospy.loginfo("wait for the action server to come up")
	    #allow up to 10 seconds for the action server to come up
        move_base.wait_for_server(rospy.Duration(5.0))
	
        #send a goal to the robot to move X meters forward
        goal = MoveBaseGoal()
        goal.target_pose.header.frame_id = 'map' #base_footprint OR base_link
        goal.target_pose.header.stamp = rospy.Time.now()
		
        if goal_point == 1:
            goal.target_pose.pose.position =  Point(xKitchen,yKitchen,degreeAngle)
        elif goal_point == 2:
            goal.target_pose.pose.position =  Point(xSofa,ySofa,degreeAngle)
        elif goal_point == 3:
            goal.target_pose.pose.position =  Point(xTV,yTV,degreeAngle)
        elif goal_point == 4:
            goal.target_pose.pose.position =  Point(xBed,yBed,degreeAngle)
        elif goal_point == 5:
            goal.target_pose.pose.position =  Point(xTable,yTable,degreeAngle)
        elif goal_point == 6:
            goal.target_pose.pose.position =  Point(xWordrobe,yWordrobe,degreeAngle)
        elif goal_point == 7:
            goal.target_pose.pose.position =  Point(xBookshelf,yBookshelf,degreeAngle)
        elif goal_point == 8:
            goal.target_pose.pose.position =  Point(xMainDoor,yMainDoor,degreeAngle)
        elif goal_point == 9:
            goal.target_pose.pose.position =  Point(xBathroom,yBathroom,degreeAngle)

        goal.target_pose.pose.orientation.x = 0
        goal.target_pose.pose.orientation.y = 0
        goal.target_pose.pose.orientation.z = 0
        goal.target_pose.pose.orientation.w = 1 #always 1

        #start moving
        rospy.loginfo("Sending goal location ...")
        move_base.send_goal(goal)

        #allow robot up to 60 seconds to complete task
        success = move_base.wait_for_result(rospy.Duration(60)) 

        if not success:
            move_base.cancel_goal()
            rospy.loginfo("The robot failed to reach the destination")
            return False
        elif success:
            state = move_base.get_state()
            if state == GoalStatus.SUCCEEDED:
                rospy.loginfo("The robot have reached the destination")

        return 'Moving Data Sent!'
###################################################
#send MoveBaseActionGoal --> move_base data -->based on map
    @cherrypy.expose
    def movebot_to_position(self,xGoal=0,yGoal=0,degreeAngle=0):
        rate = rospy.Rate(10) # 10Hz
        xGoal=np.float64(xGoal)
        yGoal=np.float64(yGoal)
        degreeAngle=np.float64(degreeAngle)
		
        degree2radian = degreeAngle* pi/180

        while(degree2radian < 0):
            degree2radian += 2* pi

        while(degree2radian >= 2* pi):
            degree2radian -= 2* pi

	    #tell the action client that we want to spin a thread by default
        move_base = actionlib.SimpleActionClient("/move_base", MoveBaseAction)
        rospy.loginfo("wait for the action server to come up")
	    #allow up to 10 seconds for the action server to come up
        move_base.wait_for_server(rospy.Duration(5.0))
	
        #send a goal to the robot to move X meters forward
        goal = MoveBaseGoal()
        goal.target_pose.header.frame_id = 'map' #base_footprint OR base_link
        goal.target_pose.header.stamp = rospy.Time.now()
        goal.target_pose.pose.position =  Point(xGoal,yGoal,degree2radian)
		
        goal.target_pose.pose.orientation.x = 0
        goal.target_pose.pose.orientation.y = 0
        goal.target_pose.pose.orientation.z = 0
        goal.target_pose.pose.orientation.w = 1 #always 1

        #start moving
        rospy.loginfo("Sending goal location ...")
        move_base.send_goal(goal)

        #allow robot up to 60 seconds to complete task
        success = move_base.wait_for_result(rospy.Duration(60)) 

        if not success:
            move_base.cancel_goal()
            rospy.loginfo("The robot failed to reach the destination")
            return False
        elif success:
            state = move_base.get_state()
            if state == GoalStatus.SUCCEEDED:
                rospy.loginfo("The robot have reached the destination")

        return 'Moving Data Sent!'
###################################################
#sleep for X seconds
    @cherrypy.expose
    def sleepBot(self,x_second=0):
        x_second=np.float64(x_second)
        rospy.sleep(x_second)
        return 'Sleping Time Set!'
		
# stop turtlebot
    @cherrypy.expose
    def stopBot_link(self):
        global x_amcl,y_amcl,z_amcl,w_amcl
        global x_odom_position,y_odom_position,z_odom_position,x_odom_orientation,y_odom_orientation,z_odom_orientation,w_odom_orientation
        rate = rospy.Rate(10) # 10Hz

	    #tell the action client that we want to spin a thread by default
        move_base = actionlib.SimpleActionClient("/move_base", MoveBaseAction)
        rospy.loginfo("wait for the action server to come up")
	    #allow up to 10 seconds for the action server to come up
        move_base.wait_for_server(rospy.Duration(5.0))
		
        rospy.loginfo(str(x_amcl) + " , " + str(y_amcl) + " , " + str(z_amcl) + " , " + str(w_amcl))
		
        #send a goal to the robot to move X meters forward
        goal = MoveBaseGoal()
        goal.target_pose.header.frame_id = 'base_link' #base_footprint OR map
        goal.target_pose.header.stamp = rospy.Time.now()
        goal.target_pose.pose.position.x = x_amcl
        goal.target_pose.pose.position.y = y_amcl
        goal.target_pose.pose.position.z = 0

        goal.target_pose.pose.orientation.x = 0
        goal.target_pose.pose.orientation.y = 0
        goal.target_pose.pose.orientation.z = z_amcl
        goal.target_pose.pose.orientation.w = w_amcl

        #start moving
        move_base.send_goal(goal)

        #allow robot up to 60 seconds to complete task
        success = move_base.wait_for_result(rospy.Duration(60)) 

        if not success:
            move_base.cancel_goal()
            rospy.loginfo("The robot failed to stop!")
        elif success:
            state = move_base.get_state()
            if state == GoalStatus.SUCCEEDED:
                rospy.loginfo("the robot stoped!")
		
        return 'Shutdown base_link Set!'
###################################################
# stop turtlebot
    @cherrypy.expose
    def stopbot_map(self):
        global x_amcl,y_amcl,z_amcl,w_amcl
        rate = rospy.Rate(10) # 10Hz

	    #tell the action client that we want to spin a thread by default
        move_base = actionlib.SimpleActionClient("/move_base", MoveBaseAction)
        rospy.loginfo("wait for the action server to come up")
	    #allow up to 10 seconds for the action server to come up
        move_base.wait_for_server(rospy.Duration(5.0))
		
        rospy.loginfo(str(x_amcl) + " , " + str(y_amcl) + " , " + str(z_amcl) + " , " + str(w_amcl))

        move_base.cancel_goal()
		
        #send a goal to the robot to move X meters forward
        goal = MoveBaseGoal()
        goal.target_pose.header.frame_id = 'map' #base_footprint OR base_link
        goal.target_pose.header.stamp = rospy.Time.now()
        goal.target_pose.pose.position =  Point(x_amcl,y_amcl,0)

        goal.target_pose.pose.orientation.x = 0
        goal.target_pose.pose.orientation.y = 0
        goal.target_pose.pose.orientation.z = 0
        goal.target_pose.pose.orientation.w = 1

        #start moving
        move_base.send_goal(goal)

        #allow robot up to 60 seconds to complete task
        success = move_base.wait_for_result(rospy.Duration(60)) 

        if not success:
            move_base.cancel_goal()
            rospy.loginfo("The robot failed to stop!")
        elif success:
            state = move_base.get_state()
            if state == GoalStatus.SUCCEEDED:
                rospy.loginfo("the robot stoped!")
		
        return 'Shutdown Set!'
###################################################
    @cherrypy.expose
    def generate(self):
        return ''.join(random.sample(string.hexdigits, 8))
###################################################
################Arduino Communication##############
###################################################
    @cherrypy.expose
    def writetoBoard(self,number=0,port=0,rate=0):
        port = np.float64(port)
        rate = np.float64(rate)
        numberstr = str(number)

        if port == 00:
            port_name = '/dev/ttyACM0'
        elif port == 01:
            port_name = '/dev/ttyACM1'
        elif port == 10:
            port_name = '/dev/ttyUSB0'
        elif port == 11:
            port_name = '/dev/ttyUSB1'

        ser = serial.Serial(port_name, rate)
        time.sleep(1.5)
        ser.write(numberstr)
###################################################
    @cherrypy.expose
    def readFromBoard(self,port=0,rate=0):
        port = np.float64(port)
        rate = np.float64(rate)

        if port == 00:
            port_name = '/dev/ttyACM0'
        elif port == 01:
            port_name = '/dev/ttyACM1'
        elif port == 10:
            port_name = '/dev/ttyUSB0'
        elif port == 11:
            port_name = '/dev/ttyUSB1'

        ser = serial.Serial(port_name, rate)
        time.sleep(1.5)
        ser.flushInput() #for the serial object ser, clear the input buffer #
        datatonum = ser.read(1) #if data is received, read a byte from the serial buffer
        rospy.loginfo(datatonum)
        return datatonum
###################################################
###################################################
###################################################
###################################################
###################################################
if __name__ == '__main__':
    rospy.init_node('cherrypy', anonymous=True)
    ###################################################
    #move the robot - map based navigation  --> move_base_simple and PoseStamped
    pub_move_simple = rospy.Publisher('/move_base_simple/goal', PoseStamped, queue_size=10)
    rospy.Subscriber("/move_base_simple/goal", PoseStamped, callback_move_simple)
    ###################################################
	#for odometry - based on map / i used it to stop the robot based on the map
    rospy.Subscriber('/odom', Odometry, callback_odom)
    ###################################################
	#stop the robot in map BUT based on the base_link
    tf_pub = rospy.Publisher('/tf_static', TFMessage, queue_size=50)
    ###################################################
	# initialaise the first pose2D location
    rospy.Subscriber("/amcl_pose", PoseWithCovarianceStamped, callback_amcl)
    pose_pub = rospy.Publisher('/initialpose', PoseWithCovarianceStamped, queue_size=50)
    ###################################################
	#for talker and chatter
    pub = rospy.Publisher('chatter', Pose2D, queue_size=10)
    rospy.Subscriber("chatter", Pose2D, callback)
    ###################################################
    #to pulish on /scan topic
    #define a new topic called "filter_scan" to store all laser scanner data
    scan_pub = rospy.Publisher('filter_scan', LaserScan, queue_size=50)
    rospy.Subscriber("/scan", LaserScan, callback_scan) 
    thread = threading.Thread(target=filter_scanner)
    thread.daemon = True                            
    thread.start()
    ###################################################
    #makes the robot move - free space navigation
    velocity_pub = rospy.Publisher('cmd_vel', Twist, queue_size=10)

    ###################################################
    ###################################################
    cherrypy.config.update({'server.socket_port': 8099})

    cherrypy.quickstart(block_ros_code(), '/',
                        config={'/ws': {'tools.websocket.on': True,
                                        'tools.websocket.handler_cls': Publisher}})




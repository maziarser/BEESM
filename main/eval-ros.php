<?php
//maximum execution time for php --> make it compatiable with ROS
ini_set('max_execution_time', 300); //60 seconds = 1 minute
error_reporting(0);

$flag_rosConnection = 0; //for set values - if connect to BAALL block is in the workspace, then the changes will be applied
$set_flagStatus = 0;
//-----------------------------------------------------------
function connect_server_ros() {
    global $flag_rosConnection;
    $flag_rosConnection=1;
    $flag_success=0;
    $items = json_decode(file_get_contents("http://localhost:8099/status"), true);
}
//-----------------------------------------------------------
//for Admin
function allowSet_ros() {
    $config = json_decode(file_get_contents("settings.json"));
    //print($config->simulation);
    if ($config->simulationRos==1) {
        return true;
    }
    return false;
}
//-----------------------------------------------------------
//-------------------Free Navigation-------------------------
//-----------------------------------------------------------
$stop_robots = TRUE;

function movebot_second($direction,$second,$speed) {
    global $flag_rosConnection;
    global $set_flagStatus;
    global $stop_robots;
    $direction_int = $direction;
    $speed_int = $speed;
    $flag_change=0;
    $flag_success=0;
    $publisher="Twist()";

    if ($direction_int == "Forward"){
        $direction_int = 1;
    }else if ($direction_int == "Backward"){
        $direction_int = 0;
    }

    if ($speed_int == "slow"){
        $speed_int = 1;
    }else if ($speed_int == "normal"){
        $speed_int = 2;
    }else if ($speed_int == "fast"){
        $speed_int = 3;
    }
    if (allowSet_ros()){
        if($stop_robots) {
            file_get_contents("http://localhost:8099/movebot_second?speed=" . $speed_int . "&second=" . $second . "&direction=" . $direction_int);
            $flag_success = 1;
        }
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />Value Speed: '.$speed.
        '<br />Value Second: '.$second.
        '<br />Value Direction: '.$direction.
        '<br />';
    $flag_change=1;
}
//-----------------------------------------------------------
function turnbot_second($clockwise,$second,$speed) {
    global $flag_rosConnection;
    global $set_flagStatus;
    global $stop_robots;
    $clockwise_int = $clockwise;
    $speed_int = $speed;
    $flag_change=0;
    $flag_success=0;
    $publisher="Twist()";

    if ($clockwise_int == "Right"){
        $clockwise_int = 1;
    }else if ($clockwise_int == "Left"){
        $clockwise_int = 0;
    }

    if ($speed_int == "slow"){
        $speed_int = 1;
    }else if ($speed_int == "normal"){
        $speed_int = 2;
    }else if ($speed_int == "fast"){
        $speed_int = 3;
    }
    if (allowSet_ros()){
        if($stop_robots) {
            file_get_contents("http://localhost:8099/turnbot_second?speed=" . $speed_int . "&second=" . $second . "&clockwise=" . $clockwise_int);
            $flag_success = 1;
        }
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />Value Speed: '.$speed.
        '<br />Value Second: '.$second.
        '<br />Value Rotation: '.$clockwise.
        '<br />';
    $flag_change=1;
}
//-----------------------------------------------------------
//move robot safely
function safeMovebot_second($direction,$second,$speed) {
    global $flag_rosConnection;
    global $set_flagStatus;
    global $stop_robots;
    $direction_int = $direction;
    $speed_int = $speed;
    $flag_change=0;
    $flag_success=0;
    $publisher="Twist()";

    if ($direction_int == "Forward"){
        $direction_int = 1;
    }else if ($direction_int == "Backward"){
        $direction_int = 0;
    }

    if ($speed_int == "slow"){
        $speed_int = 1;
    }else if ($speed_int == "normal"){
        $speed_int = 2;
    }else if ($speed_int == "fast"){
        $speed_int = 3;
    }
    if (allowSet_ros()){
        if($stop_robots) {
            file_get_contents("http://localhost:8099/safeMovebot_second?speed=" . $speed_int . "&second=" . $second . "&direction=" . $direction_int);
            $flag_success = 1;
        }
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />Value Speed: '.$speed.
        '<br />Value Second: '.$second.
        '<br />Value Direction: '.$direction.
        '<br />';
    $flag_change=1;
}
//-----------------------------------------------------------
function movebot_distance($direction,$distance,$speed) {
    global $flag_rosConnection;
    global $set_flagStatus;
    global $stop_robots;
    $direction_int = $direction;
    $speed_int = $speed;
    $flag_change=0;
    $flag_success=0;
    $publisher="Twist()";
    if ($direction_int == "Forward"){
        $direction_int = 1;
    }else if ($direction_int == "Backward"){
        $direction_int = 0;
    }

    if ($speed_int == "slow"){
        $speed_int = 1;
    }else if ($speed_int == "normal"){
        $speed_int = 2;
    }else if ($speed_int == "fast"){
        $speed_int = 3;
    }
    if (allowSet_ros()){
        if($stop_robots) {
            file_get_contents("http://localhost:8099/movebot_distance?speed=" . $speed_int . "&distance=" . $distance . "&direction=" . $direction_int);
            $flag_success = 1;
        }
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />Value Speed: '.$speed.
        '<br />Value Second: '.$distance.
        '<br />Value Direction: '.$direction.
        '<br />';
    $flag_change=1;
}
//-----------------------------------------------------------
function turnbot_degree($clockwise,$degreeAngle,$speed) {
    global $flag_rosConnection;
    global $set_flagStatus;
    global $stop_robots;
    $clockwise_int = $clockwise;
    $speed_int = $speed;
    $flag_change=0;
    $flag_success=0;
    $publisher="Twist()";

    if ($clockwise_int == "Right"){
        $clockwise_int = 1;
    }else if ($clockwise_int == "Left"){
        $clockwise_int = 0;
    }

    if ($speed_int == "slow"){
        $speed_int = 1;
    }else if ($speed_int == "normal"){
        $speed_int = 2;
    }else if ($speed_int == "fast"){
        $speed_int = 3;
    }
    if (allowSet_ros()){
        if($stop_robots) {
            file_get_contents("http://localhost:8099/turnbot_degree?speed=" . $speed_int . "&degreeAngle=" . $degreeAngle . "&clockwise=" . $clockwise_int);
            $flag_success = 1;
        }
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        //'<br />Name: '.$name.
        '<br />Value Speed: '.$speed.
        '<br />Value Degree: '.$degreeAngle.
        '<br />Value Rotation: '.$clockwise.
        '<br />';
    $flag_change=1;
}
//-----------------------------------------------------------
//move robot safely
function safeMovebot_distance($direction,$distance,$speed) {
    global $flag_rosConnection;
    global $set_flagStatus;
    global $stop_robots;
    $direction_int = $direction;
    $speed_int = $speed;
    $flag_change=0;
    $flag_success=0;
    $publisher="Twist()";
    if ($direction_int == "Forward"){
        $direction_int = 1;
    }else if ($direction_int == "Backward"){
        $direction_int = 0;
    }

    if ($speed_int == "slow"){
        $speed_int = 1;
    }else if ($speed_int == "normal"){
        $speed_int = 2;
    }else if ($speed_int == "fast"){
        $speed_int = 3;
    }
    if (allowSet_ros()){
        if($stop_robots) {
            file_get_contents("http://localhost:8099/safeMovebot_distance?speed=" . $speed_int . "&distance=" . $distance . "&direction=" . $direction_int);
            $flag_success = 1;
        }
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />Value Speed: '.$speed.
        '<br />Value Second: '.$distance.
        '<br />Value Direction: '.$direction.
        '<br />';
    $flag_change=1;
}
//-----------------------------------------------------------
function sleep_robot($x_second) {
    global $flag_rosConnection;
    global $set_flagStatus;
    global $stop_robots;
    $flag_change=0;
    $flag_success=0;
    $publisher="Twist()";

    if (allowSet_ros()){
            file_get_contents("http://localhost:8099/sleep_robot?x_second=" . $x_second);
            $flag_success = 1;
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />Value Second: '.$x_second.
        '<br />';
    $flag_change=1;
}
//-----------------------------------------------------------
//to check the location and run fuction read_json()
$tbStatus = FALSE;
$my_location = 'location.txt';
$objects = array();

function read_json() {
    $flag_success=0;
    $items = json_decode(file_get_contents("../poser.json"), true);
    global $objects;
    $obj = array();
    foreach($items as $key => $value) {

        $publisher = $value["publisher"];
        $type = $value["type"];

        if($publisher == "amcl_pose" && $type == "update_loc") {
            $obj["x"] = $x_value = $value["x"];
            $obj["y"] = $y_value = $value["y"];
            $obj["z"] = $z_value = $value["z"];

            array_push($objects, $obj);
            $obj = array();
        }

        if($publisher == "laser_scan" && $type == "update_laser") {
            if(!empty($value["value"])) {
                $array_value = $value["value"];
                for($i = 0; $i < sizeof($array_value); $i++){
                    $obj[$i] = $array_value[$i];
                }
                array_push($objects, $obj);
            }
        }
        $flag_success=1;
    }

    if ($flag_success==1){
    }else {
        echo("Error: connection hasn't stablished yet.");
        echo "<br />";
    }
    return $objects;
}
//-----------------------------------------------------------
//-------------------Laser Scanner Data----------------------
//-----------------------------------------------------------
function laser_scanner_data() {
    global $flag_rosConnection;
    global $set_flagStatus;
    global $objects;
    global $stop_robots;
    $flag_change=0;
    $flag_success=0;
    $publisher="laser_scanner";

    if (allowSet_ros()){
            $objects = json_decode(file_get_contents("http://localhost:8099/scanner_data"));
            $object = $objects->value;
    }else {
        echo("Error: Laser Scanner Data needed?! Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />';
    $flag_change=1;
    return $object;
}
//-----------------------------------------------------------
function laser_scanner_data_range($x_range, $y_range) {
    global $flag_rosConnection;
    global $set_flagStatus;
    global $objects;
    global $stop_robots;
    $flag_change=0;
    $flag_success=0;
    $object = array();
    $publisher="laser_scanner";

    if (allowSet_ros()){
            $objects = json_decode(file_get_contents("http://localhost:8099/scanner_data_limit?x_range=" . $x_range . "&y_range=" . $y_range));
            $object = $objects->value;
            $flag_success = 1;
    }else {
        echo("Error: Laser Scanner Data needed?! Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />';
    $flag_change=1;
    return $object;
}
//-----------------------------------------------------------
function laser_scanner_data_check($x_range, $y_range, $distance) {
    global $flag_rosConnection;
    global $set_flagStatus;
    global $stop_robots;
    $flag_change=0;
    $flag_success=0;
    $publisher="laser_scanner";

    if (allowSet_ros()){
        $block = file_get_contents("http://localhost:8099/scanner_data_check?x_range=" . $x_range . "&y_range=" . $y_range . "&distance=" . $distance);
        $flag_success = 1;
    }else {
        echo("Error: Laser Scanner Data needed?! Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.

        '<br />';
    $flag_change=1;
    return $block;
}
//-----------------------------------------------------------
function stop_robot() {
    global $flag_rosConnection;
    global $set_flagStatus;
    global $stop_robots;
    $flag_change=0;
    $flag_success=0;
    $publisher="Twist()";
    if (allowSet_ros()){
        file_get_contents("http://localhost:8099/stop_robot");
        $flag_success=1;
        $stop_robots = FALSE;
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />';
    $flag_change=1;
}
//-----------------------------------------------------------
//--------------------Map Navigation-------------------------
//-----------------------------------------------------------
$stop_robotsMap = TRUE;

function movebotMap_distance($value_meter) {
    global $flag_rosConnection;
    global $set_flagStatus;
    $flag_change=0;
    $flag_success=0;
    global $objects;
    global $tbStatus;
    global $stop_robotsMap;
    $publisher="base_link";

    if (allowSet_ros()){
        if($stop_robotsMap) {
            file_get_contents("http://localhost:8099/movebot_link?target_x=" . $value_meter);
            $flag_success = 1;
        }
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />';
    $flag_change=1;
}
//-----------------------------------------------------------
function turnbotMap_degree($value_degree) {
    global $flag_rosConnection;
    global $set_flagStatus;
    $flag_change=0;
    $flag_success=0;
    global $stop_robotsMap;
    $publisher="base_link";

    if (allowSet_ros()){
        if($stop_robotsMap) {
            file_get_contents("http://localhost:8099/turnbot_link?degreeAngle=" . $value_degree);
            $flag_success = 1;
        }
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />';
    $flag_change=1;
}
//------------------------------------------------------
function initial_position() {
    global $flag_rosConnection;
    global $set_flagStatus;
    $flag_change=0;
    $flag_success=0;
    global $stop_robotsMap;
    $publisher="Pose";
    if (allowSet_ros()){
        if($stop_robotsMap) {
            file_get_contents("http://localhost:8099/initialization_pose");
            $flag_success = 1;
        }
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />';
    $flag_change=1;
}
//------------------------------------------------------
function change_initial_position($x_tar,$y_tar,$degreeAngle) {
    global $flag_rosConnection;
    global $set_flagStatus;
    $flag_change=0;
    $flag_success=0;
    global $stop_robotsMap;
    $publisher="Pose";

    if (allowSet_ros()){
        if($stop_robotsMap) {
            file_get_contents("http://localhost:8099/change_pose?x_tar=" . $x_tar . "&y_tar=" . $y_tar . "&degreeAngle=" . $degreeAngle);
            $flag_success = 1;
        }
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
		'<br />';
	$flag_change=1;
}
//-----------------------------------------------------------
function movebot_to_start() {
    global $flag_rosConnection;
    global $set_flagStatus;
    global $objects;
    global $tbStatus;
    global $my_location;
    global $stop_robotsMap;
    $flag_change=0;
    $flag_success=0;
    $publisher="base_link";

    if (allowSet_ros()){
        if($stop_robotsMap) {
            $i = 0;
            $tbStatus = FALSE;
            $loc = 100;
            file_put_contents($my_location, $loc);

            while ($tbStatus == FALSE) {
                if($stop_robotsMap) {
                    if ($i % 15 == 0 && $tbStatus == FALSE) {
                        $data = file_get_contents($my_location);

                        if ($data != 100) {
                            break;
                        }
                        file_get_contents("http://localhost:8099/movebot_to_start");
                    }
                    $finalLoc = json_decode(file_get_contents("http://localhost:8099/status_loc"));
                    $x = $finalLoc->x;
                    $y = $finalLoc->y;
                    if (($x > 4.75 && $x < 4.95) && ($y > -2.40 && $y < -1.50)) {
                        $tbStatus = TRUE;
                        break;
                    }
                    sleep(1);
                    $i++;
                }
            }
            $flag_success = 1;
        }
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />';
	$flag_change=1;
}
//-----------------------------------------------------------
function movebot_to_location($goal_point) {
    global $flag_rosConnection;
    global $set_flagStatus;
    global $objects;
    global $tbStatus;
    global $my_location;
    global $stop_robotsMap;
    $flag_change=0;
    $flag_success=0;
    $publisher="base_link";
    $i = 0;
    if (allowSet_ros()) {
        if($stop_robotsMap) {
            if ($goal_point == "kitchen") {
                $goal_point = 1;
                $tbStatus = FALSE;
                file_put_contents($my_location, $goal_point);

                while ($tbStatus == FALSE) {
                    if($stop_robotsMap) {
                        if ($i % 10 == 0 && $tbStatus == FALSE) {
                            $data = file_get_contents($my_location);

                            if ($data != 1) {
                                break;
                            }
                            file_get_contents("http://localhost:8099/movebot_to_location?goal_point=" . $goal_point);
                        }
                        sleep(1);
                        $finalLoc = json_decode(file_get_contents("http://localhost:8099/status_loc"));
                        $x = $finalLoc->x;
                        $y = $finalLoc->y;

                        if (($x > -1.90 && $x < -1.30) && ($y > -2 && $y < -1.50)) {
                            $tbStatus = TRUE;
                            break;
                        }
                        $i++;
                    }
                }

            } else if ($goal_point == "sofa") {
                $goal_point = 2;
                $tbStatus = FALSE;
                file_put_contents($my_location, $goal_point);

                while ($tbStatus == FALSE) {
                    if($stop_robotsMap) {
                        if ($i % 10 == 0 && $tbStatus == FALSE) {
                            $data = file_get_contents($my_location);

                            if ($data != 2) {
                                break;
                            }
                            file_get_contents("http://localhost:8099/movebot_to_location?goal_point=" . $goal_point);
                        }
                        sleep(1);
                        $finalLoc = json_decode(file_get_contents("http://localhost:8099/status_loc"));
                        $x = $finalLoc->x;
                        $y = $finalLoc->y;
                        if (($x > -3.40 && $x < -2.60) && ($y > 1.50 && $y < 2.20)) {
                            $tbStatus = TRUE;
                            break;
                        }
                        $i++;
                    }
                }

            } else if ($goal_point == "TV") {
                $goal_point = 3;
                $tbStatus = FALSE;
                file_put_contents($my_location, $goal_point);

                while ($tbStatus == FALSE) {
                    if($stop_robotsMap) {
                        if ($i % 10 == 0 && $tbStatus == FALSE) {
                            $data = file_get_contents($my_location);
                            if ($data != 3) {
                                break;
                            }
                            file_get_contents("http://localhost:8099/movebot_to_location?goal_point=" . $goal_point);
                        }
                        sleep(1);
                        $finalLoc = json_decode(file_get_contents("http://localhost:8099/status_loc"));
                        $x = $finalLoc->x;
                        $y = $finalLoc->y;
                        if (($x > -4.60 && $x < -4.45) && ($y > 0.73 && $y < 1.85)) {
                            $tbStatus = TRUE;
                            break;
                        }
                        $i++;
                    }
                }
            } else if ($goal_point == "bed") {
                $goal_point = 4;
                $tbStatus = FALSE;
                file_put_contents($my_location, $goal_point);

                while ($tbStatus == FALSE) {
                    if($stop_robotsMap) {
                        if ($i % 10 == 0 && $tbStatus == FALSE) {
                            $data = file_get_contents($my_location);

                            if ($data != 4) {
                                break;
                            }
                            file_get_contents("http://localhost:8099/movebot_to_location?goal_point=" . $goal_point);
                        }
                        sleep(1);
                        $finalLoc = json_decode(file_get_contents("http://localhost:8099/status_loc"));
                        $x = $finalLoc->x;
                        $y = $finalLoc->y;
                        if (($x > 3.45 && $x < 4.40) && ($y > -0.30 && $y < -0.140)) {
                            $tbStatus = TRUE;
                            break;
                        }
                        $i++;
                    }
                }
            } else if ($goal_point == "table") {
                $goal_point = 5;
                $tbStatus = FALSE;
                file_put_contents($my_location, $goal_point);

                while ($tbStatus == FALSE) {
                    if($stop_robotsMap) {
                        if ($i % 10 == 0 && $tbStatus == FALSE) {
                            $data = file_get_contents($my_location);

                            if ($data != 5) {
                                break;
                            }
                            file_get_contents("http://localhost:8099/movebot_to_location?goal_point=" . $goal_point);
                        }
                        sleep(1);
                        $finalLoc = json_decode(file_get_contents("http://localhost:8099/status_loc"));
                        $x = $finalLoc->x;
                        $y = $finalLoc->y;
                        if (($x > -4.57 && $x < -3.80) && ($y > -1.13 && $y < -0.98)) {
                            $tbStatus = TRUE;
                            break;
                        }
                        $i++;
                    }
                }
            } else if ($goal_point == "wardrobe") {
                $goal_point = 6;
                $tbStatus = FALSE;
                file_put_contents($my_location, $goal_point);

                while ($tbStatus == FALSE) {
                    if($stop_robotsMap) {
                        if ($i % 10 == 0 && $tbStatus == FALSE) {
                            $data = file_get_contents($my_location);
                            if ($data != 6) {
                                break;
                            }
                            file_get_contents("http://localhost:8099/movebot_to_location?goal_point=" . $goal_point);
                        }
                        sleep(1);
                        $finalLoc = json_decode(file_get_contents("http://localhost:8099/status_loc"));
                        $x = $finalLoc->x;
                        $y = $finalLoc->y;
                        if (($x > -0.10 && $x < 1.24) && ($y > 0.30 && $y < 0.48)) {
                            $tbStatus = TRUE;
                            break;
                        }
                        $i++;
                    }
                }
            } else if ($goal_point == "bookshelf") {
                $goal_point = 7;
                $tbStatus = FALSE;
                file_put_contents($my_location, $goal_point);

                while ($tbStatus == FALSE) {
                    if($stop_robotsMap) {
                        if ($i % 10 == 0 && $tbStatus == FALSE) {
                            $data = file_get_contents($my_location);

                            if ($data != 7) {
                                break;
                            }
                            file_get_contents("http://localhost:8099/movebot_to_location?goal_point=" . $goal_point);
                        }
                        sleep(1);
                        $finalLoc = json_decode(file_get_contents("http://localhost:8099/status_loc"));
                        $x = $finalLoc->x;
                        $y = $finalLoc->y;
                        if (($x > 3.18 && $x < 4.20) && ($y > -2.40 && $y < -2.30)) {
                            $tbStatus = TRUE;
                            break;
                        }
                        $i++;
                    }
                }
            } else if ($goal_point == "main_door") {
                $goal_point = 8;
                $tbStatus = FALSE;
                file_put_contents($my_location, $goal_point);

                while ($tbStatus == FALSE) {
                    if($stop_robotsMap) {
                        if ($i % 10 == 0 && $tbStatus == FALSE) {
                            $data = file_get_contents($my_location);
                            if ($data != 8) {
                                break;
                            }
                            file_get_contents("http://localhost:8099/movebot_to_location?goal_point=" . $goal_point);
                        }
                        sleep(1);
                        $finalLoc = json_decode(file_get_contents("http://localhost:8099/status_loc"));
                        $x = $finalLoc->x;
                        $y = $finalLoc->y;
                        if (($x > 4.75 && $x < 4.95) && ($y > -2.40 && $y < -1.47)) {
                            $tbStatus = TRUE;
                            break;
                        }
                        $i++;
                    }
                }
            } else if ($goal_point == "bathroom") {
                $goal_point = 9;
                $tbStatus = FALSE;
                file_put_contents($my_location, $goal_point);

                while ($tbStatus == FALSE) {
                    if($stop_robotsMap) {
                        if ($i % 10 == 0 && $tbStatus == FALSE) {
                            $data = file_get_contents($my_location);

                            if ($data != 9) {
                                break;
                            }
                            file_get_contents("http://localhost:8099/movebot_to_location?goal_point=" . $goal_point);
                        }
                        sleep(1);
                        $finalLoc = json_decode(file_get_contents("http://localhost:8099/status_loc"));
                        $x = $finalLoc->x;
                        $y = $finalLoc->y;
                        if (($x > 0.30 && $x < 1.25) && ($y > -0.98 && $y < -0.70)) {
                            $tbStatus = TRUE;
                            break;
                        }
                        $i++;
                    }
                }
            }
        }
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />';
	$flag_change=1;
}
//-----------------------------------------------------------
function movebot_to_position($xGoal,$yGoal,$degreeAngle) {
    global $flag_rosConnection;
    global $set_flagStatus;
    $flag_change=0;
    $flag_success=0;
    global $objects;
    global $tbStatus;
    global $my_location;
    global $stop_robotsMap;
    $publisher="base_link";

    if (allowSet_ros()){
        if($stop_robotsMap) {
            $i = 0;
            $tbStatus = FALSE;
            $loc = 10;
            file_put_contents($my_location, $loc);
            while ($tbStatus == FALSE) {
                if($stop_robotsMap) {
                    if ($i % 15 == 0 && $tbStatus == FALSE) {
                        $data = file_get_contents($my_location);

                        if ($data != 10) {
                            break;
                        }
                        file_get_contents("http://localhost:8099/movebot_to_position?xGoal=" . $xGoal . "&yGoal=" . $yGoal . "&degreeAngle=" . $degreeAngle);
                    }
                    $finalLoc = json_decode(file_get_contents("http://localhost:8099/status_loc"));
                    $x = $finalLoc->x;
                    $y = $finalLoc->y;
                    if (($x > $xGoal - 0.15 && $x < $xGoal + 0.15) && ($y > $yGoal - 0.15 && $y < $yGoal + 0.15)) {
                        $tbStatus = TRUE;
                        break;
                    }
                    sleep(1);
                    $i++;
                }
            }
            $flag_success = 1;
        }
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />';
    $flag_change=1;
}
//-----------------------------------------------------------
function current_location($loc){
    $finalLoc = json_decode(file_get_contents("http://localhost:8099/status_loc"));
    if($loc == "x"){
        $current_loc = $finalLoc->x;
    }elseif($loc == "y"){
        $current_loc = $finalLoc->y;
    }elseif($loc == "z"){
        $current_loc = $finalLoc->z;
    }
    return $current_loc;

}
//-----------------------------------------------------------
function sleepbot_map($x_second) {
    global $flag_rosConnection;
    global $set_flagStatus;
    $flag_change=0;
    $flag_success=0;
    global $stop_robotsMap;
    $publisher="base_link";
    if (allowSet_ros()){
            file_get_contents("http://localhost:8099/sleep_robot?x_second=" . $x_second);
            $flag_success = 1;
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />Value Second: '.$x_second.
        '<br />';
    $flag_change=1;
}
//-----------------------------------------------------------
function stopbot_map() {
    global $flag_rosConnection;
    global $set_flagStatus;
    $flag_change=0;
    $flag_success=0;
    global $my_location;
    global $stop_robotsMap;
    $publisher="base_link";
    $loc = 0;
    file_put_contents($my_location, $loc);

    if (allowSet_ros()){
        $data = file_get_contents($my_location);

        if($data == 0) {
            file_get_contents("http://localhost:8099/stopbot_map");
            $flag_success = 1;
            $stop_robotsMap = FALSE;
        }
    }else {
        echo("Error: status hasn't changed in reality. Status Flag should be set up.");
        echo "<br />";
    }
    echo 'Publisher: '.$publisher.
        '<br />';
    $flag_change=1;
}
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
function load_xml($file) {
    $file = 'Examples/'.$file;
    if (file_exists($file)) {
        $xml = simplexml_load_file($file);
    } else {
        echo ('Failed to open "' . $file . '"');
    }
}
//-----------------------------------------------------------
//-------------------------BAALL-----------------------------
//-----------------------------------------------------------
$flag_baallConnection = 0; //for set values - if connect to BAALL block is in the workspace, then the changes will be applied

function connect_server() {
    global $flag_baallConnection;
    $flag_baallConnection=1;
    $flag_success=0;
    $items = json_decode(file_get_contents("http://baall-server-2.informatik.uni-bremen.de/api/status"), true);
    $obj = array();
    $objects = array();
    foreach($items as $key => $value) {
        if ((!empty($value["status"]) || $value["name"] == "livingLight3" || $value["name"] == "basin" || $value["name"] == "bathroomToiletHeight" || $value["name"] == "tvProgram") && !is_array($value["status"]) && $value["name"][0] != "_" && !empty($value["type"])) {
            $name = $value["name"];
            $status = $value["status"];
            $obj["name"] = ($name);
            $obj["status"] = ($status);
            array_push($objects, $obj);

            $flag_success=1;
        }
    }
    if ($flag_success==1){
    }else {
        echo("Error: connection hasn't stablished yet.");
        echo "<br />";
    }
    return $objects;
}
//-----------------------------------------------------------
//working only with name of each object
function get_name($input) {
    global $flag_baallConnection;
    if ($flag_baallConnection == 1){
        return $input["name"];
    }else{
        echo("Error: connection hasn't stablished yet.");
        echo "<br />";
    }
}
//-----------------------------------------------------------
//working only with status of each object
function get_status($input) {
    global $flag_baallConnection;
    if ($flag_baallConnection == 1){
        return $input["status"];
    }else{
        echo("Error: connection hasn't stablished yet.");
        echo "<br />";
    }
}
//-----------------------------------------------------------
//working only with status of each object
function get_emotions() {
    global $flag_baallConnection;
    if ($flag_baallConnection == 1){
        $max = 0;
        $result = array();
        $result = explode("\n", file_get_contents("http://baall-server-2.informatik.uni-bremen.de/bathfaceall.txt"));
        $length = count($result);
        for($i = 0; $i < $length; $i++){
            $emo = $result[$i];
            if ($emo > $max){
                switch ($emo) {
                    case $result[0]:
                        $emotion = "Angry";
                        break;
                    case $result[1]:
                        $emotion = "Disgust";
                        break;
                    case $result[2]:
                        $emotion = "Fear";
                        break;
                    case $result[3]:
                        $emotion = "Happy";
                        break;
                    case $result[4]:
                        $emotion = "Sad";
                        break;
                    case $result[5]:
                        $emotion = "Surprise";
                        break;
                    case $result[6]:
                        $emotion = "Neutral";
                        break;
                }
                $max = $emo;
            }
        }
        return $emotion;
    }else{
        echo("Error: connection hasn't stablished yet.");
        echo "<br />";
    }
}
//-----------------------------------------------------------
//working only with status of each object
function get_emotions_data() {
    global $flag_baallConnection;
    if ($flag_baallConnection == 1){
        $max = 0;
        $result = array();
        $result = explode("\n", file_get_contents("http://baall-server-2.informatik.uni-bremen.de/bathfaceall.txt"));
        return $result;
    }else{
        echo("Error: connection hasn't stablished yet.");
        echo "<br />";
    }
}
//-----------------------------------------------------------
//when we have a all 3 name,type and status of each item
function get_status_item($name) {
    global $flag_baallConnection;
    if ($flag_baallConnection == 1){
        $item = json_decode(file_get_contents("http://baall-server-2.informatik.uni-bremen.de/api/item/".$name), true);
        return $item["status"];
    }else{
        echo("Error: connection hasn't stablished yet.");
        echo "<br />";
    }
}
//-----------------------------------------------------------
function allowSet() {
    $config = json_decode(file_get_contents("settings.json"));
    if ($config->simulationBaall==1) {
        return true;
    }
    return false;
}
//-----------------------------------------------------------
function set_status($name, $value) {
    global $flag_baallConnection;
    $flag_change=0;
    $flag_success=0;

    if ($value === "open") {
        $value = "on";
    } else if ($value === "close") {
        $value = "off";
    }
    if(substr_count($value, ' ') > 0){
        $value = rawurlencode ($value);
    }
    if ($flag_baallConnection == 1){
        if (allowSet()){
            file_get_contents("http://baall-server-2.informatik.uni-bremen.de/api/set?id=".$name.
                "&value=".$value);
            $flag_success=1;
        }else {
            echo("Error: status hasn't changed in reality. Status Flag should be set up.");
            echo "<br />";
        }
        echo 'Name: '.$name.
            '<br />Value: '.$value.
            '<br />';
        $flag_change=1;
    }else{
        echo("Error: connection hasn't stablished yet.");
        echo "<br />";
    }
}
//-----------------------------------------------------------
function set_statusDimmer($name, $value) {
    global $flag_baallConnection;
    $flag_change=0;
    $flag_success=0;

    if ($value === "open") {
        $value = "on";
    } else if ($value === "close") {
        $value = "off";
    }
    if(substr_count($value, ' ') > 0){
        $value = rawurlencode ($value);
    }
    if ($flag_baallConnection == 1){
        if (allowSet()){
            file_get_contents("http://baall-server-2.informatik.uni-bremen.de/api/set?id=".$name.
                "&value=".$value);
            $flag_success=1;
        }else {
            echo("Error: status hasn't changed in reality. Status Flag should be set up.");
            echo "<br />";
        }
        echo 'Name: '.$name.
            '<br />Value: '.$value.
            '<br />';
        $flag_change=1;
    }else{
        echo("Error: connection hasn't stablished yet.");
        echo "<br />";
    }
}
//-----------------------------------------------------------
function set_TVprogram($value, $volume) {
    global $flag_baallConnection;
    $flag_change=0;
    $flag_success=0;
    $name= "tvProgram";
    if($value === "Pause"){
        $value = "STOP";
    }
    if(substr_count($value, ' ') > 0){
        $value = rawurlencode ($value);
    }
    if ($flag_baallConnection == 1){
        if (allowSet()){
            file_get_contents("http://baall-server-2.informatik.uni-bremen.de/api/set?id=".$name.
                "&value=".$value);
            $name= "tvVolume";
            file_get_contents("http://baall-server-2.informatik.uni-bremen.de/api/set?id=".$name.
                "&value=".$volume);
            $flag_success=1;
        }else {
            echo("Error: status hasn't changed in reality. Status Flag should be set up.");
            echo "<br />";
        }
        echo 'Name: '.$name.
            '<br />Value: '.$value.
            '<br />Volume: '.$volume.
            '<br />';
        $flag_change=1;
    }else{
        echo("Error: connection hasn't stablished yet.");
        echo "<br />";
    }
}
//-----------------------------------------------------------
function set_statusRGB($name, $r, $g, $b) {
    global $flag_baallConnection;
    $flag_change=0;
    $flag_success=0;
    if ($flag_baallConnection == 1){
        if (allowSet()){
            file_get_contents("http://baall-server-2.informatik.uni-bremen.de/api/setRGB?id=".$name.
                "&r=".$r.
                "&g=".$g.
                "&b=".$b);
            $flag_success=1;
        }else {
            echo("Error: status hasn't changed in reality. Status Flag should be set up.");
            echo "<br />";
        }
        echo 'Name: '.$name.
            '<br />Value Red: '.$r.
            '<br />Value Green: '.$g.
            '<br />Value Blue: '.$b.
            '<br />';
        $flag_change=1;
    }else{
        echo("Error: connection hasn't stablished yet.");
        echo "<br />";
    }
}
//-----------------------------------------------------------
//----------------------For RaspberryPi----------------------
//-----------------------------------------------------------
function write_to_board($number, $port, $rate) {
    file_get_contents("http://localhost:8099/writetoBoard?number=" . $number . "&port=" . $port . "&rate=" . $rate);
}

function read_from_board($port, $rate) {
    return file_get_contents("http://localhost:8099/readFromBoard?port=" . $port . "&rate=" . $rate);
}
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
$code = file_get_contents("php://input");
if (strlen($code)> 1) {
    fwrite($handle = fopen("logs/codeROS_Task_".$_REQUEST["task"]."_area_".$_REQUEST["area"]."_".time().".log", 'w'), $code);
    eval($code);
}
?>





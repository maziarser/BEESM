<?php
error_reporting(0);
ini_set('max_execution_time', 300); //60 seconds = 1 minute
//-------------------
$flag_baallConnection = 0; //for set values - if connect to BAALL block is in the workspace, then the changes will be applied
//-----------------------------------------------------------
//for the admin
function allowSet() {
    $config = json_decode(file_get_contents("settings.json"));
    //print($config->simulation);
    if ($config->simulationBaall==1) {
        return true;
    }
    return false;
}
//-----------------------------------------------------------
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
//-----------------------------------------------------------
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
			file_get_contents("http://baall-server-2.informatik.uni-bremen.de/api/setRGB?id=".$name."&r=".$r."&g=".$g."&b=".$b);
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
//-----------------------------------------------------------
require_once("design-baall.php");

global $rows, $cols, $design_items;

function draw_home($rows, $cols, $design_items) {
	global $flag_baallConnection;
    global $design_room, $design_blank, $design_wall, $design_BRJack1, $design_BRJack2, $design_BRLight1, $design_BRLight2, $design_LRJack1, $design_LRLight1, $design_LRLight2, $design_CorLight, $design_KitLight, $design_BRLight, $design_BRrgb, $design_LRrgb, $design_BRDoor, $design_LRLDoor, $design_LRRDoor, $design_BRLDoor, $design_BRRDoor, $design_LRDimmer, $design_BRBasin, $design_BRToilet, $design_KitKitchennet, $design_BRtv;
	if ($flag_baallConnection == 1){
		$design_room = draw($rows, $cols, $design_items, $design_room, $design_blank, $design_wall, $design_BRJack1, $design_BRJack2, $design_BRLight1, $design_BRLight2, $design_LRJack1, $design_LRLight1, $design_LRLight2, $design_CorLight, $design_KitLight, $design_BRLight, $design_BRrgb, $design_LRrgb, $design_BRDoor, $design_LRLDoor, $design_LRRDoor, $design_BRLDoor, $design_BRRDoor, $design_LRDimmer, $design_BRBasin, $design_BRToilet, $design_KitKitchennet, $design_BRtv);
	}else{
		echo("Error: connection hasn't stablished yet.");
		echo "<br />";
	}
}
//-----------------------------------------------------------
function draw($rows, $cols, $design_items, $design_room, $design_blank, $design_wall, $design_BRJack1, $design_BRJack2, $design_BRLight1, $design_BRLight2, $design_LRJack1, $design_LRLight1, $design_LRLight2, $design_CorLight, $design_KitLight, $design_BRLight, $design_BRrgb, $design_LRrgb, $design_BRDoor, $design_LRLDoor, $design_LRRDoor, $design_BRLDoor, $design_BRRDoor, $design_LRDimmer, $design_BRBasin, $design_BRToilet, $design_KitKitchennet, $design_BRtv) {
    switch ($design_items) {
        case "wall":
            $design_items = $design_wall;
            break;
        case "blank":
            $design_items = $design_blank;
            break;
        case "bedroomJack1":
            $design_items = $design_BRJack1;
            break;
        case "bedroomJack2":
            $design_items = $design_BRJack2;
            break;
        case "bedroomLight1":
            $design_items = $design_BRLight1;
            break;
        case "bedroomLight2":
            $design_items = $design_BRLight2;
            break;
        case "livingJack1":
            $design_items = $design_LRJack1;
            break;
        case "livingLight1":
            $design_items = $design_LRLight1;
            break;
        case "livingLight2":
            $design_items = $design_LRLight2;
            break;
        case "corridorLight":
            $design_items = $design_CorLight;
            break;
        case "kitchenLight":
            $design_items = $design_KitLight;
            break;
        case "bathroomLight":
            $design_items = $design_BRLight;
            break;
        case "bulblamp":
            $design_items = $design_BRrgb;
            break;
        case "floorlamp":
            $design_items = $design_LRrgb;
            break;
        case "bathroomdoor":
            $design_items = $design_BRDoor;
            break;
        case "upperLeftDoor":
            $design_items = $design_LRLDoor;
            break;
        case "upperRightDoor":
            $design_items = $design_BRRDoor;
            break;
        case "lowerLeftDoor":
            $design_items = $design_LRRDoor;
            break;
        case "lowerRightDoor":
            $design_items = $design_BRLDoor;
            break;
		case "livingLight3":
            $design_items = $design_LRDimmer;
            break;
		case "basin":
            $design_items = $design_BRBasin;
            break;
		case "bathroomToiletHeight":
            $design_items = $design_BRToilet;
            break;
        case "microwave":
            $design_items = $design_KitMicrowave;
            break;
        case "cupboard":
            $design_items = $design_KitCupboard;
            break;
        case "kitchennet":
            $design_items = $design_KitKitchennet;
            break;
		case "tvProgram":
            $design_items = $design_BRtv;
            break;
    }
    $design_room[$cols][$rows] = $design_items;
    return $design_room;
	
}
//-----------------------------------------------------------
//-----------------------------------------------------------
global $firstX, $firstY, $lastX, $lastY, $item_dp;
function design_home($firstX, $firstY, $lastX, $lastY, $item_dp) {
	global $flag_baallConnection;
    global $design_room, $design_blank, $design_wall, $design_BRJack1, $design_BRJack2, $design_BRLight1, $design_BRLight2, $design_LRJack1, $design_LRLight1, $design_LRLight2, $design_CorLight, $design_KitLight, $design_BRLight, $design_BRrgb, $design_LRrgb, $design_BRDoor, $design_LRLDoor, $design_LRRDoor, $design_BRLDoor, $design_BRRDoor, $design_LRDimmer, $design_BRBasin, $design_BRToilet, $design_KitKitchennet, $design_BRtv;
	if ($flag_baallConnection == 1){
		$design_room = design($firstX, $firstY, $lastX, $lastY, $item_dp, $design_room, $design_blank, $design_wall, $design_BRJack1, $design_BRJack2, $design_BRLight1, $design_BRLight2, $design_LRJack1, $design_LRLight1, $design_LRLight2, $design_CorLight, $design_KitLight, $design_BRLight, $design_BRrgb, $design_LRrgb, $design_BRDoor, $design_LRLDoor, $design_LRRDoor, $design_BRLDoor, $design_BRRDoor, $design_LRDimmer, $design_BRBasin, $design_BRToilet, $design_KitKitchennet, $design_BRtv);
	}else{
		echo("Error: connection hasn't stablished yet.");
		echo "<br />";
	}
}
//-----------------------------------------------------------
function design($firstX, $firstY, $lastX, $lastY, $item_dp, $design_room, $design_blank, $design_wall, $design_BRJack1, $design_BRJack2, $design_BRLight1, $design_BRLight2, $design_LRJack1, $design_LRLight1, $design_LRLight2, $design_CorLight, $design_KitLight, $design_BRLight, $design_BRrgb, $design_LRrgb, $design_BRDoor, $design_LRLDoor, $design_LRRDoor, $design_BRLDoor, $design_BRRDoor, $design_LRDimmer, $design_BRBasin, $design_BRToilet, $design_KitKitchennet, $design_BRtv) {
    switch ($item_dp) {
        case "wall":
            $item_dp = $design_wall;
            break;
        case "blank":
            $item_dp = $design_blank;
            break;
        case "bedroomJack1":
            $item_dp = $design_BRJack1;
            break;
        case "bedroomJack2":
            $item_dp = $design_BRJack2;
            break;
        case "bedroomLight1":
            $item_dp = $design_BRLight1;
            break;
        case "bedroomLight2":
            $item_dp = $design_BRLight2;
            break;
        case "livingJack1":
            $item_dp = $design_LRJack1;
            break;
        case "livingLight1":
            $item_dp = $design_LRLight1;
            break;
        case "livingLight2":
            $item_dp = $design_LRLight2;
            break;
        case "corridorLight":
            $item_dp = $design_CorLight;
            break;
        case "kitchenLight":
            $item_dp = $design_KitLight;
            break;
        case "bathroomLight":
            $item_dp = $design_BRLight;
            break;
        case "bulblamp":
            $item_dp = $design_BRrgb;
            break;
        case "floorlamp":
            $item_dp = $design_LRrgb;
            break;
        case "bathroomdoor":
            $item_dp = $design_BRDoor;
            break;
        case "upperLeftDoor":
            $item_dp = $design_LRLDoor;
            break;
        case "upperRightDoor":
            $item_dp = $design_BRRDoor;
            break;
        case "lowerLeftDoor":
            $item_dp = $design_LRRDoor;
            break;
        case "lowerRightDoor":
            $item_dp = $design_BRLDoor;
            break;
		case "livingLight3":
            $item_dp = $design_LRDimmer;
            break;
		case "basin":
            $item_dp = $design_BRBasin;
            break;
		case "bathroomToiletHeight":
            $item_dp = $design_BRToilet;
            break;
        case "microwave":
            $item_dp = $design_KitMicrowave;
            break;
        case "cupboard":
            $item_dp = $design_KitCupboard;
            break;
        case "kitchennet":
            $item_dp = $design_KitKitchennet;
            break;
		case "tvProgram":
            $item_dp = $design_BRtv;
            break;
    }
    for ($i = $firstX; $i <= $lastX; $i++) {
        for ($j = $firstY; $j <= $lastY; $j++) {
            $design_room[$j][$i] = $item_dp;
        }
    }
    return $design_room;
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
function length($value) {
  if (is_string($value)) {
    return strlen($value);
  } else {
    return count($value);
  }
}
//-----------------------------------------------------------
function text_firstIndexOf($text, $search) {
  $pos = strpos($text, $search);
  return $pos === false ?  0 : $pos + 1;
}
function text_lastIndexOf($text, $search) {
  $pos = strrpos($text, $search);
  return $pos === false ?  0 : $pos + 1;
}
//-----------------------------------------------------------
function repeat_list($value, $count) {
  $array = array();
  for ($index = 0; $index < $count; $index++) {
    $array[] = $value;
  }
  return $array;
}
//-----------------------------------------------------------
function list_firstIndexOf($haystack, $needle) {
  for ($index = 0; $index < count($haystack); $index++) {
    if ($haystack[$index] == $needle) return $index + 1;
  }
  return  0;
}
//-----------------------------------------------------------
function list_lastIndexOf($haystack, $needle) {
  $last =  0;
  for ($index = 0; $index < count($haystack); $index++) {
    if ($haystack[$index] == $needle) $last = $index + 1;
  }
  return $last;
}
//-----------------------------------------------------------
function sort_list($list, $type, $direction) {
  $sortCmpFuncs = array(
    "NUMERIC" => "strnatcasecmp",
    "TEXT" => "strcmp",
    "IGNORE_CASE" => "strcasecmp"
  );
  $sortCmp = $sortCmpFuncs[$type];
  $list2 = $list;
  usort($list2, $sortCmp);
  if ($direction == -1) {
    $list2 = array_reverse($list2);
  }
  return $list2;
}
//-----------------------------------------------------------
function random_number($x, $y) {
    if ($x > $y) {
        return rand($y, $x);
    }
    return rand($x, $y);
}
//-----------------------------------------------------------
//-----------------------------------------------------------
//when we have a all 3 name,type and status of each item
function get_attribute($key, $input) {
    global $flag_baallConnection;
    if ($flag_baallConnection == 1){
        return $input[$key];
    }else{
        echo("Error: connection hasn't stablished yet.");
        echo "<br />";
    }
}
//-----------------------------------------------------------
require_once("baall-objects.php");
require_once("designBaall-objects.php");
//-----------------------------------------------------------
$code = file_get_contents("php://input");
if (strlen($code)> 1) {
    fwrite($handle = fopen("logs/codeSM_Task_".$_REQUEST["task"]."_area_".$_REQUEST["area"]."_".time().".log", 'w'), $code);
    eval($code);
    //for design baall
    $serializedData = serialize($design_room);
    file_put_contents('design-baall.txt', $serializedData);
}

?>

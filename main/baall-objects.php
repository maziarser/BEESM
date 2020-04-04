<?php
error_reporting(0);

$url = "http://baall-server-2.informatik.uni-bremen.de/api/status";
$cred = sprintf('Authorization: Basic %s', base64_encode('xxx:xxx'));
$opts = array(
    'http' => array(
        'method' => 'GET',
        'header' => $cred
    )
);
$ctx = stream_context_create($opts);
$data = file_get_contents($url, false, $ctx);

$items = json_decode($data, true);
$objects = array();
//------------------------------------------------------
foreach($items as $key => $value) {
//for lights and doors and RGB lights - other objects
    if ((!empty($value['status']) || $value['name'] == "livingLight3") && !is_array($value['status']) && $value['name'][0] != "_" && !empty($value['type'])) {
        $name = $value['name'];
        $objects[$name] = $value['status'];
    }
}
//------------------------------------------------------
$server_condition = 0;
class server
{
    var $addr;
    var $items;

    function __construct()
    {
        global $server_condition;
        $server_condition = 1;
        $this->addr = "http://baall-server-2.informatik.uni-bremen.de/api/status";
        $this->items = json_decode(file_get_contents($this->addr), true);

        foreach ($this->items as $key => $value) {
            if ((!empty($value['status']) || $value['name'] == "livingLight3") && !is_array($value['status']) && $value['name'][0] != "_" && !empty($value['type'])) {
                $name = $value['name'];
                $objects[$name] = $value['status'];
            }
        }
    }
}
//------------------------------------------------------
//for the admin
function allowSets() {
    $config = json_decode(file_get_contents("settings.json"));
    if ($config->simulationBaall == 1) {
        return true;
    }
    return false;
}
//------------------------------------------------------
//check the connection
function connection_check() {
    global $server_condition;
    if ($server_condition == 1) {
        return true;
    }
    return false;
}
//------------------------------------------------------
class eachObject {
//each cell in our output table
    function output() {
        echo '<td>&nbsp;</td>';
    }
}
//------------------------------------------------------
class wall extends eachObject {
//walls
    function output() {
        echo '<td class="wall">&nbsp;</td>';
    }
}
//------------------------------------------------------
class bed extends eachObject {
//bed
    function output() {
        echo '<td class="bed" title="Bed">&nbsp;</td>';
    }
}
//------------------------------------------------------
class fridge extends eachObject {
//fridge
    function output() {
        echo '<td class="fridge" title="Fridge">&nbsp;</td>';
    }
}
//------------------------------------------------------
class blank extends eachObject {
//blank cells
    function output() {
        echo '<td class="blank">&nbsp;</td>';
    }
}
//------------------------------------------------------
//actuator for lights and doors
class actuator extends eachObject {
//refernce to the objects and thier conditions
    var $id;
    var $objects;

    function __construct( & $objects, $id) {
        $this -> objects = $objects;
        $this -> id = $id;
    }

    function get_value() {
        return $this -> objects[$this -> id];
    }
    //------------------
    function get_status() {
        if(connection_check()) {
            if (allowSets()) {
                return $this->objects[$this->id];
            }else {
                echo("Error: status hasn't changed in reality. Status Flag should be set up.");
                echo "<br />";
            }
        }else{
            echo("Error: connection hasn't stablished yet.");
            echo "<br />";
        }
    }
    //------------------
    function set_status($value){
        if(connection_check()) {
            if (allowSets()) {
                file_get_contents("http://baall-server-2.informatik.uni-bremen.de/api/set?id=" . $this->id . "&value=" . $value);
                $this->objects[$this->id] = $value;
            }else {
                echo("Error: status hasn't changed in reality. Status Flag should be set up.");
                echo "<br />";
            }
        }else{
            echo("Error: connection hasn't stablished yet.");
            echo "<br />";
        }
    }
    //------------------
    function set_statusDimmer($value){
        if(connection_check()) {
            if (allowSets()) {
                file_get_contents("http://baall-server-2.informatik.uni-bremen.de/api/set?id=" . $this->id . "&value=" . $value);
                $this->objects[$this->id] = $value;
            }else {
                echo("Error: status hasn't changed in reality. Status Flag should be set up.");
                echo "<br />";
            }
        }else{
            echo("Error: connection hasn't stablished yet.");
            echo "<br />";
        }
    }
    //------------------
    function set_statusRGB($r, $g, $b){
        if(connection_check()) {
            if (allowSets()) {
                file_get_contents("http://baall-server-2.informatik.uni-bremen.de/api/setRGB?id=" . $this->id . "&r=" . $r . "&g=" . $g . "&b=" . $b);
                if ($r != 0 || $g != 0 || $b != 0) {
                    $this->objects[$this->id] = $r . ":" . $g . ":" . $b;
                }
            }else {
                echo("Error: status hasn't changed in reality. Status Flag should be set up.");
                echo "<br />";
            }
        }else{
            echo("Error: connection hasn't stablished yet.");
            echo "<br />";
        }
    }
    //------------------
    function set_statusTV($value, $volume)
    {
        if (connection_check()) {
            if (allowSets()) {
                $name = "tvProgram";
                file_get_contents("http://baall-server-2.informatik.uni-bremen.de/api/set?id=" . $name . "&value=" . $value);
                $this->objects[$this->id] = $value;

                $name = "tvVolume";
                file_get_contents("http://baall-server-2.informatik.uni-bremen.de/api/set?id=" . $name . "&value=" . $volume);
                $this->objects[$this->id] = $volume;
            }else {
                echo("Error: status hasn't changed in reality. Status Flag should be set up.");
                echo "<br />";
            }
        }else{
            echo("Error: connection hasn't stablished yet.");
            echo "<br />";
        }
    }
}
//------------------------------------------------------
class light extends actuator {
//creating the light cells in the frontend
    function output() {
        $condition = $this -> get_value();

        if ($condition == "on") {
            echo '<td class="light light" title="Light"></td>';
        } else {
            echo '<td class="light light-off" title="Light"></td>';
        }
    }
}
//------------------------------------------------------
class door extends actuator {
//creating the light cells in the frontend
    function output() {
        $condition = $this -> get_value();
        if ($condition == "off") {
            echo '<td class="door door" title="Door"></td>';
        } else {
            echo '<td class="door door-open" title="Door"></td>';
        }
    }
}
//------------------------------------------------------
class dimmer extends actuator {
//creating the dimmer cells in the frontend
    function output() {
        $condition = $this -> get_value();
        if ($condition == 0) {
            echo '<td class="dimmer dimmer-off" title="Dimmer"></td>';
        } else {
            echo '<td class="dimmer dimmer" title="Dimmer"></td>';
        }
    }
}
//-------------------------------------------------------
class rgbLight extends actuator {
//creating the light cells in the frontend
    function output() {
        $condition = $this -> get_value();
        $val = explode(":",$condition);
        $valR = $val[0];
        $valG = $val[1];
        $valB = $val[2];

        if (!($valR == 0 && $valG == 0 && $valB == 0)) {
            echo '<td class="rgbLight rgbLight" title="RGB Light"></td>';
        } else {
            echo '<td class="rgbLight rgbLight-off" title="RGB Light"></td>';
        }
    }
}
//------------------------------------------------------
class tv extends actuator {
//creating the light cells in the frontend
    function output() {
        $condition = $this -> get_value();
        if ($condition != "") {
            echo '<td class="tv tv" title="TV"></td>';
        } else {
            echo '<td class="tv tv-off" title="TV"></td>';
        }
    }
}
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//making instances out of the classes for different objects
$wall = new wall();
$bed = new bed();
$fridge = new fridge();
$blank = new blank();
//---------------
$bedroomJack1 = $BRJack1 = new light($objects, "bedroomJack1");
$bedroomJack2 = $BRJack2 = new light($objects, "bedroomJack2");

$bedroomLight1 = $BRLight1 = new light($objects, "bedroomLight1");
$bedroomLight2 = $BRLight2 = new light($objects, "bedroomLight2");
//------------------
$livingJack1 = $LRJack1 = new light($objects, "livingJack1");

$livingLight1 = $LRLight1 = new light($objects, "livingLight1");
$livingLight2 = $LRLight2 = new light($objects, "livingLight2");
//------------------
$corridorLight = $CorLight = new light($objects, "corridorLight");
//------------------
$kitchenLight = $KitLight = new light($objects, "kitchenLight");
//------------------
$bathroomLight = $BRLight = new light($objects, "bathroomLight");
//------------------
//------------------
$bulblamp = $BRrgb = new rgbLight($objects, 'bulblamp');
$floorlamp = $LRrgb = new rgbLight($objects, 'floorlamp');
//------------------
//------------------
$bathroomdoor = $BRDoor = new door($objects, "bathroomdoor");
//------------------
$upperLeftDoor = $LRLDoor = new door($objects, "upperLeftDoor");
$upperRightDoor = $LRRDoor = new door($objects, "upperRightDoor");
//------------------
$lowerLeftDoor = $BRLDoor = new door($objects, "lowerLeftDoor");
$lowerRightDoor = $BRRDoor = new door($objects, "lowerRightDoor");
//------------------
$livingLight3 = $LRDimmer = new dimmer($objects, "livingLight3");
$basin = $BRBasin = new dimmer($objects, "basin");
$toilet = $BRToilet = new dimmer($objects, "bathroomToiletHeight");

$kitchenet = $KitKitchennet = new dimmer($objects, "kitchenet");
//------------------
$tvProgram = $BRtv= new tv($objects, "tvProgram");
?>

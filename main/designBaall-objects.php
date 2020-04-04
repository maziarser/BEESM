<?php
error_reporting(0);
//------------------------------------------------------
//file_get_contents with HTTP Authorization
$design_url = "http://baall-server-2.informatik.uni-bremen.de/api/status";
$design_cred = sprintf('Authorization: Basic %s', base64_encode('xxx:xxx'));
$design_opts = array(
    'http' => array(
        'method' => 'GET',
        'header' => $design_cred
    )
);
$design_ctx = stream_context_create($design_opts);
$design_data = file_get_contents($design_url, false, $design_ctx);


$design_items = json_decode($design_data, true);

$design_objects = array();
//------------------------------------------------------
foreach($design_items as $design_key => $design_value) {
//for lights and doors and RGB lights - other objects
    if ((!empty($design_value['status']) || $design_value['name'] == "livingLight3") && !is_array($design_value['status']) && $design_value['name'][0] != "_" && !empty($design_value['type'])) {
        $design_name = $design_value['name'];
        $design_objects[$design_name] = $design_value['status'];
    }
}
//------------------------------------------------------
$design_server_condition = 0;
class design_server
{
    var $addr;
    var $items;

    function __construct()
    {
        global $design_server_condition;
        $design_server_condition = 1;
        $this->addr = "http://baall-server-2.informatik.uni-bremen.de/api/status";
        $this->items = json_decode(file_get_contents($this->addr), true);

        foreach ($this->items as $key => $value) {
            if ((!empty($value['status']) || $value['name'] == "livingLight3") && !is_array($value['status']) && $value['name'][0] != "_" && !empty($value['type'])) {
                $name = $value['name'];
                $design_objects[$name] = $value['status'];
            }
        }
    }
}
//------------------------------------------------------
//for the admin
function design_allowSets() {
    $config = json_decode(file_get_contents("settings.json"));
    if ($config->simulationBaall == 1) {
        return true;
    }
    return false;
}
//------------------------------------------------------
//check the connection
function design_connection_check() {
    global $design_server_condition;
    if ($design_server_condition == 1) {
        return true;
    }
    return false;
}
//------------------------------------------------------
//each cell in our output table
class design_eachObject {
    function design_output() {
        echo '<td style="border: 0.1px solid black;">&nbsp;</td>';
    }
}
//------------------------------------------------------
//walls
class design_wall extends design_eachObject {
    function design_output() {
        echo '<td class="wall" style="border: 0.1px solid black;">&nbsp;</td>';
    }
}
//------------------------------------------------------
//blank cells
class design_blank extends design_eachObject {
    function design_output() {
        echo '<td class="blank" style="border: 0.1px solid black;">&nbsp;</td>';
    }
}
//------------------------------------------------------
//actuator for lights and doors
class design_actuator extends design_eachObject {
//refernce to the objects and thier conditions
    var $design_id;
    var $design_objects;

    function __construct( & $design_objects, $design_id) {
        $this -> design_objects = $design_objects;
        $this -> design_id = $design_id;
    }

    function design_get_condition() {
        return $this -> design_objects[$this -> design_id];
    }
    //------------------------------------------------------
    function design_home($firstX, $firstY, $lastX, $lastY) {
        global $design_room;
        for ($i = $firstX; $i <= $lastX; $i++) {
            for ($j = $firstY; $j <= $lastY; $j++) {
                $design_room[$j][$i] = $this;
            }
        }
        return $design_room;
    }
}
//------------------------------------------------------
class design_light extends design_actuator {
//creating the light cells in the frontend
    function design_output() {
        $design_condition = $this -> design_get_condition();

        if ($design_condition == "on") {
            echo '<td class="light light-on" style="border: 0.1px solid black;" title="Light"></td>';
        } else {
            echo '<td class="light light-off" style="border: 0.1px solid black;" title="Light"></td>';
        }
    }
}
//------------------------------------------------------
class design_door extends design_actuator {
//creating the light cells in the frontend
    function design_output() {
        $design_condition = $this -> design_get_condition();
        if ($design_condition == "off") {
            echo '<td class="door door-close" style="border: 0.1px solid black;" title="Door"></td>';
        } else {
            echo '<td class="door door-open" style="border: 0.1px solid black;" title="Door"></td>';
        }
    }
}
//------------------------------------------------------
class design_dimmer extends design_actuator {
//creating the dimmer cells in the frontend
    function design_output() {
        $design_condition = $this -> design_get_condition();
        if ($design_condition == 0) {
            echo '<td class="dimmer dimmer-off" style="border: 0.1px solid black;" title="Dimmer Lamp"></td>';
        } else {
            echo '<td class="dimmer dimmer-on" style="border: 0.1px solid black;" title="Dimmer Lamp"></td>';
        }
    }
}
//-------------------------------------------------------
class design_basin extends design_actuator {
//creating the basin cells in the frontend
    function design_output() {
        $design_condition = $this -> design_get_condition();
        if ($design_condition == 0) {
            echo '<td class="basin basin-off" style="border: 0.1px solid black;" title="Basin"></td>';
        } else {
            echo '<td class="basin basin-on" style="border: 0.1px solid black;" title="Basin"></td>';
        }
    }
}
//-------------------------------------------------------
class design_toilet extends design_actuator {
//creating the toilet cells in the frontend
    function design_output() {
        $design_condition = $this -> design_get_condition();
        if ($design_condition == 0) {
            echo '<td class="toilet toilet-off" style="border: 0.1px solid black;" title="Toilet"></td>';
        } else {
            echo '<td class="toilet toilet-on" style="border: 0.1px solid black;" title="Toilet"></td>';
        }
    }
}
//-------------------------------------------------------
class design_rgbLight extends design_actuator {
//creating the light cells in the frontend
    function design_output() {
        $design_condition = $this -> design_get_condition();
        if ($design_condition != 0) {
            echo '<td class="rgbLight rgbLight-on" style="border: 0.1px solid black;" title="RGB Light"></td>';
        } else {
            echo '<td class="rgbLight rgbLight-off" style="border: 0.1px solid black;" title="RGB Light"></td>';
        }
    }
}
//-------------------------------------------------------
class design_tv extends design_actuator {
//creating the light cells in the frontend
    function design_output() {
        $design_condition = $this -> design_get_condition();
        if ($design_condition != "") {
            echo '<td class="tv tv" style="border: 0.1px solid black;" title="TV"></td>';
        } else {
            echo '<td class="tv tv-off" style="border: 0.1px solid black;" title="TV"></td>';
        }
    }
}
//------------------------------------------------------
//------------------------------------------------------
//making instances out of the classes for different objects
$design_w = $design_wall = new design_wall();
$design_b = $design_blank = new design_blank();
//---------------
$design_bedroomJack1 = $design_BRJack1 = new design_light($design_objects, "bedroomJack1");
$design_bedroomJack2 = $design_BRJack2 = new design_light($design_objects, "bedroomJack2");

$design_bedroomLight1 = $design_BRLight1 = new design_light($design_objects, "bedroomLight1");
$design_bedroomLight2 = $design_BRLight2 = new design_light($design_objects, "bedroomLight2");
//---------------
$design_livingJack1 = $design_LRJack1 = new design_light($design_objects, "livingJack1");
//---------------
$design_livingLight1 = $design_LRLight1 = new design_light($design_objects, "livingLight1");
$design_livingLight2 = $design_LRLight2 = new design_light($design_objects, "livingLight2");
//---------------
$design_corridorLight = $design_CorLight = new design_light($design_objects, "corridorLight");
//---------------
$design_kitchenLight = $design_KitLight = new design_light($design_objects, "kitchenLight");
//---------------
$design_bathroomLight = $design_BRLight = new design_light($design_objects, "bathroomLight");
//---------------
$design_bulblamp = $design_BRrgb = new design_rgbLight($design_objects, 'bulblamp');
$design_floorlamp = $design_LRrgb = new design_rgbLight($design_objects, 'floorlamp');
//---------------
$design_bathroomdoor = $design_BRDoor = new design_door($design_objects, "bathroomdoor");
//---------------
$design_upperRightDoor = $design_LRLDoor = new design_door($design_objects, "upperRightDoorupperRightDoor");
$design_upperRightDoor = $design_BRRDoor = new design_door($design_objects, "upperRightDoor");
//---------------
$design_lowerLeftDoor = $design_LRRDoor = new design_door($design_objects, "lowerLeftDoor");
$design_lowerRightDoor = $design_BRLDoor = new design_door($design_objects, "lowerRightDoor");
//---------------
$design_livingLight3 = $design_LRDimmer = new design_dimmer($design_objects, "livingLight3");
//---------------
$design_basin = $design_BRBasin = new design_basin($design_objects, "basin");
//---------------
$design_bathroomToiletHeight = $design_BRToilet = new design_toilet($design_objects, "bathroomToiletHeight");
//---------------
$design_kitchenet = $design_KitKitchennet = new design_toilet($design_objects, "kitchenet");
//---------------
$design_tvProgram = $design_BRtv= new design_tv($design_objects, "tvProgram");
?>
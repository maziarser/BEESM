<?php
error_reporting(0);
ini_set("default_socket_timeout", 5);
set_time_limit ( 0);
//------------------------------------------------------
class computer {
    public  $name;
    public  $ip;
    function __construct($ip,$name) {
        $this->ip = $ip;
        $this->name = $name;
    }
}
//------------------------------------------------------
// manage students' computers
$computers = array();
$c = new computer("admin","admin");

$c_01 = new computer("student01","computer01");
$c_02 = new computer("student02","computer02");
$c_03 = new computer("student03","computer03");
//... rest of computers

$computers[]  = $c;

$computers[]  = $c_01;
$computers[]  = $c_02;
$computers[]  = $c_03;
//... rest of computers
print_r($computers);
//------------------------------------------------------
function setSimulationBaall($ip,$value) {
	$url = ("http://".$ip.":8012/BEESM/main/remoteAdmin.php?pass=-pass-&simulationBaall=".$value);
	file_get_contents($url);
}

function setSimulationRos($ip,$value) {
    $url = ("http://".$ip.":8012/BEESM/main/remoteAdmin.php?pass=-pass-&simulationRos=".$value);
    file_get_contents($url);
}

function setTask01($ip,$value) {
	$url = ("http://".$ip.":8012/BEESM/main/remoteAdmin.php?pass=-pass-&task01=".$value);
	file_get_contents($url);
}

function setTask02($ip,$value) {
	$url = ("http://".$ip.":8012/BEESM/main/remoteAdmin.php?pass=-pass-&task02=".$value);
	file_get_contents($url);
}

function setTask03($ip,$value) {
	$url = ("http://".$ip.":8012/BEESM/main/remoteAdmin.php?pass=-pass-&task03=".$value);
	file_get_contents($url);
}

function setSaveXML($ip,$value) {
	$url = ("http://".$ip.":8012/BEESM/main/remoteAdmin.php?pass=-pass-&saveXML=".$value);
	file_get_contents($url);
}

$ips = array();
foreach ($_REQUEST as $k=>$v) {
	if (substr($k,0,3) == "pc_") {
		$c = $computers[substr($k,3)];
		$ips[]= $c->ip;
	}
	
}
//------------------------------------------------------
if(isset($_REQUEST["simulationBaall"])){
	foreach($ips as $ip) {
		setSimulationBaall($ip,$_REQUEST["simulationBaall"]);
	}
}elseif(isset($_REQUEST["simulationRos"])){
    foreach($ips as $ip) {
        setSimulationRos($ip,$_REQUEST["simulationRos"]);
    }
}elseif(isset($_REQUEST["task01"])){
	foreach($ips as $ip) {
		setTask01($ip,$_REQUEST["task01"]);
	}
}elseif(isset($_REQUEST["task02"])){
	foreach($ips as $ip) {
		setTask02($ip,$_REQUEST["task02"]);
	}
}elseif(isset($_REQUEST["task03"])){
	foreach($ips as $ip) {
		setTask03($ip,$_REQUEST["task03"]);
	}
}elseif(isset($_REQUEST["saveXML"])){
	foreach($ips as $ip) {
		setSaveXML($ip,$_REQUEST["saveXML"]);
	}
}
?>
//------------------------------------------------------
//------------------------------------------------------
<html>
<head>
    <script src="jquery-3.2.1.min.js"></script>
    <link rel="stylesheet" href="admin.css">
    <script>
        function addToFormAndSubmit(name, value) {
            const f = document.getElementById("myForm");
            console.log(f);
            var input = document.createElement("input");

            input.setAttribute("type", "hidden");

            input.setAttribute("name", name);

            input.setAttribute("value", value);
            f.appendChild(input);
            doSubmit();
        }

        function doSubmit() {
            console.log("working_")
            document.getElementById("myForm").submit();

        }
    </script>
</head>
    <body>
		<form id="myForm" action="<?=$_SERVER["PHP_SELF"]?>" method="POST">
			<p><h3>Computer</h3></p>
			<?php
				foreach ($computers as  $k=>$c) {
                    $json_setting = json_decode(file_get_contents("http://".$c->ip.":8012/BEESM/main/settings.json"),true);
			?>
					<input type="checkbox" id="<?="pc_".$k?>" name="<?="pc_".$k?>" <?=(isset($_REQUEST["pc_".$k]) && $_REQUEST["pc_".$k]=="on")?("checked"):("")?>/>
					<label for="<?="pc_".$k?>" style="margin-right:50px; margin-bottom:20px;"><?=($c->name)?></label>
                    <?php

                    if ($json_setting != NULL){?>
                        <label style="margin-right:5px;"><strong>Simulation BAALL:</strong></label>
                        <?php
                        if($json_setting["simulationBaall"]==TRUE){
                            echo ("ON");
                        }else {
                            echo ("OFF");
                        }
                        ?>
                        <span  id="sim_set_baall" style="margin-right:50px; color:#DD2C00;"> </span>
                        <!-- -------------------------------- -->
                        <label style="margin-right:5px;"><strong>Simulation ROS:</strong></label>
                        <?php
                        if($json_setting["simulationRos"]==TRUE){
                            echo ("ON");
                        }else {
                            echo ("OFF");
                        }
                        ?>
                        <span  id="sim_set_ros" style="margin-right:50px; color:#DD2C00;"> </span>
                        <!-- -------------------------------- -->
                        <label style="margin-right:5px;"><strong>Task01:</strong></label>
                        <?php
                        if($json_setting["task01"]==TRUE){
                            echo ("ON");
                        }else {
                            echo ("OFF");
                        }
                        ?>
                        <span  id="task01_set" style="margin-right:20px; color:#DD2C00;"> </span>
                        <!-- -------------------------------- -->
                        <label style="margin-right:5px;"><strong>Task02:</strong></label>
                        <?php
                        if($json_setting["task02"]==TRUE){
                            echo ("ON");
                        }else {
                            echo ("OFF");
                        }
                        ?>
                        <span  id="task02_set" style="margin-right:20px; color:#DD2C00;"> </span>
                        <!-- -------------------------------- -->
                        <label style="margin-right:5px;"><strong>Task03:</strong></label>
                        <?php
                        if($json_setting["task03"]==TRUE){
                            echo ("ON");
                        }else {
                            echo ("OFF");
                        }
                        ?>
                        <span  id="task03_set" style="margin-right:50px; color:#DD2C00;"> </span>
                        <!-- -------------------------------- -->
                        <label style="margin-right:5px;"><strong>Save XML:</strong></label>
                        <?php
                        if($json_setting["saveXML"]==TRUE){
                            echo ("ON");
                        }else {
                            echo ("OFF");
                        }
                        ?>
                        <span  id="saveXML_set" style="margin-right:50px; color:#DD2C00;"> </span>
                        <!-- -------------------------------- -->
			<?php 
				}
                echo("</br>");
            }
			?>
            //------------------------------------------------------
            <div class="">
                <div class="">
                    <div class="">
                        <div class="panelAdmin panel-beesm">
                            <div class="panelAdmin-heading">
                                <h3 class="panelAdmin-title">Simulation BAALL</h3>
                            </div>
                            <div class="panelAdmin-body">
                                <a onclick="addToFormAndSubmit('simulationBaall',1)" class="btn-admin">on</a>
                                <a onclick="addToFormAndSubmit('simulationBaall',0)"  class="btn-admin">off</a>
                            </div>
                        </div>

                        <div class="panelAdmin panel-beesm">
                            <div class="panelAdmin-heading">
                                <h3 class="panelAdmin-title">Simulation ROS</h3>
                            </div>
                            <div class="panelAdmin-body">
                                <a onclick="addToFormAndSubmit('simulationRos',1)" class="btn-admin">on</a>
                                <a onclick="addToFormAndSubmit('simulationRos',0)"  class="btn-admin">off</a>
                            </div>
                        </div>

                        <div class="panelAdmin panel-beesm">
                            <div class="panelAdmin-heading">
                                <h3 class="panelAdmin-title">Task 01</h3>
                            </div>
                            <div class="panelAdmin-body">
                                <a onclick="addToFormAndSubmit('task01',1)" class="btn-admin">on</a>
                                <a onclick="addToFormAndSubmit('task01',0)"  class="btn-admin">off</a>
                            </div>
                        </div>

                        <div class="panelAdmin panel-beesm">
                            <div class="panelAdmin-heading">
                                <h3 class="panelAdmin-title">Task 02</h3>
                            </div>
                            <div class="panelAdmin-body">
                                <a onclick="addToFormAndSubmit('task02',1)" class="btn-admin">on</a>
                                <a onclick="addToFormAndSubmit('task02',0)"  class="btn-admin">off</a>
                            </div>
                        </div>

                        <div class="panelAdmin panel-beesm">
                            <div class="panelAdmin-heading">
                                <h3 class="panelAdmin-title">Task 03</h3>
                            </div>
                            <div class="panelAdmin-body">
                                <a onclick="addToFormAndSubmit('task03',1)" class="btn-admin">on</a>
                                <a onclick="addToFormAndSubmit('task03',0)"  class="btn-admin">off</a>
                            </div>
                        </div>

                        <div class="panelAdmin panel-beesm">
                            <div class="panelAdmin-heading">
                                <h3 class="panelAdmin-title">save XML</h3>
                            </div>
                            <div class="panelAdmin-body">
                                <a onclick="addToFormAndSubmit('saveXML',1)" class="btn-admin">on</a>
                                <a onclick="addToFormAndSubmit('saveXML',0)"  class="btn-admin">off</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

		</form>

    </body>
</html>

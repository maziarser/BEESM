<?php
$config = json_decode(file_get_contents("settings.json"));

if(!isset($_REQUEST["pass"]) || $_REQUEST["pass"] != "-pass-" ) {
	die("access denied!");	
}

function reload() {
	header("location: ".$_SERVER["PHP_SELF"]."?pass=".$_REQUEST["pass"]);
	
}

if (isset($_REQUEST["task01"])) {
	$task1 = $_REQUEST["task01"];
	$config->task01 = ($task1==1)?(true):(false);
	reload();
}else if (isset($_REQUEST["task02"])) {
	$task2 = $_REQUEST["task02"];
	$config->task02 = ($task2==1)?(true):(false);
	reload();
}else if (isset($_REQUEST["task03"])) {
	$task3 = $_REQUEST["task03"];
	$config->task03 = ($task3==1)?(true):(false);
	reload();
}else if (isset($_REQUEST["simulationBaall"])) {
    $sim = $_REQUEST["simulationBaall"];
    $config->simulationBaall = ($sim==1)?(true):(false);
    reload();
}else if (isset($_REQUEST["simulationRos"])) {
	$sim_ros = $_REQUEST["simulationRos"];
	$config->simulationRos = ($sim_ros==1)?(true):(false);
	reload();
}else if (isset($_REQUEST["saveXML"])) {
	$saveX = $_REQUEST["saveXML"];
	$config->saveXML = ($saveX==1)?(true):(false);
	reload();
}

fwrite($handle = fopen("settings.json", 'w'),json_encode($config));
?>

<html>
<head>
    <link rel="stylesheet" href="admin.css">
</head>

<body>
<div class="">
    <div class="">
        <div class="">
            <div class="panelAdmin <?=($config->simulationBaall==1)?(" panel-on "):("panel-off ")?>">
                <div class="panelAdmin-heading">
                    <h3 class="panelAdmin-title">Simulation BAALL</h3>
                </div>
                <div class="panelAdmin-body">
                    <a href="?simulationBaall=1&pass=<?=$_REQUEST[" pass "]?>" class="btn-admin">on</a>
                    <a href="?simulationBaall=0&pass=<?=$_REQUEST[" pass "]?>" class="btn-admin">off</a>
                </div>
            </div>

            <div class="panelAdmin <?=($config->simulationRos==1)?(" panel-on "):("panel-off ")?>">
                <div class="panelAdmin-heading">
                    <h3 class="panelAdmin-title">Simulation ROS</h3>
                </div>
                <div class="panelAdmin-body">
                    <a href="?simulationRos=1&pass=<?=$_REQUEST[" pass "]?>" class="btn-admin">on</a>
                    <a href="?simulationRos=0&pass=<?=$_REQUEST[" pass "]?>" class="btn-admin">off</a>
                </div>
            </div>

            <div class="panelAdmin <?=($config->task01==1)?(" panel-on "):("panel-off ")?>">
                <div class="panelAdmin-heading">
                    <h3 class="panelAdmin-title">Task 01</h3>
                </div>
                <div class="panelAdmin-body">
                    <a href="?task01=1&pass=<?=$_REQUEST[" pass "]?>" class="btn-admin">on</a>
                    <a href="?task01=0&pass=<?=$_REQUEST[" pass "]?>" class="btn-admin">off</a>
                </div>
            </div>

            <div class="panelAdmin <?=($config->task02==1)?(" panel-on "):("panel-off ")?>">
                <div class="panelAdmin-heading">
                    <h3 class="panelAdmin-title">Task 02</h3>
                </div>
                <div class="panelAdmin-body">
                    <a href="?task02=1&pass=<?=$_REQUEST[" pass "]?>" class="btn-admin">on</a>
                    <a href="?task02=0&pass=<?=$_REQUEST[" pass "]?>" class="btn-admin">off</a>
                </div>
            </div>

            <div class="panelAdmin <?=($config->task03==1)?(" panel-on "):("panel-off ")?>">
                <div class="panelAdmin-heading">
                    <h3 class="panelAdmin-title">Task 03</h3>
                </div>
                <div class="panelAdmin-body">
                    <a href="?task03=1&pass=<?=$_REQUEST[" pass "]?>" class="btn-admin">on</a>
                    <a href="?task03=0&pass=<?=$_REQUEST[" pass "]?>" class="btn-admin">off</a>
                </div>
            </div>

            <div class="panelAdmin <?=($config->saveXML==1)?(" panel-on "):("panel-off ")?>">
                <div class="panelAdmin-heading">
                    <h3 class="panelAdmin-title">Save XML</h3>
                </div>
                <div class="panelAdmin-body">
                    <a href="?saveXML=1&pass=<?=$_REQUEST[" pass "]?>" class="btn-admin">on</a>
                    <a href="?saveXML=0&pass=<?=$_REQUEST[" pass "]?>" class="btn-admin">off</a>
                </div>
            </div>


        </div>
    </div>
</div>
</body>

</html>




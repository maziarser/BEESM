<?php
$code = file_get_contents("php://input");
if (strlen($code)> 1) {
    fwrite($handle = fopen("logs/xml_".$_REQUEST["name"]."_Task_".$_REQUEST["task"]."_area_".$_REQUEST["area"]."_".time().".xml", 'w'), $code);
}
?>

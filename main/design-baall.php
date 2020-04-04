<?php
require_once("designBaall-objects.php");
//------------------------------------------------------
$design_room = array();
//------------------------------------------------------
//change the .txt file based on the designed blocks
require_once("eval-baall.php");
//------------------------------------------------------
//convert data back to array
//unserializing to get actual array
$design_room = file_get_contents('design-baall.txt');
$design_room = unserialize($design_room);
?>
//------------------------------------------------------
//------------------------------------------------------
<html>
<head>
    <link rel="stylesheet" href="myStyle.css">
</head>

<body class="only_once">
<?php
echo '<table id="designTable">';
//col
echo '<tr><td align="center"></td>';
for ($i = 0; $i < count($design_room[0]); $i++) {
    echo '<td align="center" style="width: 2%; font-size: 14px;">'.$i.
    '</td>';
}
echo "</tr>";
//-----------
//row
$i = 0;
foreach($design_room as $design_row) {
    echo '<tr><td align="center" style="width: 2%; font-size: 14px;">'.$i.
    '</td>';
    $i++;
    //---
    foreach($design_row as $design_tool) {
        $design_tool -> design_output();
    }
    echo '</tr>';
}
//-----------
echo '</table>';
?>
</body>

</html>

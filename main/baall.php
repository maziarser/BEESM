<?php
require_once("baall-objects.php");
//------------------------------------------------------
$room = array();
//------------------------------------------------------
//include the table of objects of BAALL 
require_once("table-baall.php");
?>

<html>
<head>
    <link rel="stylesheet" href="myStyle.css">
</head>

<body>
<?php
echo '<table id="baallTable">';
//col
echo '<tr><td align="center"></td>';
for ($i = 0; $i < count($room[0]); $i++) {
    echo '<td align="center" style="width: 2%; font-size: 14px;">'.$i.
    '</td>';
}
echo "</tr>";
//------------------
//row
$i = 0;
foreach($room as $row) {
    echo '<tr><td align="center" style="width: 2%; font-size: 14px;">'.$i.
    '</td>';
    $i++;
    //------------------
    foreach($row as $tool) {
        $tool -> output();
    }
    echo '</tr>';
}
//------------------
echo '</table>';
?>
</body>

</html>

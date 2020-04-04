<?php
//it is copy the backup_baall into the design_baall
$backupDesignBaall_txt = file_get_contents("backup-design-baall.txt");
$path = "design-baall.txt";
$designBaall_txt = file_get_contents($path);
if ($backupDesignBaall_txt !== $designBaall_txt) {
    file_put_contents($path, $backupDesignBaall_txt);
}
?>
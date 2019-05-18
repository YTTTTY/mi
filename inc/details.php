<?php
include 'common.php';

$getid = isset($_GET['getid']) ? $_GET['getid'] : '';
$usnameId = isset($_GET['usnameId']) ? $_GET['usnameId'] : '';
$connectid = isset($_GET['connectid']) ? $_GET['connectid'] : '';

if (!empty($getid)) {
    $ss = "SELECT * FROM commodity WHERE id=$getid LIMIT 1;";
    $con = $sql->query($ss);
    $conContent = $con->fetch_all(MYSQLI_ASSOC);
    echo json_encode($conContent, JSON_UNESCAPED_UNICODE);
}
if (!empty($connectid) && !empty($usnameId)) {
    $ss = "SELECT * FROM cart WHERE userid=$usnameId AND commodityid=$connectid LIMIT 1;";
    $con = $sql->query($ss);
    if ($con->num_rows) {
        $content = $con->fetch_all(MYSQLI_ASSOC);
        $num = $content[0]['number'] + 1;
        $ss1 = "UPDATE cart SET number=$num WHERE userid=$usnameId AND commodityid=$connectid;";
    } else {
        $ss1 = "INSERT INTO cart VALUES($usnameId,$connectid,1,1);";
    }
    $con1 = $sql->query($ss1);
    echo $con1;
}

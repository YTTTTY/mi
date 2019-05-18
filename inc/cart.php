<?php
include 'common.php';

$usnameId = isset($_GET['usnameId']) ? $_GET['usnameId'] : '666666';
$userprid = isset($_GET['userprid']) ? $_GET['userprid'] : '';
$parcid = isset($_GET['parcid']) ? $_GET['parcid'] : '';
$choice = isset($_GET['choice']) ? $_GET['choice'] : '';
$number = isset($_GET['number']) ? $_GET['number'] : '';
$deletes = isset($_GET['deletes']) ? $_GET['deletes'] : '';

if (!empty($usnameId)) {
    $ss = "SELECT * FROM cart WHERE userid=$usnameId;";
    $con = $sql->query($ss);
    if ($con->num_rows) {
        $content2 = '';
        $content = $con->fetch_all(MYSQLI_ASSOC);
        foreach ($content as $key) {
            $ss1 = "SELECT * FROM commodity WHERE id=$key[commodityid];";
            $con1 = $sql->query($ss1);
            $content1 = $con1->fetch_all(MYSQLI_ASSOC);
            $content1[0]['number'] = $key['number'];
            $content1[0]['choice'] = $key['choice'];
            $content2[] = $content1[0];
        }
        echo json_encode($content2, JSON_UNESCAPED_UNICODE);
    }else{
        echo 0;
    }
}
if ($choice !== '') {
    $ss = "UPDATE cart SET choice=$choice WHERE userid=$userprid AND commodityid=$parcid;";
    $con = $sql->query($ss);
}
if (!empty($number)) {
    $ss = "UPDATE cart SET number=$number WHERE userid=$userprid AND commodityid=$parcid;";
    $con = $sql->query($ss);
}
if (!empty($deletes)) {
    $ss = "DELETE FROM cart WHERE userid=$userprid AND commodityid=$parcid;";
    $con = $sql->query($ss);
}


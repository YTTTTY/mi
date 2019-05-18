<?php
include 'common.php';

$navMenuIndex = isset($_GET['navMenuIndex']) ? $_GET['navMenuIndex'] : '';
$phone = isset($_GET['phone']) ? $_GET['phone'] : '';
$homeelec = isset($_GET['homeelec']) ? $_GET['homeelec'] : '';
$recommend = isset($_GET['recommend']) ? $_GET['recommend'] : '';
$cartid = isset($_GET['cartid']) ? $_GET['cartid'] : '';
$cartuserid = isset($_GET['cartuserid']) ? $_GET['cartuserid'] : '';
$deleuseId = isset($_GET['deleuseId']) ? $_GET['deleuseId'] : '';
$deletId = isset($_GET['deletId']) ? $_GET['deletId'] : '';

if (!empty($navMenuIndex)) {
    $index = ($navMenuIndex - 1) * 6;
    $ss = "SELECT * FROM commodity LIMIT $index,6;";
    $con = $sql->query($ss);
    $conContent = $con->fetch_all(MYSQLI_ASSOC);
    echo json_encode($conContent, JSON_UNESCAPED_UNICODE);
}
if (!empty($phone)) {
    $ss = "SELECT * FROM commodity LIMIT 8;";
    $con = $sql->query($ss);
    $conContent = $con->fetch_all(MYSQLI_ASSOC);
    echo json_encode($conContent, JSON_UNESCAPED_UNICODE);
}
if (!empty($homeelec)) {
    $index = ($homeelec - 1) * 8;
    $ss = "SELECT * FROM commodity LIMIT $index,8;";
    $con = $sql->query($ss);
    $conContent = $con->fetch_all(MYSQLI_ASSOC);
    echo json_encode($conContent, JSON_UNESCAPED_UNICODE);
}
if (!empty($recommend)) {
    $ss = "SELECT * FROM commodity LIMIT 20;";
    $con = $sql->query($ss);
    $conContent = $con->fetch_all(MYSQLI_ASSOC);
    echo json_encode($conContent, JSON_UNESCAPED_UNICODE);
}
if (!empty($cartid)) {
    $ss = "SELECT * FROM cart WHERE userid=$cartid;";
    $con = $sql->query($ss);
    $conContent = $con->fetch_all(MYSQLI_ASSOC);
    echo json_encode($conContent, JSON_UNESCAPED_UNICODE);
}

if (!empty($cartuserid)) {
    $ss = "SELECT * FROM cart WHERE userid=$cartuserid;";
    $con = $sql->query($ss);
    $content = $con->fetch_all(MYSQLI_ASSOC);

    $content2 = '';
    foreach ($content as $key) {
        $ss1 = "SELECT * FROM commodity WHERE id=$key[commodityid];";
        $con1 = $sql->query($ss1);
        $content1 = $con1->fetch_all(MYSQLI_ASSOC);
        $content1[0]['number'] = $key['number'];
        $content1[0]['choice'] = $key['choice'];
        $content2[] = $content1[0];
    }
    echo json_encode($content2, JSON_UNESCAPED_UNICODE);
}
if (!empty($deleuseId) && !empty($deletId)) {
    $ss = "DELETE FROM cart WHERE userid=$deleuseId AND commodityid=$deletId;";
    $con = $sql->query($ss);
}

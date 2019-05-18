<?php
include 'common.php';
$page = isset($_GET['page']) ? $_GET['page'] : '';
$number = isset($_GET['number']) ? $_GET['number'] : '';
$option = isset($_GET['option']) ? $_GET['option'] : '';
$search = isset($_GET['search']) ? $_GET['search'] : '';
$data = isset($_GET['data']) ? $_GET['data'] : '';

$index = ($page - 1) * $number;
if ($search) {
    if ($option) {
        $ss = "SELECT * FROM commodity WHERE title LIKE '%$search%' ORDER BY price $option LIMIT $index,$number;";
        $button = "SELECT * FROM commodity WHERE title LIKE '%$search%';";
    } else if ($data) {
        $ss = "SELECT * FROM commodity WHERE title LIKE '%$search%' ORDER BY data desc LIMIT $index,$number;";
        $button = "SELECT * FROM commodity WHERE title LIKE '%$search%';";
    } else {
        $ss = "SELECT * FROM commodity WHERE title LIKE '%$search%' LIMIT $index,$number;";
        $button = "SELECT * FROM commodity WHERE title LIKE '%$search%';";
    }
} else {
    if ($option) {
        $ss = "SELECT * FROM commodity ORDER BY price $option LIMIT $index,$number;";
        $button = "SELECT * FROM commodity;";
    } else if ($data) {
        $ss = "SELECT * FROM commodity ORDER BY data desc LIMIT $index,$number;";
        $button = "SELECT * FROM commodity;";
     } else {
        $ss = "SELECT * FROM commodity LIMIT $index,$number;";
        $button = "SELECT * FROM commodity;";
    }
}
$con = $sql->query($ss);
$but = $sql->query($button);

if ($con->num_rows) {
    $content = $con->fetch_all(MYSQLI_ASSOC);
    $butnum = $but->num_rows;
    $arr1 = array($content, $butnum);
    $arr = json_encode($arr1, JSON_UNESCAPED_UNICODE);
} else {
    $arr = 0;
}
echo $arr;

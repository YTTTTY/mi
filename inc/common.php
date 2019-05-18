<?php
$linkageName = 'localhost';
$username = 'root';
$paswword = '';
$database = 'mi';

$sql = new mysqli($linkageName,$username,$paswword,$database);

if($sql->connect_error) {
    echo '连接失败'.$sql->connect_error;
}
$sql->set_charset('utf8');

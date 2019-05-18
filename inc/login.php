<?php
include 'common.php';
$user = isset($_POST['user']) ? $_POST['user'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';


function login(){
    if(empty($GLOBALS['user'])){
        return -1;
    }
    if(empty($GLOBALS['password'])){
        return -1;
    }
    $ss = "SELECT * FROM username WHERE id=$GLOBALS[user] AND password='$GLOBALS[password]' OR phone=$GLOBALS[user] AND password='$GLOBALS[password]' LIMIT 1;";
    $con = $GLOBALS['sql']->query($ss);
    $content = $con->fetch_all(MYSQLI_ASSOC);
    if($con->num_rows){
        return $content[0]['id'];
        return $con->num_rows;
    }else{
        return 0;
    }
}
echo login();

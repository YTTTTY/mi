<?php
include 'common.php';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$resendcode = isset($_POST['resendcode']) ? $_POST['resendcode'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';
$suphone = isset($_POST['suphone']) ? $_POST['suphone'] : '';
$getphone = isset($_POST['getphone']) ? $_POST['getphone'] : '';

if (!empty($phone)) {
    $ss = "SELECT * FROM username WHERE phone=$phone";
    $con = $sql->query($ss);
    if ($con->num_rows) {
        echo 1;
    } else {
        echo 0;
    }
}
if (!empty($resendcode)) {
    $rand = mt_rand(1000,9999);
    // function juhecurl($url, $params = false, $ispost = 0)
    // {
    //     $httpInfo = array();
    //     $ch = curl_init();
    //     curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
    //     curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22');
    //     curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
    //     curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    //     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    //     if ($ispost) {
    //         curl_setopt($ch, CURLOPT_POST, true);
    //         curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
    //         curl_setopt($ch, CURLOPT_URL, $url);
    //     } else {
    //         if ($params) {
    //             curl_setopt($ch, CURLOPT_URL, $url . '?' . $params);
    //         } else {
    //             curl_setopt($ch, CURLOPT_URL, $url);
    //         }
    //     }
    //     $response = curl_exec($ch);
    //     if ($response === FALSE) {
    //         return false;
    //     }
    //     $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    //     $httpInfo = array_merge($httpInfo, curl_getinfo($ch));
    //     curl_close($ch);
    //     return $response;
    // }
    // header('content-type:text/html;charset=utf-8');

    // $sendUrl = 'http://v.juhe.cn/sms/send'; //短信接口的URL

    // $smsConf = array(
    //     'key'   => '11ab54fa2831b159f15893f26965c53d', //您申请的APPKEY
    //     'mobile'    => $resendcode, //接受短信的用户手机号码
    //     'tpl_id'    => '159330', //您申请的短信模板ID，根据实际情况修改
    //     'tpl_value' => '#code#=' .$rand //您设置的模板变量，根据实际情况修改
    // );
    // $content = juhecurl($sendUrl, $smsConf, 1); //请求发送短信
    // if ($content) {
    //     $result = json_decode($content, true);
    //     $error_code = $result['error_code'];
    //     if ($error_code == 0) {
    //         //状态为0，说明短信发送成功
    //         echo $rand;
    //     } else {
    //         //状态非0，说明失败
    //         $msg = $result['reason'];
    //         echo "短信发送失败(" . $error_code . ")：" . $msg;
    //     }
    // } else {
    //     //返回内容异常，以下可根据业务逻辑自行修改
    //     echo "请求发送短信失败";
    // }
}

if (!empty($password)) {
    $ss = "INSERT INTO username(`password`,phone) VALUES('$password',$suphone);";
    $con = $sql->query($ss);
    echo $con;
}
if (!empty($getphone)) {
    $ss = "SELECT * FROM username WHERE phone=$getphone";
    $con = $sql->query($ss);
    $content = $con->fetch_all(MYSQLI_ASSOC);
    echo $content[0]['id'];
}

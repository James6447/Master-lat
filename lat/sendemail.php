<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
require 'PHPMailer/vendor/autoload.php';



    $C_company = $_GET['company'];
    $C_name=$_GET['username'];
    $C_email=$_GET['email'];
    $C_tel=$_GET['phone'];
    $C_message=$_GET['description'];

    $mail= new PHPMailer();                             //建立新物件
    $mail->SMTPDebug = 2;
    $mail->IsSMTP();                                    //設定使用SMTP方式寄信
    $mail->SMTPAuth = true;                        //設定SMTP需要驗證
    $mail->SMTPSecure = 'ssl';                    // Gmail的SMTP主機需要使用TSL連線
    $mail->Host = "smtp.gmail.com";             //Gamil的SMTP主機
    $mail->Port = 465;                                 //Gamil的SMTP主機的埠號(Gmail為587)。
    $mail->CharSet = "utf-8";                       //郵件編碼
    $mail->Username = "";       //Gamil帳號
    $mail->Password = "";         //Gmail密碼
    $mail->From = "malaysiaboyboy@gmail.com";        //寄件者信箱
    $mail->FromName = "LAT FACTORY";                  //寄件者姓名
    $mail->Subject ="感謝您的留言，您的建議是我們前進的動力!"; //郵件標題
    $mail->Body = "親愛的 ".$C_name."(".$C_email.")，您好：<br />公司：".$C_company."<br />電話:".$C_tel."<br />回應內容:".$C_message; //郵件內容
    // $mail->addAttachment('../uploadfile/file/dirname.png','new.jpg'); //附件，改以新的檔名寄出
    $mail->IsHTML();                             //郵件內容為html
    $mail->AddAddress("$C_email");    
         //收件者郵件及名稱

    if(!$mail->Send()){
        // echo "Error: " . $mail->ErrorInfo;
        $status="FAIL TO SEND MAIL";
    }else{
        // echo "<b>感謝您的留言，您的建議是我們前進的動力!</b>";
        $status="感謝您的留言，您的建議是我們前進的動力!";
    }

    $json = array(
         "status" => "感謝您的留言，您的建議是我們前進的動力!",
   );
      echo json_encode($json);

?>

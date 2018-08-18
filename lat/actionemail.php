<?php
require('common.php');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader

$company = $_GET['company'];
$name = $_GET['username'];
$phone = $_GET['phone'];
$email = $_GET['email'];
$text = $_GET['description'];


$con = new mysqli($servername, $username, $password, $dbname);
// mysql_query("$con 'utf8'");
if (!mysqli_set_charset($con, "utf8")) {
    printf("Error loading character set utf8: %s\n", mysqli_error($con));
    exit();
} else {
    printf("Current character set: %s\n", mysqli_character_set_name($con));
    mysqli_character_set_name($con);
}

if ($con->connect_error) {
    die("Connection failed: " . $conn->connect_error);
 }
 else{
     $query="INSERT INTO inbox(company1,username1,phone1,email1,description1)
             VALUES('$company','$name',$phone,'$email','$text') ";
   // $con->query($query);//這裡會insert一筆
 }
// 这里一下会喷500error

if ($con->query($query) ===TRUE)//這裡會insert多一筆
{

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
        $mail->Username = "malaysiaboyboy@gmail.com";       //Gamil帳號
        $mail->Password = "0909247049";         //Gmail密碼
        $mail->From = "malaysiaboyboy@gmail.com";        //寄件者信箱
        $mail->FromName = "LAT FACTORY";                  //寄件者姓名
        $mail->Subject ="感謝您的留言，您的建議是我們前進的動力!"; //郵件標題
        $mail->Body = "親愛的 ".$C_name."(".$C_email.")，您好：<br />公司：".$C_company."<br />電話:".$C_tel."<br />回應內容:".$C_message; //郵件內容
        // $mail->addAttachment('../uploadfile/file/dirname.png','new.jpg'); //附件，改以新的檔名寄出
        $mail->IsHTML();                             //郵件內容為html
        $mail->AddAddress("malaysiaboyboy@gmail.com");
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




}
else{
    $msg="Please Contect Our Service Number";
    // echo "Mailer Error: " . $mail->ErrorInfo;
  }



// echo "<script>alert('".$msg."');\n";
// echo "location.href='index.php';\n";
// echo "</script>";
    $con->close();

?>

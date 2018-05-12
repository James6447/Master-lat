<?php
require('common.php');

$company = $_GET['company'];
$name = $_GET['username'];
$phone = $_GET['phone'];
$email = $_GET['email'];
$text = $_GET['description'];


$con = new mysqli($servername, $username, $password, $dbname);

$query="INSERT INTO mail_box(Cus_Company,Cus_Name,Cus_Phone,Cus_Email,Cus_Descrip)
        VALUES('$company','$name',$phone,'$email','$text')
        ";

$query1="SELECT * FROM mail_box";

if ($con->query($query) == TRUE)
{
    $msg="Thanks For Comment";
    $status "yes";
}
else{
    $msg="Please Contect Our Service Number";
    $status "nope";
  }

$status = "FUCKKK";

// echo "<script>alert('".$msg."');\n";
// echo "location.href='index.php';\n";
// echo "</script>";


?>

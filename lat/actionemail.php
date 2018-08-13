<?php
require('common.php');

$company = $_GET['company'];
$name = $_GET['username'];
$phone = $_GET['phone'];
$email = $_GET['email'];
$text = $_GET['description'];





$con = new mysqli($servername, $username, $password, $dbname);

if ($con->connect_error) {
    die("Connection failed: " . $conn->connect_error);
 }
 else{
    
 }

$query="INSERT INTO inbox(company1,username1,phone1,email1,description1)
        VALUES('$company','$name',$phone,'$email','$text') ";

$query1= "SELECT * FROM inbox(company1)";


if ($con->query($query) ===TRUE)
{
   
    
   
}
else{
    $msg="Please Contect Our Service Number";
    
  }



// echo "<script>alert('".$msg."');\n";
// echo "location.href='index.php';\n";
// echo "</script>";
    $con->close();

?>

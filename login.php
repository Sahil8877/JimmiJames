<?php
if(isset($_GET['login_button_name']))
{
$server = "localhost";
$username = "root";
$password = "";

$con = mysqli_connect($server,$username,$password);

if (!$con) {
    die("Connection to this database failed dut to".mysqli_connect_error());
}

$email = $_POST['Email'];
$password = $_POST['Password'];

$sql = "SELECT * FROM `eaterometer`.`customer_table` (`Name`,`Reg`,`Phone`,`Email`,`Password`) VALUES ('$name','$reg','$phone','$email','$password');";
echo $sql;
if ($con->query($sql)==true) {
   echo "Successfully inserted";
}

else
{
    echo "Error:";
}

$con->close();
}

?>
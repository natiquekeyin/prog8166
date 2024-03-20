<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<form action="" method="post">
Item Description: <input type="text" size="20"
maxlength="20" name="Item">
Weight: <input type="text" size="5"
maxlength="20" name="Weight">
Cost: <input type="text" size="5"
maxlength="20" name="Cost">
Number Available:<input type="text" size="5"
maxlength="20" name="Quantity">

<input type="submit" value="Send to DB">

</form>



<?php

$servername = 'localhost'; 
$username = 'root'; 
$password = ''; 
$dbname = 'conestoga';

$db = new mysqli($servername, $username, $password, $dbname);

if($db->connect_error){
die('Connection failed...');
}

$text = $_POST["Item"];
$weight = $_POST["Weight"];
$cost = $_POST["Cost"];
$numb = $_POST["Quantity"];


$sql = "INSERT INTO Products (Product_desc,Cost,Weight,Numb)VALUES('$text','$weight','$cost','$numb')";

if($db->query($sql)===TRUE){
    echo "New record is created there...in DB";
}else{
    echo "Error: " + $sql + "<br"> + $db->error;
}

$db->close();
?>    

</body>
</html>

<!-- $_GET[] and $_POST[] -->
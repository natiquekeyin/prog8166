<?php
// start the session
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<h1>Setting and getting sessions</h1>
<?php
// let's set the session variable...
$_SESSION['backcolor']="red";
$_SESSION['forecolor']="green";
echo "Session variables now available..."
?>

<?php
echo "<br>My preferred background color is".$_SESSION['backcolor'];
echo "<br>My preferred foreground color is". $_SESSION['forecolor'];
?>

</body>
</html>
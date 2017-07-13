<?php
session_start();
require 'config.php';
$myusername=(isset($_POST['username'])) ? trim($_POST['username']) :''; 
$mypassword=(isset($_POST['password'])) ? trim($_POST['password']) :''; 
$query='SELECT * FROM user WHERE username="'.mysql_real_escape_string($myusername).'" and password="'.  mysql_real_escape_string($mypassword).'"';
$result=mysql_query($query,$db)or die(mysql_error());
$row=mysql_fetch_assoc($result);
$count=mysql_num_rows($result);
// If result matched $myusername and $mypassword, table row must be 1 row
if($count==1){
    if($row['level']=="user"){
        $_SESSION['login_user']=$myusername;
        $_SESSION['level']='user';
        header("location:dashboard.php");
    }elseif($row['level']=='admin'){
        $_SESSION['level']='admin';
        $_SESSION['login_user']=$myusername;
        header("location:dashboard1.php");
    }
}else 
{?>
<head><META http-equiv="refresh" content="3;URL=index.php"></head>
<p>Your Login Name or Password is invalid.</p>
<?php }
?>
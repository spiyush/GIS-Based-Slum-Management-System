<?php 
require 'config.php';
if(!isset($_POST['sign-submit'])){ ?>
<!DOCTYPE html>
<html>
    <head>
        <title>SIGN UP</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
        <div align="center" style="width: 50%;">
            <form method="post" action="signup.php">
                <fieldset>
                    <legend>SIGN UP</legend>
                    <p><input type="text" name="user" placeholder="USERNAME" required="required"></p>
                    <p><input type="text" name="pass" placeholder="PASSWORD" required="required"></p>
                    <p>CHOOSE ACCESS LEVEL</p>
                    <p><input type="radio" name="access" value="user" required="required">USER</p>
                    <p><input type="radio" name="access" value="admin" required="required">ADMIN</p>
                    <p><input type="submit" name="sign-submit" value="SIGN IN"></p>
                </fieldset>
            </form>
            
        </div>
        <?php
}elseif (isset ($_POST['sign-submit'])) {
            $user=$_POST['user'];
            $pass=$_POST['pass'];
            $access=$_POST['access'];
            $query='INSERT INTO user(username,password,level)
                VALUES(
                "'.  mysql_real_escape_string($user,$db).'",
                "'.  mysql_real_escape_string($pass,$db).'",
                "'.  mysql_real_escape_string($access,$db).'"
                )';
            $result=  mysql_query($query,$db)or die(mysql_error());
            if($result){
                ?>
        <p>SIGN UP DONE!!!!!!</p>
        <p>THANK YOU!!!</p>
        <p>To go the login page: <a href="index.php">Click Here</a></p>
                <?php
            }else{
                echo'<p>SIGN UP NOT DONE!!!<p>';
                echo '<p>To go the login page: <a href="index.php">Click Here</a></p>';
            }
            
        }
        ?>
    </body>
</html>

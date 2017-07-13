<?php
require 'config.php';
if(isset($_POST['submitBtn'])&& $_POST['submitBtn']=='Upload'){
    $kml_name=$_POST['projectname'];
$target_path="../SLUM/upload";
$destination=$target_path."/".$_FILES['upfile']['name'];
if (file_exists($destination))
      {
      echo $_FILES['upfile']['name'] . " this KML already exists in our records.";
?>
	<p>To go back <b><a href="add_kmlfile.php">Click Here</a></b></p>
  <?php    }
      else{
            $success=move_uploaded_file($_FILES['upfile']['tmp_name'],$destination);
            if($success){
                $query='INSERT INTO kml(kml_name,kml_path)
                    VALUES
                    (
                        "'.  mysql_real_escape_string($kml_name,$db).'",
                        "'.  mysql_real_escape_string($destination,$db).'"
                    )';
                mysql_query($query,$db)or die(mysql_error());
    ?>
<p>Your file has been uploaded successfully to our server.</p>
<p>Thank You !!!</p>
<p>To go back <b><a href="add_kmlfile.php">Click Here</a></b></p>
        <?php
            }
      }
}
?>
<!--<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
        <div>TODO write content</div>
        <?php
        ?>
    </body>
</html>-->

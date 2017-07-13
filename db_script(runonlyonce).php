<?php
require 'config.php';
$query='CREATE TABLE IF NOT EXISTS kml(
    kml_name VARCHAR(45) NOT NULL,
    kml_path VARCHAR(45) NOT NULL,
    PRIMARY KEY(kml_name,kml_path)
)';
mysql_query($query,$db)or die(mysql_error());
$query='CREATE TABLE IF NOT EXISTS user(
    username VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL,
    PRIMARY KEY(username,password)
)';
mysql_query($query,$db)or die(mysql_error());
$query='CREATE TABLE IF NOT EXISTS zones(
    zone_name VARCHAR(45) NOT NULL,
    zone_kml VARCHAR(450) NOT NULL,
    PRIMARY KEY(zone_name,zone_kml)
)';
mysql_query($query,$db)or die(mysql_error());
$query='CREATE TABLE IF NOT EXISTS prabhags(
    zone_name VARCHAR(45) NOT NULL,
    prabhag_name VARCHAR(45) NOT NULL,
    prabhag_kml VARCHAR(450) NOT NULL,
    PRIMARY KEY(prabhag_name,prabhag_kml)
)';
mysql_query($query,$db)or die(mysql_error());
$query='CREATE TABLE IF NOT EXISTS layers(
    zone_prabhag_name VARCHAR(45) NOT NULL,
    layer_name VARCHAR(45) NOT NULL,
    layer_kml VARCHAR(450) NOT NULL,
    PRIMARY KEY(layer_name,layer_kml)
)';
mysql_query($query,$db)or die(mysql_error());
?>
<!DOCTYPE html>
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
</html>

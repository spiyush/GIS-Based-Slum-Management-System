<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="css/layout.css">
    </head>
<?php
session_start();
include('config.php');
if(isset($_POST['zone_head_value'])&&$_POST['zone_head_value']=='zones'){
    $table_name=$_POST['zone_head_value'];
    $query='SELECT * FROM '.$table_name.' ORDER BY zone_name ASC';
    $result=  mysql_query($query,$db)or die(mysql_error());
    $num=  mysql_num_rows($result);
    $i=0;
    while($i<$num){
        $zone_name=  mysql_result($result, $i, 'zone_name');
        $zone_kml=  mysql_result($result, $i, 'zone_kml');
        $zone_id='zone'.$i;
        $zone_div='zone-div'.$i;
        ?>
<p><input type="radio" id="<?php echo $zone_id?>" value="<?php echo $zone_kml?>" name="zones"><?php echo $zone_name?></p>
<div id="<?php echo $zone_div?>"></div>
        <?php
        $i++;
    }
}
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
if(isset($_POST['zone-sub'])){
    ?><div id=prabhags> <?php
    $zone=$_POST['zone-sub'];
    $split=  str_split($zone);
    $zone_name=$split[0].$split[1].$split[2].$split[3].' '.$split[4];
    $table_name='prabhags';
    $query='SELECT * FROM '.$table_name.' WHERE zone_name="'.  mysql_real_escape_string($zone_name).'"';
    $result=  mysql_query($query,$db)or die(mysql_error());
    $num=  mysql_num_rows($result);
    $i=0;
    while($i<$num){
        $prabhag_name=  mysql_result($result, $i, 'prabhag_name');
        $prabhag_kml=  mysql_result($result, $i, 'prabhag_kml');
        $prabhag_id=$zone.'prabhag'.$i;
        $prabhag_div=$zone.'prabhag'.$i;
        ?>
<p><input type="radio" id="<?php echo $prabhag_id?>" value="<?php echo $prabhag_kml?>" name="prabhag"><?php echo $prabhag_name?></p>
        <?php
        $i++;
    }
    if($num==0){
        ?><div id="<?php echo $prabhag_div?>"><p>NO Prabhags available for the <?php echo $zone_name?></p></div><?php
    }
    ?> </div> <?php
}
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
if(isset($_POST['prabhag-sub'])){
    ?><div id=prabhags> <?php
    $prabhag=$_POST['prabhag-sub'];
    $table_name='layers';
    $query='SELECT * FROM '.$table_name.' WHERE zone_prabhag_name="'.  mysql_real_escape_string($prabhag).'"';
    $result=  mysql_query($query,$db)or die(mysql_error());
    $num=  mysql_num_rows($result);
    $i=0;
    $split=  str_split($prabhag);
    $prabhag_name=$split[0].$split[1].$split[2].$split[3].$split[4].' '.$split[5].$split[6].$split[7].$split[8].$split[9].$split[10].$split[11].' '.$split[12]+1;?>
<p><?php echo $prabhag_name?></p>
<?php    while($i<$num){
        $layer_name=  mysql_result($result, $i, 'layer_name');
        $layer_kml=  mysql_result($result, $i, 'layer_kml');
        $layer_id=$prabhag.'layer'.$i;
        $layer_div=$prabhag.'layer'.$i;
        ?>
<p><input type="radio" id="<?php echo $layer_id?>" value="<?php echo $layer_kml?>" name="layers"><?php echo $layer_name?></p>
        <?php
        $i++;
    }
    if($num==0){
        ?><div id="<?php echo $layer_div?>"><p>NO layers available for the <?php echo $prabhag?></p></div><?php
    }
    ?> </div> <?php
}
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************

?>
<!DOCTYPE html>
    <body>
        <div></div>
        <?php
        ?>
<script type="text/javascript" src="js/jquery-1.8.0.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.8.23.custom.min.js"></script>
<script type="text/javascript" src="js/user.js"></script>
    </body>
</html>

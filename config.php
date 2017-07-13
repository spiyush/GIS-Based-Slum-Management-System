<?php
	define('HOSTNAME', 'localhost');
	define('USERNAME', 'root');
	define('PASSWORD', '');
	define('DATABASE', 'nagpurgis');
	$db = mysql_connect(HOSTNAME, USERNAME, PASSWORD)or die ('Unable to connect. Check your connection parameters.');
        mysql_select_db(DATABASE, $db);
	mysql_query("set names 'utf8'",$db);
?>
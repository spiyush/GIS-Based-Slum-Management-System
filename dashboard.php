<?php
session_start();
if(isset($_SESSION['login_user'])){$myusername=$_SESSION['login_user'];}else{header('location:index.php');}?>
<!doctype html>
<head>
	<title>WELCOME</title>
	<meta name="description" content="GIS based Slum Management System">
	<meta name="author" content="">
	<link rel="shortcut icon" href="favicon.ico" />
	<!-- Layout Styles -->
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/grid.css">
	<link rel="stylesheet" href="css/layout.css">
	<!-- Icon Styles -->
	<link rel="stylesheet" href="css/icons.css">
	<link rel="stylesheet" href="css/fonts/font-awesome.css">
	<link rel="stylesheet" href="css/print-invoice.css">
	<!-- Typographics -->
	<link rel="stylesheet" href="css/typographics.css">
	<!-- Responsive Design -->
	<link rel="stylesheet" href="css/media-queries.css">
	<!-- Bad IE Styles -->
	<link rel="stylesheet" href="css/ie-fixes.css">
	<!-- The Scripts -->
	<!-- ----------- -->
	<script type="text/javascript">
		window.WebFontConfig = {
			google: { families: [ 'PT Sans:400,700' ] },
			active: function(){ $(window).trigger('fontsloaded') }
		};
	</script>
	<script defer async src="https://ajax.googleapis.com/ajax/libs/webfont/1.0.28/webfont.js"></script>
	<script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.2.js"><\/script>')</script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.21/jquery-ui.js"></script>
	<script>window.jQuery.ui || document.write('<script src="js/libs/jquery-ui-1.8.21.js"><\/script>')</script>
<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=ABQIAAAAku8DcWMwO9f8YVy4Qbom3RSmOB7sRPneGnHdBjmMnq4YTUhpZxQLtjgcKvFYOImH-uVUqU8bi4sEOQ" type="text/javascript"></script>
<link type="text/css" rel="stylesheet" href="/stylesheets/display_kml.css" />
</head>
<body onLoad="load()" onUnload="GUnload()">
	<!----------------------->
	<!-- Some dialogs etc. -->
	<!-- The loading box -->
   <div id="loading-overlay"></div>
	<div id="loading">
		<span>Loading...</span>
   </div>-->
	<!-- End of loading box -->
	<!-- The page begins -->
	<!--------------------------------->
	<!-- The toolbar at the top -->
<style>
#head{font-size: 3.5em;color:#ffff00; padding: 5px 5px 5px 5px; text-align: center;}
</style>
	<section id="toolbar"><div id="head">SLUM MANAGEMENT SYSTEM</div><!-- End of .container_12 --></section><!-- End of #toolbar -->
	<!-- The header containing the logo -->
	<header class="container_12">
	</header><!-- End of header -->
<aside>
    <div class="top">
<!-- Navigation -->
<nav>
<ul class="collapsible accordion">
        <li class="current"><a href="dashboard.php"><img src="img/icons/packs/fugue/16x16/dashboard.png" alt="" height=40 width=40>WELCOME</a></li>
        <li ><a href="gis.php"><img src="img/icons/packs/fugue/16x16/chart.png" alt="" height=20 width=20>VIEW GIS MAP</a></li>
</ul>
</nav><!-- End of nav -->
</div><!-- End of .top -->
</aside><!-- End of sidebar -->

<section id="content" class="container_12 clearfix" data-sort=true>
    <h1>GIS Dashboard</h1>
    <div class="grid_12">
        <div class="box">
            <div class="content">
                <p><center>Hello <?php echo $myusername?></center></p>
                <p><center>This system is designed to capture, store, manipulate, analyze, manage and present all types of geographical data
        This term includes the total data collection regarding slum, analysis and mapping of the data and providing an output regarding the rehabilitation of that Slum.</center></p>
            </div><!-- End of .content -->
        </div><!-- End of .box -->
    </div>
</section><!-- End of #content -->
<section id="content" class="container_13 clearfix">
</section><!-- End of #content -->
	<!-- The footer -->
    <footer class="container_12">
        <span class="grid_6">
<p>Department Of Computer Science.<br></p>
<p>A project by:<b>Piyiush Moon </b></p>
        </span>
    </footer><!-- End of footer -->
<script type="text/javascript" src="js/user.js"></script>
</body>
</html>

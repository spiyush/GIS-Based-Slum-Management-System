<?php?>
 <!doctype html>
 <html>
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
	<!--[if IE 8]><link rel="stylesheet" href="css/fonts/font-awesome-ie7.css"><![endif]-->
	<!-- OPTIONAL: Print Stylesheet for Invoice -->
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

<body>
	<!--------------------------------->
	<!-- Now, the page itself begins -->
	<!--------------------------------->

	<!-- The toolbar at the top -->
	<style>
#head{font-size: 2.4em;color:#ff0000; padding: 5px 5px 5px 5px; text-align: center;}
</style>
	<section id="toolbar"><div id="head">SLUM MANAGEMENT SYSTEM</div><!-- End of .container_12 --></section><!-- End of #toolbar -->
	<!-- The header containing the logo -->
	<header class="container_12">
	</header><!-- End of header -->
	<!-- The container of the sidebar and content box -->
<aside>
    <div class="top">
<!-- Navigation -->
<nav>
<ul class="collapsible accordion">
        <li ><a href="dashboard1.php"><img src="img/icons/packs/fugue/16x16/dashboard.png" alt="" height=16 width=16>WELCOME</a></li>
        <li class="current"><a href="add_kmlfile1.php"><img src="img/icons/packs/fugue/16x16/application-form.png" alt="" height=16 width=16>ADD NEW DATA</a></li>
    </ul>
</nav><!-- End of nav -->
</div><!-- End of .top -->
</aside><!-- End of sidebar -->
    <section id="content" class="container_12 clearfix" data-sort=true>
        <div class="grid_12">
<form id="upload-table" action="sub_kml.php" method="post" enctype="multipart/form-data"  >
            <p style="text-align:center;" id="upload"><b>Upload KML</b></p>
            <p style="text-align:center;" id="f1_upload_form">Project KML Name: <input type="text" name="projectname" id="projectname"></p>
            <div align="center">
                <p>File: <input name="upfile" type="file" size="20"></p>
                <p><input type="submit" name="submitBtn" class="sbtn" value="Upload"> </p>
            </div>
            <iframe id="upload_target" name="upload_target" src="#" style="width:0;height:0;border:0px solid #fff;"></iframe>
</form>
        </div>
    </section><!-- End of #content -->
	</div><!-- End of #main -->
	<!-- The footer -->
<footer class="container_12">
        <span style="text-align:right;" class="grid_13">
Department Of Computer Science.
A project by:
<p><b>Piyush Moon</b></p>
        </span>
    </footer><!-- End of footer -->
</body>
</html>

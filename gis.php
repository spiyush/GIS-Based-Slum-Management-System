<?php
//include('config.php');
//include('chklogin.php');
 ?>
<!doctype html>
<head>
	<title>GIS MAPS</title>
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
        <!--<script type="text/javascript" src="js/user.js"></script>-->
	<script type="text/javascript">
		window.WebFontConfig = {
			google: { families: [ 'PT Sans:400,700' ] },
			active: function(){ $(window).trigger('fontsloaded') }
		};
	</script>
	<script defer async src="https://ajax.googleapis.com/ajax/libs/webfont/1.0.28/webfont.js"></script>
<!--	<script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.2.js"><\/script>')</script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.21/jquery-ui.js"></script>
	<script>window.jQuery.ui || document.write('<script src="js/libs/jquery-ui-1.8.21.js"><\/script>')</script>-->
<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=ABQIAAAAku8DcWMwO9f8YVy4Qbom3RSmOB7sRPneGnHdBjmMnq4YTUhpZxQLtjgcKvFYOImH-uVUqU8bi4sEOQ" type="text/javascript"></script>
<link type="text/css" rel="stylesheet" href="/stylesheets/display_kml.css" />
<script type="text/javascript">
var map;
var serverv="http://amittiwari.gofreeserve.com/NAGPURmain.kmz";
var author_value =serverv;
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map"));
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207));
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}

//]]>
</script>
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
        <li ><a href="index.php"><img src="img/icons/packs/fugue/16x16/dashboard.png" alt="" height=40 width=40>WELCOME</a></li>
        <li class="current"><a href="gis.php"><img src="img/icons/packs/fugue/16x16/chart.png" alt="" height=20 width=20>VIEW GIS MAP</a></li>
</ul>
    <p><a id="zone-head">ZONES</a></p>
    <div id="zone-sub-div"></div>
</nav><!-- End of nav -->
</div><!-- End of .top -->
</aside><!-- End of sidebar -->

<section id="content" class="container_12 clearfix" data-sort=true>
    <div class="grid_12">
        <div class="box">
            <div class="content">
                <div class='map_window'>
                    <input id="lat" name="lat" type="hidden" value="41.875696" />
                    <input id="long" name="long" type="hidden" value="-87.624207" />
                    <input id="zoom_level" name="zoom_level" type="hidden" value="10" />
                    <div id="map" style="width: 100%; height: 550px; border: 1px solid black;"></div>
                </div>
            </div><!-- End of .content -->
        </div><!-- End of .box -->
    </div>
</section><!-- End of #content -->
<section id="content" class="container_13 clearfix">
    <div id="layer-div"></div>
</section><!-- End of #content -->
	<!-- The footer -->
    <footer >
<p>Department Of Computer Science.<br></p>
<p>A project by:<b>Piyush Moon</b></p>
    </footer><!-- End of footer -->
    <script type="text/javascript" src="js/jquery-1.8.0.js"></script>
    <script type="text/javascript" src="js/jquery-ui-1.8.23.custom.min.js"></script>
    <script type="text/javascript" src="js/user.js"></script>
</body>
</html>

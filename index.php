<?php
session_start();
if(isset($_SESSION['login_user'])&&isset($_SESSION['level'])&&isset($_SESSION['level'])=="user"){
    header('location:dashboard.php');
}elseif(isset($_SESSION['login_user'])&&isset($_SESSION['level'])&&isset($_SESSION['level'])=="admin"){
    header('location:dashboard1.php');
}
?>
<!doctype html>
<head>
	<title>HOME</title>
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
<body class=login>
	<header class="container_12">
		<div class="container" align="center">
                        <section id="toolbar"><div id="head">SLUM MANAGEMENT SYSTEM</div></section>
                        <a href="gis.php"><img alt="Slum" width="210" height="80"></a>
		</div><!-- End of .container -->
	</header><!-- End of header -->
	<section id="login" class="container_12 clearfix">
		<form method="post" class="box validate" action="chklogin.php" name="myform2">
			<div class="header">
				<h2><span class="icon icon-lock"></span>Login Portal</h2>
			</div>
			<div class="content">
				<!-- Login messages -->
				<div class="form-box">
					<div class="row">
						<label for="login_name">
							<strong>Username</strong>
							<small>Login-id</small>
						</label>
						<div>
							<input tabindex=1 type="text" class="required noerror" name="username" placeholder="Username" required  id=login_name />
						</div>
					</div>
					<br/>
					<div class="row">
						<label for="login_pw">
							<strong>Password</strong>
						</label>
						<div>
							<input tabindex=2 type="password" class="required noerror" name="password" placeholder="Password" id=login_pw />
						</div>
					</div>
					
				</div><!-- End of .form-box -->
			</div><!-- End of .content -->
			<div class="actions">
					<input tabindex=3 type="submit" value="LOGIN" name="login_btn" />
                                        <p style="text-align: right;">Not registered??</p>
                                        <p style="text-align: right;"><a href="signup.php">SIGN UP</a></p>
			</div><!-- End of .actions -->
		</form><!-- End of form -->
	</section>
        <script type="text/javascript" src="js/user.js"></script>
</body>
</html>
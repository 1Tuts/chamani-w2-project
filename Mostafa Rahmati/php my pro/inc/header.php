<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<title>new intro my project</title>
	<link rel="stylesheet" type="text/css" href="reset.css">
	<link rel="stylesheet" type="text/css" href="lightbox.css">
	<link rel="stylesheet" type="text/css" href="style-intro.css">
	<link rel="stylesheet" type="text/css" href="style-page.css">
	<!--[if lte IE 8]><link rel="stylesheet" type="text/css" href="stupid-ie.css"><![endif]-->
	<script type="text/javascript" src="./js/jquery.js"></script>
	<!--[if !IE]> -->
		<script type="text/javascript">
			$(function(){
				$('.visible .loading').animate({'width':'980px','height':'300px'},400);
			});
			$(window).load(function(){
				$('#preload').removeClass('visible').addClass('invisible');
				$('.invisible .loading').animate({'width':'0px','height':'0px','opacity':'0.3'},500,null,
					function(){
						$('.invisible').fadeOut(800,null,function(){
							$('.invisible').css({'display':'none'});
						});
					});
			});
		</script>
	<!-- <![endif]-->
</head>
<body>
<!-- ///////////////////////////////////// Div Loading ///////////////////////////////////// -->
	<div id="preload" class="visible">
		<div class="loading">
			<div class="swf">
				<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="280" height="60">
	  				<param name=movie value="swf/loading.swf" />
	  				<param name="wmode" value="transparent" />
	  				<param name="play" VALUE="true" />
	  				<param name="loop" VALUE="true" />
	  				<param name="menu" value="false" />
	  				<param name="quality" value="best" />
	  				<embed src="swf/loading.swf" quality="best" wmode="transparent" menu="false" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="280" height="60">
	  				</embed>
				</object>
			</div>
			<p>L o a d i n g . . .</p>
		</div>
	</div><!-- ///// End Div Loading ///// -->
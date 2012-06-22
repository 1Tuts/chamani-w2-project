$(function(){
/* /////////////////////////////////// Start Top jq /////////////////////////////////// */
	var button = $('.circle-three .button div');
	var top    = $('.top');

	top.mouseover(function(){
		$(this).stop().animate({'top':'-290px'},500,'easeOutBounce');
		 button.stop().animate({'height':'92px','display':'block'},400,'easeInOutCirc');
		$('.text2').stop().animate({'opacity': '0'},300,null,function(){
			$('.text2').css({'display':'none'});
		});
		$('.text').stop().animate({'opacity': '1'},300);
	});
	top.mouseout(function(){
		$(this).stop().animate({'top':'-440px'},800,'easeInOutElastic');
		button.stop().animate({'height':'0','display':'none'},300,'easeInOutCirc',function(){
			$('.text2').stop().animate({'opacity': '1','display':'block'},300);
		});
	});

	$(".fa ,.en ,.about").mouseover(function(){
		top.find('p#'+$(this).attr("class")).css({'display':'inline-block'});
		top.find('p#'+$(this).attr("class")).stop().animate({'opacity': '1'},800);
	});
	$(".fa ,.en ,.about").mouseout(function(){
		top.find('p#'+$(this).attr("class")).stop().animate({'opacity': '0'},50,null,function(){
			top.find('p#'+$(this).attr("class")).css({'display':'none'});
		});
	});	
/* /////////////////////////////////// Start video jq /////////////////////////////////// */
	
	var start_intro = $('.start-intro');
	var close_video = $('.close-video');
	var myvideo 	= document.getElementById("myvideo");//why?->because myvideo.pause() is in javaScript :-?
	var overlay 	= $('.overlay');
	var video 		= $('.video');
	start_intro.click(function(){
		overlay.css({'display' : 'block'});
		overlay.stop().animate({'opacity' : '1'},300,null,function(){
			video.css({'display' : 'block'});
			video.stop().animate({'opacity' : '1'},500,null,function(){
				$(this).stop().animate({'height' : '339px'},400);
				video.find('#videoContent').css({'display' : 'block'});
				video.find('#videoContent').stop().animate({'opacity' : '1'},700,null,function(){
					close_video.css({'display':'block'});
					close_video.css({'opacity':'1'});
					close_video.stop().animate({'height' : '65px'},700,'easeOutBounce');
				});
			});
		});
	});
	function hideWin(){
		myvideo.pause();
		$('.animate').stop().animate({'opacity' : '0'},500,null,function(){
			overlay.stop().animate({'opacity' : '0'},300,null,function(){
				close_video.stop().animate({'height' : '22px'},1);
				close_video.css({'display':'none'});
				video.find('#videoContent').css({'display' : 'none'});
				video.stop().animate({'height' : '30px'},1);
				video.css({'display' : 'none'});
				overlay.css({'display' : 'none'});
			});
		});
	}
	close_video.find('.close').click(function(){
		hideWin();
	});
	$(document).keydown(function(e){
		((e.keyCode ? e.keyCode : e.which)=="27")&&hideWin();
	});

/* /////////////////////////////////// Start page fa /////////////////////////////////// */
	$("#home-btn,#product-btn,#gallery-btn,#contactus-btn").click(function(){
		switch($(this).attr("id")){
			case 'home-btn':
				$(".scroll .home_main").slideto({highlight: false,slide_duration: 2000});
				break;
			case 'product-btn':
				$(".scroll .product_main").slideto({highlight: false,slide_duration: 2000});
				break;
			case 'gallery-btn':
				$(".scroll .gallery_main").slideto({highlight: false,slide_duration: 2000});
				break;
			default:
				$(".scroll .contactus_main").slideto({highlight: false,slide_duration: 2000});
		}
	});
});/* end function */
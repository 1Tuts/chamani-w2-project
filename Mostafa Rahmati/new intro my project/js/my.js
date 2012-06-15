$(function(){
/* /////////////////////////////////// Start Top jq /////////////////////////////////// */
	var top = $('.top');
	var button = $('.circle-three .button div');

	top.mouseover(function(){
		$(this).stop().animate({'top':'-290px'},500,'easeOutBounce')
		button.css({'display':'block'});
		button.stop().animate({'height':'92px'},400,'easeInOutCirc');
		$('.text2').stop().animate({'opacity': '0'},300,null,function(){
			$('.text2').css({'display':'none'});
		});
		$('.text').stop().animate({'opacity': '1'},300);
	});
	top.mouseout(function(){
		$(this).stop().animate({'top':'-440px'},800,'easeInOutElastic');
		button.stop().animate({'height':'0'},300,'easeInOutCirc',function(){
			button.css({'display':'none'});
			$('.text2').css({'display':'block'});
			$('.text2').stop().animate({'opacity': '1'},300);
		});
	});
	top.find('p#fa').css({'opacity':'0'});
	top.find('p#about').css({'opacity':'0'});
	top.find('p#en').css({'opacity':'0'});

	top.find('.fa').mouseover(function(){
		top.find('p#fa').css({'display':'inline-block'});
		top.find('p#fa').stop().animate({'opacity': '1'},800);
	});
	top.find('.fa').mouseout(function(){
		top.find('p#fa').stop().animate({'opacity': '0'},50,null,function(){
			top.find('p#fa').css({'display':'none'});
		});
	});
	top.find('.about').mouseover(function(){
		top.find('p#about').css({'display':'inline-block'});
		top.find('p#about').stop().animate({'opacity': '1'},800);
	});
	top.find('.about').mouseout(function(){
		top.find('p#about').stop().animate({'opacity': '0'},50,null,function(){
			top.find('p#about').css({'display':'none'});
		});
	});
	top.find('.en').mouseover(function(){
		top.find('p#en').css({'display':'inline-block'});
		top.find('p#en').stop().animate({'opacity': '1'},800);
	});
	top.find('.en').mouseout(function(){
		top.find('p#en').stop().animate({'opacity': '0'},50,null,function(){
			top.find('p#en').css({'display':'none'});
		});
	});

	
/* /////////////////////////////////// Start video jq /////////////////////////////////// */
	var video = $('.video');
	var start_intro = $('.start-intro');
	var close_video = $('.close-video')
	var overlay = $('.overlay');
	var myVideo=document.getElementById("myvideo"); 

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
	function act(){
		myVideo.pause();
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
		act();
	});
	$(document).keydown(function(e){
		if ((e.keyCode ? e.keyCode : e.which)=="27"){
			act();
		}
	});

	
});/* end function */

$(function(){

	var video = $('.video');
	var start_intro = $('.start-intro');
	var close_video = $('.close-video')
	var overlay = $('.overlay');
	var myVideo=document.getElementById("myvideo"); 
	
	close_video.find('.close').click(function(){
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
	});


});/* end function */

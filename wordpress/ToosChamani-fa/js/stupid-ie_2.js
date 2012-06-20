$(function(){

	var overlay = $('.overlay');
	var close_old = $('.close-old')

	overlay.css({'display' : 'block'});
	overlay.stop().animate({'opacity' : '1'},500,null,function(){
		$('.old-browser').css({'display' : 'block'});
		$('.old-browser').stop().animate({'height':'410px'},400);
	});
	close_old.click(function(){
		$('.old-browser').stop().animate({'height':'30px'},400,null,function(){
			$('.old-browser').css({'display' : 'none'});
			overlay.css({'display' : 'none','opacity':'0'});
		});
	});

});/* end function */

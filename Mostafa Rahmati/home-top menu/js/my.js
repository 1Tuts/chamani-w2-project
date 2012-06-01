$(function(){

	var top = $('.top');
	var button = $('.circle-three .button div');

	top.mouseover(function(){
		$(this).stop().animate({'margin-top':'-290px'},500,'easeOutBounce')
		button.css({'display':'block'});
		button.stop().animate({'height':'92px'},400,'easeInOutCirc');
		$('.text2').stop().animate({'opacity': '0'},300,null,function(){
			$('.text2').css({'display':'none'});
		});
		$('.text').stop().animate({'opacity': '1'},300);
	});
	top.mouseout(function(){
		$(this).stop().animate({'margin-top':'-440px'},800,'easeInOutElastic');
		button.stop().animate({'height':'0'},300,'easeInOutCirc',function(){
			button.css({'display':'none'});
			$('.text2').css({'display':'block'});
			$('.text2').stop().animate({'opacity': '1'},300);
		});
	});
	top.find('.fa').mouseover(function(){
		top.find('p#fa').css({'display':'inline-block'});
	});
	top.find('.fa').mouseout(function(){
		top.find('p#fa').css({'display':'none'});
	});
	top.find('.about').mouseover(function(){
		top.find('p#about').css({'display':'inline-block'});
	});
	top.find('.about').mouseout(function(){
		top.find('p#about').css({'display':'none'});
	});
	top.find('.en').mouseover(function(){
		top.find('p#en').css({'display':'inline-block'});
	});
	top.find('.en').mouseout(function(){
		top.find('p#en').css({'display':'none'});
	});


});/* end function */

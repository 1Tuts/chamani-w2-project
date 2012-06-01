/*window.onload = function (){
	var bck = document.getElementsByTagName("button").item(0);
	var nxt = document.getElementsByTagName("button").item(1);
	var scrol = document.getElementsByClassName("scroll").item(0);
	bck.onclick = function(){
		scrol.style.left+=0+"px";
	}
	nxt.onclick = function(){
		scrol.style.left+=-1900+"px";
	}	
}
*/
$(function(){

$("div.next button").click(function(){
	$(".scroll").animate({
		'left':'-1900px'		
		},700,function(){
			$('.veiw').css('overflow','scroll');
			$(".scroll .lft").animate({
			'height':'1280px'
			},2000);
	});
});

$("div.back button").click(function()
{
	$(".scroll").animate({
		'left':'0'		
		},700,function(){
			$('.veiw').css('overflow','scroll');
			$(".scroll .rgt").animate({
			'height':'1280px'
			},2000);
	});
});

});

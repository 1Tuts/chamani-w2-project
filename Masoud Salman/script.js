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

$("div.back button").click(function()
{
	$(".scroll").animate({
		'left':'0'		
		},700,function(){
			$(".scroll .rgt,.veiw").animate({
			'height':'1280px'
			},2000);
	});
});
$("div.next button").click(function(){
	$(".scroll").animate({
		'left':'-1900px'		
		},700,function(){
			$(".scroll .lft,.veiw").animate({
			'height':'1280px'
			},2000);
	});
});

});

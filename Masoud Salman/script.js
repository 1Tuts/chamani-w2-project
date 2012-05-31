window.onload = function (){
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
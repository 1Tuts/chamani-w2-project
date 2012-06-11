// JavaScript Document

var pageSize=1290;

window.onload=function(){
	
	var divscrl3=document.getElementsByClassName('Pages').item(0).getElementsByClassName('Scrool3').item(0);
	var divscrl6=document.getElementsByClassName('FrPage').item(0).getElementsByClassName('Scrool6').item(0);
	

	
	var HomeLinks=document.getElementsByClassName('Menu').item(0).getElementsByClassName('SiteMenu').item(0).getElementsByTagName('a');
	
	HomeLinks.item(0).onclick=function(){divscrl6.style.top=0+'px';}
	HomeLinks.item(1).onclick=function(){divscrl6.style.top=-680+'px';}
	HomeLinks.item(2).onclick=function(){divscrl6.style.top=-1363+'px';}
	HomeLinks.item(3).onclick=function(){divscrl6.style.top=-2044+'px';}
	HomeLinks.item(4).onclick=function(){divscrl6.style.top=-2724+'px';}
	HomeLinks.item(5).onclick=function(){divscrl6.style.top=-3410+'px';}

	var PortfolioLinks=document.getElementsByClassName('Menu').item(1).getElementsByClassName('SiteMenu').item(0).getElementsByTagName('a');

	PortfolioLinks.item(0).onclick=function(){divscrl6.style.top=0+'px';}
	PortfolioLinks.item(1).onclick=function(){divscrl6.style.top=-680+'px';}
	PortfolioLinks.item(2).onclick=function(){divscrl6.style.top=-1363+'px';}
	PortfolioLinks.item(3).onclick=function(){divscrl6.style.top=-2044+'px';}
	PortfolioLinks.item(4).onclick=function(){divscrl6.style.top=-2724+'px';}
	PortfolioLinks.item(5).onclick=function(){divscrl6.style.top=-3410+'px';}

	var GalleryLinks=document.getElementsByClassName('Menu').item(2).getElementsByClassName('SiteMenu').item(0).getElementsByTagName('a');
	
	GalleryLinks.item(0).onclick=function(){divscrl6.style.top=0+'px';}
	GalleryLinks.item(1).onclick=function(){divscrl6.style.top=-680+'px';}
	GalleryLinks.item(2).onclick=function(){divscrl6.style.top=-1363+'px';}
	GalleryLinks.item(3).onclick=function(){divscrl6.style.top=-2044+'px';}
	GalleryLinks.item(4).onclick=function(){divscrl6.style.top=-2724+'px';}
	GalleryLinks.item(5).onclick=function(){divscrl6.style.top=-3410+'px';}

	var AboutLinks=document.getElementsByClassName('Menu').item(3).getElementsByClassName('SiteMenu').item(0).getElementsByTagName('a');

	AboutLinks.item(0).onclick=function(){divscrl6.style.top=0+'px';}
	AboutLinks.item(1).onclick=function(){divscrl6.style.top=-680+'px';}
	AboutLinks.item(2).onclick=function(){divscrl6.style.top=-1363+'px';}
	AboutLinks.item(3).onclick=function(){divscrl6.style.top=-2044+'px';}
	AboutLinks.item(4).onclick=function(){divscrl6.style.top=-2724+'px';}
	AboutLinks.item(5).onclick=function(){divscrl6.style.top=-3410+'px';}


var ContactLinks=document.getElementsByClassName('Menu').item(4).getElementsByClassName('SiteMenu').item(0).getElementsByTagName('a');

	ContactLinks.item(0).onclick=function(){divscrl6.style.top=0+'px';}
	ContactLinks.item(1).onclick=function(){divscrl6.style.top=-680+'px';}
	ContactLinks.item(2).onclick=function(){divscrl6.style.top=-1363+'px';}
	ContactLinks.item(3).onclick=function(){divscrl6.style.top=-2044+'px';}
	ContactLinks.item(4).onclick=function(){divscrl6.style.top=-2724+'px';}
	ContactLinks.item(5).onclick=function(){divscrl6.style.top=-3410+'px';}


var BlogLinks=document.getElementsByClassName('Menu').item(5).getElementsByClassName('SiteMenu').item(0).getElementsByTagName('a');

	BlogLinks.item(0).onclick=function(){divscrl6.style.top=0+'px';}
	BlogLinks.item(1).onclick=function(){divscrl6.style.top=-680+'px';}
	BlogLinks.item(2).onclick=function(){divscrl6.style.top=-1363+'px';}
	BlogLinks.item(3).onclick=function(){divscrl6.style.top=-2044+'px';}
	BlogLinks.item(4).onclick=function(){divscrl6.style.top=-2724+'px';}
	BlogLinks.item(5).onclick=function(){divscrl6.style.top=-3410+'px';}

	
goEnPage=function(){
	
	divscrl3.style.left=0+'px';
	
	}
	
	goFrPage=function(){
		
		divscrl3.style.left=-2580+'px';
		
		}
	
	
	}//load




var isActive = false;

$(".menu").on("click",function(){
		if(isActive){
			$(this).removeClass("active");
			$("body").removeClass("menu-open");
		} else{
			$(this).addClass("active");
			$("body").addClass("menu-open");
		}

		isActive = !isActive;
});













var i = 0;

var images = ["images/homeimages/spiral.jpg", 
             "images/homeimages/wood.jpg","images/homeimages/cardboard2.jpg","images/homeimages/pinewood.jpg", "images/homeimages/clothcut.jpg", 
             "images/homeimages/ricebag.jpg", "images/homeimages/burlap.jpg", "images/homeimages/green.jpg"];

var time = 1500;

function changeImg(){
	document.slide.src = images[i];
	if(i<images.length-1){
		i++ ;

	}else{
		i = 0;
	}


	setTimeout("changeImg()", time);
}


window.onload = changeImg;
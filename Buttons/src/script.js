console.clear()

var londonModel = document.querySelector('#london'),
		kyivModel = document.querySelector('#kyiv'),
		rotateBtn = $(".rotate"),
		scaleBtn = $(".scale"),
		switchBtn = $(".switch"),
		gotitBtn = $(".gotit"); 


gotitBtn.click(function(){
	gotitBtn.parent().css({
		display: "none"
	});
});


rotateBtn.click(function(){
	if (rotateBtn.hasClass("rotate_fade")){
		londonModel.emit('endRotate');
		kyivModel.emit('endRotate');
		rotateBtn.removeClass("rotate_fade");
	} else {
		londonModel.emit('rotate');
		kyivModel.emit('rotate');
		rotateBtn.addClass("rotate_fade");
	}
});

var scaleFlag = 0,
		kyivFlag = false;

scaleBtn.click(function(){
	if (scaleFlag == 0){
		scaleFlag = 1;
		londonModel.setAttribute("scale", scale="0.55 0.55 0.55");
		kyivModel.setAttribute("scale", scale="0.55 0.55 0.55");
		scaleBtn.addClass("scale_one");
	} else if (scaleFlag == 1) {
		scaleFlag = 2;
		londonModel.setAttribute("scale", scale="0.7 0.7 0.7");
		kyivModel.setAttribute("scale", scale="0.7 0.7 0.7");
		scaleBtn.addClass("scale_two");
		scaleBtn.removeClass("scale_one");
	} else if (scaleFlag == 2) {
		scaleFlag = 0;
		londonModel.setAttribute("scale", scale="0.4 0.4 0.4");
		kyivModel.setAttribute("scale", scale="0.4 0.4 0.4");
		scaleBtn.removeClass("scale_two");
	}
});

switchBtn.click(function(){
	if (kyivFlag == false){
		kyivFlag = true;
		switchBtn.html("London");
		londonModel.setAttribute("visible", false);
		kyivModel.setAttribute("visible", true);
	} else {
		kyivFlag = false
		switchBtn.html("Kyiv");
		londonModel.setAttribute("visible", true);
		kyivModel.setAttribute("visible", false);
	}
});
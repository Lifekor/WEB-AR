console.clear()

var londonModel = document.querySelector('#london'),
	kyivModel = document.querySelector('#kyiv'),
	routeModel = document.querySelector('#route')
	rotateBtn = $(".rotate"),
	scaleBtn = $(".scale"),
	switchBtn = $(".switch"),
	gotitBtn = $(".gotit");
    routeBtn = $(".route")



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
routeBtn.click(function(){
	if (routeBtn.hasClass("route_fade")){
		routeModel.emit('endRoute');
		kyivModel.emit('endRoute');
		routeBtn.removeClass("route_fade");
	} else {
		routeModel.emit('route');
		kyivModel.emit('route');
		routeBtn.addClass("route_fade");
	}
});

var scaleFlag = 0,
	kyivFlag = false;

scaleBtn.click(function(){
	if (scaleFlag == 0){
		scaleFlag = 1;
		londonModel.setAttribute("scale", scale="0.2 0.2 0.2");
		kyivModel.setAttribute("scale", scale="0.2 0.2 0.2");
		scaleBtn.addClass("scale_one");
	} else if (scaleFlag == 1) {
		scaleFlag = 2;
		londonModel.setAttribute("scale", scale="0.3 0.3 0.3");
		kyivModel.setAttribute("scale", scale="0.3 0.3 0.3");
		scaleBtn.addClass("scale_two");
		scaleBtn.removeClass("scale_one");
	} else if (scaleFlag == 2) {
		scaleFlag = 0;
		londonModel.setAttribute("scale", scale="0.1 0.1 0.1");
		kyivModel.setAttribute("scale", scale="0.1 0.1 0.1");
		scaleBtn.removeClass("scale_two");
	}
});

switchBtn.click(function(){
	if (kyivFlag == false){
		kyivFlag = true;
		switchBtn.html("Apartment");
		londonModel.setAttribute("visible", false);
		kyivModel.setAttribute("visible", true);
	} else {
		kyivFlag = false
		switchBtn.html("Logo");
		londonModel.setAttribute("visible", true);
		kyivModel.setAttribute("visible", false);
	}
});
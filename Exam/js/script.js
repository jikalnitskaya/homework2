$(function() {
	var $arrowRight = $('.step_1');
	console.log ($arrowRight);
	$arrowRight.bind('click', slideRight);

	/*var $arrowLeft = $('.arrow_left');
	console.log ($arrowLeft);
	$arrowLeft.on('click', slideLeft);*/


    function slideRight (e) {
    	//e.stopPropagation();
    	//e.preventDefault();
        var target = e.target;
        console.log (target);
	    var stepContainer = $('.step_1');
	    console.log (stepContainer);
        //var $background = $stepContainer.css('background');
        //console.log ($background);
        //var stepItem = 
	    var $url = 'url(./img/desctop_images/step_2.png) no-repeat';
	    stepContainer.css("background", $url);
	};

	/*function slideLeft (e) {
    	e.preventDefault();
        var target = e.target;
        console.log (target);
    };*/
});
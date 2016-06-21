$(function() {
	var $arrowRight = $('.arrow_right');
	$arrowRight.on('click', slideRight);

	var $arrowLeft = $('.arrow_left');
	$arrowLeft.on('click', slideLeft);


    function slideRight (e) {
    	//e.stopImmediatePropagation();
    	console.log ("this", this);
    	var i = $arrowRight.attr("data-title");
    	console.log ("i", i);
    	//e.preventDefault();
        var target = e.target;
        console.log ("target", target);
	    var stepContainer = $('.step_1');
	    console.log ("stepContainer", stepContainer);
        //var $background = $stepContainer.css('background');
        //console.log ($background);
        var stepItem = $('.step_item');
        console.log ("stepItem", stepItem);
	    var $url = 'url(./img/desctop_images/step_2.png) no-repeat';
	    stepContainer.css("background", $url);
	};

	function slideLeft (e) {
    	//e.preventDefault();
        var target = e.target;
        console.log ("target", target);
    };
});
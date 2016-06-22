$(function() {
	var $arrowRight = $('.arrow_right');
	$arrowRight.on('click', slideRight);

	var $arrowLeft = $('.arrow_left');
	$arrowLeft.on('click', slideLeft);


    function slideRight () {
    	console.log ("this", this);
        var $target = /*this;/*/$arrowRight;
        console.log ("target", $target);
    	var i = $target.attr("data-title");
        console.log ("i", i);
    		i = ++i;	
    	if (i == 4) {
    		i = 1
    	};
    	console.log ("i", i);
  
	    var stepContainer = $target.parent('div');
	    console.log ("stepContainer", stepContainer);
        var stepItem = $('.step_item');
        //console.log ("stepItem", stepItem);
	    var $url = 'url(./img/desctop_images/step_'+i+'.png) no-repeat';
	    stepContainer.css("background", $url);
	    $target.attr("data-title", i);
	    console.log ("attr", $target.attr("data-title"));
	};

	function slideLeft (e) {
		console.log ("this", this);
    	var $target = $arrowLeft;
        //console.log ("target", $target);
    	var i = $target.attr("data-title");
    	console.log ("i", i);
    		i = --i;	
    	if (i == 0) {
    		i = 3
    	};
    	console.log ("i", i);
  
	    var stepContainer = $target.parent('div');
	    //console.log ("stepContainer", stepContainer);
        var stepItem = $('.step_item');
        //console.log ("stepItem", stepItem);
	    var $url = 'url(./img/desctop_images/step_'+i+'.png) no-repeat';
	    stepContainer.css("background", $url);
	    $target.removeAttr("data-title").attr("data-title", i);
	    console.log ("attr", $target.attr("data-title"));
    };
});
$(function() {
	var $arrowRight = $('.arrow_right');
	$arrowRight.on('click', slideRight);

	var $arrowLeft = $('.arrow_left');
	$arrowLeft.on('click', slideLeft);

	var htmlStep_1 = $(".1").html();
	var htmlStep_2 = $(".2").html();
	var htmlStep_3 = $(".3").html();
	var htmlSteps = [htmlStep_1, htmlStep_2, htmlStep_3];

    function slideRight () {
        var $target = $(this);
    	var i = $target.attr("data-title");
    	i = ++i;	
    	if (i == 4) {
    		i = 1
    	};
  		//меняем бекграунд
  		var stepContainer = $target.parent('div');
	    var $url = 'url(./img/desctop_images/step_'+i+'.png) no-repeat';
	    stepContainer.css("background", $url);
	    //меняем текст
        var nextItem = htmlSteps[i-1];
        var stepItem = $target.next('.step_item').html(nextItem);
        //меняем номер аттрибута
	    $target.attr("data-title", i);
	};

	function slideLeft (e) {
    	var $target = $(this);
    	var i = $target.attr("data-title");
    	i = --i;	
    	if (i == 0) {
    		i = 3
    	};
  
	    //меняем бекграунд
  		var stepContainer = $target.parent('div');
	    var $url = 'url(./img/desctop_images/step_'+i+'.png) no-repeat';
	    stepContainer.css("background", $url);
	    //меняем текст
        var nextItem = htmlSteps[i-1];
        var stepItem = $target.prev('.step_item').html(nextItem);
        //меняем номер аттрибута
	    $target.attr("data-title", i);
    };
});
'use strict';

(function ($){
    $.fn.fancybox = function(){

    	var $link = this;
    	var $body = $('body');
    	var $modal;
    	var $overlay;
    	var $arrowLeft;
    	var $arrowRight;
    	var $close;
    	var $par;
    	var $href;
    	var $title;
    	var $next;
    	var $previous;

    	function showModal (e){
    		var $target = e.target;
    		$par = $($target).parent();
    		$href = $par.attr('href');
    		$title = $par.attr('title');
    		$modal = $('<div class="fancybox_modal"><img src="./'+$href+'"><h1>'+$title+'</h1></div>');
    	    $overlay = $('<div class="fancybox_overlay"></div>');
    	    $arrowLeft = $('<div class="arrow_left"></div>');
    	    $arrowRight = $('<div class="arrow_right"></div>');
    	    $close = $('<div class="close"></div>');
    	    e.preventDefault();
    	    $body.append($overlay);
    	    $body.append($modal);
    	    $body.append($arrowLeft);
    	    $body.append($arrowRight);
    	    $body.append($close);
    	    $overlay.one('click', removeModal);
    	    $close.one('click', removeModal);
    	    $arrowRight.on('click', getNext);
    	    $arrowLeft.on('click', getPrev);
    	};

    	function removeModal (){
    		$modal.remove();
    		$overlay.remove();
    		$arrowLeft.remove();
    		$arrowRight.remove();
    		$close.remove();
    	};

    	function getNext (){
            $next = $($par).next('a');
            $href = $next.attr('href');
            $title = $next.attr('title');
            $modal.remove();
            $modal = $('<div class="fancybox_modal"><img src="./'+$href+'"><h1>'+$title+'</h1></div>');
            $body.append($modal);
            $par = $next;
            $overlay.one('click', removeModal);
    	    $close.one('click', removeModal);
    	};

    	function getPrev (){
            $previous = $($par).prev('a');
            if (!$previous.length) {
            	$previous = $($par).last('a');
            };
            console.log ($previous);
            $href = $previous.attr('href');
            console.log ($href);
            $title = $previous.attr('title');
            $modal.remove();
            $modal = $('<div class="fancybox_modal"><img src="./'+$href+'"><h1>'+$title+'</h1></div>');
            $body.append($modal);
            $par = $previous;
            $overlay.one('click', removeModal);
    	    $close.one('click', removeModal);
    	};

    	$link.on('click', showModal);
    	return this;
    }   	
})(jQuery);
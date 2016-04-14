(function ($){
    $.fn.fancybox = function(){

    	var $link = this;
    	console.log ($link);
    	var $body = $('body');
    	var $modal;
    	var $overlay;

    	function showModal (e){
    		var $target = event.target;
    		console.log ($target);
    		var $parent = $target.parent(a);
    		console.log ($parent);
    		var href = $link.attr('href');
    		var title = $link.attr('title');
    		$modal = $('<div class="fancybox_modal"><img src="./'+href+'"><h1>'+title+'</h1></div>');
    	    $overlay = $('<div class="fancybox_overlay"></div>');
    	    e.preventDefault();
    	    $body.append($overlay);
    	    $body.append($modal);
    	    
    	};

    	function removeModal (){
    		$modal.hide();
    		$overlay.hide();
    	};
//$(this).find('li').each(function(i)
    	$link.on('click', showModal);
    	$overlay.one('click', removeModal);
    	return this;
    }   	
})(jQuery);
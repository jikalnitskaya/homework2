$(function () {
	//changing picture
	var timerId;
	//var $pic = $('.promo').attr('src');
	//console.log ($pic);
	var $img;
	var $pImg = $('.promo');
	$img = $('<img src="img/promo/promo0.jpg" alt="google.com">');
    $pImg.append($img); 
    var i = 1;

    function changeImg (){ 	
		timerId = setInterval (function(){   	
			    $img.remove();
			    $img = $('<img src="img/promo/promo'+i+'.jpg" alt="google.com">');
			    $pImg.append($img);
			    i++;
			    if (i==7) {
			       	i=0;
			    };
			}, 1000);  
	    };
   	changeImg ();
});


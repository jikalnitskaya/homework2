$(function (){
	//смена картинок
	var timerId;
	var $img;
	var $pImg = $('.img');
	$img = $('<img src="img/google0.jpg" alt="google.com">');
    $pImg.append($img); 
    var i = 1;

    function changeImg (){ 	
		timerId = setInterval (function(){   	
		    $img.remove();
		    $img = $('<img src="img/google'+i+'.jpg" alt="google.com">');
		    $pImg.append($img);
		    i++;
		    if (i==25) {
		       	i=0;
		    };
		}, 5000);    
	};
   	changeImg ();
    
    //ф-ция смены внешнего вида 
    function changeView (){
    	clearInterval(timerId);
    	$('#wrapper').removeClass('wrapper').addClass('wrapper_change');
    	$('.img').removeClass('img').addClass('img_change');
        $('img').attr('src', 'img/googlemini.jpg');
        $('.input').removeClass('input').addClass('input_change');
        $('#search').css({'width' : '20%', 
        	'margin-left' : '10px',
            'background' : '#BC8F8F',
            'border' : '2px outset #BC8F8F'});
    };
    $('#in').keypress(function(eventObject){
        changeView();
        //search(); //при отправке запроса при изменении каждой
        // буквы через раз выдается ошибка
    });

    //запрос
    var $input = $('#in').val();
    //var request;

    function search (e) {
    	e && e.preventDefault();
        var url='';
        var $input = $('#in').val();
        $input = $input.replace(' ','+');
        url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=' + $input;
        /*if (request) {
        	request.abort();
        };*/
        /*request = */$.ajax({
            url: url,
            dataType: "jsonp",
            success: function(data) {
                console.log("Here");
                console.log(data);
                var html="";
                $(".result").children().remove();
                var obj=data.responseData.results;
                obj.forEach(function(item, i){
                	html = html+'<h2>'+item.title+'</h2>'+'<p>'+item.content+'</p>'+'<a href="#">'+item.url+'</a>';            
                    $('a').attr('url', item.url);
                });
                $(".result").append(html);
           } ,
            error: function(error) {
                console.log("error");
                console.log(error);
            }/*,
            complete: function(){
                request = 0;
            }*/
        });
    };
    
    $("#search").on("click", search);
    $('form').submit(search);
 
});
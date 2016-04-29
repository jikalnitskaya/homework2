$(function (){
	//смена картинок
	/*var $img; //= $('img').attr('src');
	var $pImg = $('.img');
	$img = $('<img src="img/google0.jpg" alt="google.com">');
    $pImg.append($img); 

    function changeImg (){
	    for (var i=1; i<4; i++) {
		    setInterval (function(){
		        $img.remove();
		        $img = $('<img src="img/google'+i+'.jpg" alt="google.com">');
		        $pImg.append($img);
		        console.log ($img);
		        if (i==2) {
		        	i=0;
		        };
		    }, 5000);
	    };
	    
	};

    //for (var j=0; j<1; j++) {
    	changeImg ();
    	//console.log ($img);
    };*/

    
    //ф-ция смены внешнего вида 
    function changeView (){
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
        /*console.log (eventObject);
        if (eventObject.charCode == 13) {
        	search();
        };*/
    });

    //запрос
    
    function search (e) {
    	e.preventDefault;
        var url='';
        var $input = $('#in').val(); 
        $input = $input.replace(' ','+');
        url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=' + $input;
        console.log(url);
    
        $.ajax({
            url: url,
            dataType: "jsonp",
            success: function(data) {
                console.log("Here");
                console.log(data);
                var result = data.responseData.results[0].content;
                console.log (result);
                var html="";
                $(".wrapResult").children().remove()
                var obj=data.responseData.results;
                obj.forEach(function(item, i){
                    var j=i+1;
                    html = html + "<h2>"+j +". "+item.title +"</h2>" + "<h4>" +item.content+"</h4>"+"<h4>" +item.url+"</h4>"
           
              
            })
            },
            error: function(error) {
                console.log("error");
                console.log(error);
            }
            /*var obj=data.responseData.results;
            var html="";
            $(".wrapResult").children().remove()
            obj.forEach(function(item, i){
             var j=i+1;
            html = html + "<h2>"+j +". "+item.title +"</h2>" + "<h4>" +item.content+"</h4>"+"<h4>" +item.url+"</h4>"
           
              
            })
            $(".wrapResult").append(html)*/
        });
    };
    
    $("#search").on("click", search);
    $('form').submit(search);

    
  

	
});
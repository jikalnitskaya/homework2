$(function (){
     //запрос
    //var $input = $('#in').val();
    //var request;

    function search (e) {
    	e && e.preventDefault();
        var url='';
        //var $input = $('#in').val();
        //$input = $input.replace(' ','+');
        url = 'https://randomuser.me/api/?';
        console.log (url);
        /*if (request) {
        	request.abort();
        };*/
        /*request = */$.ajax({
            url: url,
            dataType: "jsonp",
            success: function(data) {
                console.log("Here");
                console.log(data);
                if (data.responseData==null) {
                    var htmlError = data.responseDetails;
                    console.log (htmlError);
                    //htmlError = '<p class="res">'+htmlError+'</p>';
                    //$('.result').append(htmlError);
                } else {
                    var html="";
                    //$(".result").children().remove();
                    var obj=data.responseData.results;
                    /*obj.forEach(function(item, i){
                        html = html+'<h2>'+item.title+'</h2>'+'<p>'+item.content+'</p>'+'<a href="#">'+item.url+'</a>';            
                        $('a').attr('url', item.url);
                    });
                    $(".result").append(html);*/
                     
                };
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
});
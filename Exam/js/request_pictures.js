$(function (){
	function searchIdeas () {
        //e && e.preventDefault();
        var url='';
        //var $input = $('#in').val();
        //$input = $input.replace(' ','+');
        url = 'https://randomuser.me/api/?results=4';
        console.log (url);
      
        $.ajax({
            url: url,
            dataType: "json",
            success: function(data) {
                console.log("Here");
                console.log(data);
                /*getName(data);
                getPhoto(data);
                getLocation(data);
                renderPartners (userPhoto);*/
                var users = getPartners(data);
        console.log (users);
                renderPartners (users);
                
                /*if (data.responseData==null) {
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
                     
                //};
            },
            error: function(error) {
                console.log("error");
                console.log(error);
            }
        });
    };
    
    $("#idea").on("click", searchIdeas);
});
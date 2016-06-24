$(function (){
	function searchIdeas (e) {
        e && e.preventDefault();
        var url='';
        var $input = $('#input').val();
        //$input = $input.replace(' ','+');
        $input = encodeURIComponent($input);
        //console.log ($input);
        var key = '2810130-69f58e75c3b8596474840dbd3';
        url = "https://pixabay.com/api/?key=" + key + "&q=" + $input + "&order=popular&image_type=photo&per_page=7"+/*"&page="+page +*/"&callback=?";
        //console.log (url);
      
        $.ajax({
            url: url,
            dataType: "json",
            success: function(data) {
                console.log("Here");
                console.log(data);
                //var img = '<img src="'+data.hits[0].webformatURL+'">';
                //$('#req').html(img);
                var src = 'url('+data.hits[0].webformatURL+') no-repeat';
                $('.tile_1').css('background', src);
                $('.tile_1 h3').html(data.hits[0].tags);
                /*getName(data);
                getPhoto(data);
                getLocation(data);
                renderPartners (userPhoto);
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
                    $(".result").append(html);
                     
                //};*/
            },
            error: function(error) {
                console.log("error");
                console.log(error);
            }
        });
    };
    
    $("#idea").on("click", searchIdeas);
});
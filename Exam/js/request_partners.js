$(function (){
     //запрос
    //var $input = $('#in').val();
    //var request;

    function getName(data) {
        var userName = [];
        for (i = 0; i < 4; i++){
            console.log (data.results[i].name.first);
            console.log (data.results[i].name.last);
            var fullName = data.results[i].name.first + '' + data.results[i].name.last;
            console.log (fullName);
            userName.push(fullName);
        };
        return userName;
        console.log (userName);
    };
    
    function search (e) {
        e && e.preventDefault();
        var url='';
        //var $input = $('#in').val();
        //$input = $input.replace(' ','+');
        url = 'https://randomuser.me/api/?results=4';
        console.log (url);
        /*if (request) {
            request.abort();
        };*/
        $.ajax({
            url: url,
            dataType: "json",
            success: function(data) {
                console.log("Here");
                console.log(data);
                return data;
                getName(data);
                console.log (userName);
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
    
    $("#search").on("click", search);

});
$(function (){
    //запрос
    //var $input = $('#in').val();
    //var request;

    /*function getName(data) {
        var userName = [];
        for (i = 0; i < 4; i++){
            var fullName = _.capitalize(data.results[i].name.first) + ' ' + _.capitalize(data.results[i].name.last);
            userName.push(fullName);
        };
        console.log (userName);
        //return userName;
    };

    function getPhoto(data) {
        var userPhoto = [];
        for (i = 0; i < 4; i++){
            userPhoto.push(data.results[i].picture.large);
        };
        console.log (userPhoto);
        return userPhoto;
    };

    function getLocation(data) {
        var userLocation = [];
        for (i = 0; i < 4; i++){
            var fullLocation = _.capitalize(data.results[i].location.city)+', '+_.capitalize(data.results[i].location.state);
            userLocation.push(fullLocation);
        };
        console.log (userLocation);
    };*/

    function getPartners(data) {
        var users = [];
       // _.forEach(data, function(){
        for (var i = 0; i < 4; i++){
            var user[i] = {
                name : _.capitalize(data.results[i].name.first) + ' ' + _.capitalize(data.results[i].name.last),
                photo : data.results[i].picture.large,
                location : _.capitalize(data.results[i].location.city)+', '+_.capitalize(data.results[i].location.state)
            };
            console.log (user[i]);
            return user[i];
        };
        
            user[i].push(users);
            return users;
    //});
        console.log (users);
    };

    /*function renderPartners (userPhoto){
       var tmpl = _.template($('#list_tmpl').html());
       var list = tmpl({data : userPhoto});
       $('.partners_container').html(list);
    };*/

    function search () {
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
                getPartners(data);

                
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
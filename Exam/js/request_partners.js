$(function (){
    var users;
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
//переделать!!!
    function getPartners(data) {
        var users = [];
        var user = {
            name : _.capitalize(data.results[0].name.first) + ' ' + _.capitalize(data.results[0].name.last),
            photo : data.results[0].picture.large,
            location : _.capitalize(data.results[0].location.city)+', '+_.capitalize(data.results[0].location.state)
        };
        users.push(user);
        var user = {
            name : _.capitalize(data.results[1].name.first) + ' ' + _.capitalize(data.results[1].name.last),
            photo : data.results[1].picture.large,
            location : _.capitalize(data.results[1].location.city)+', '+_.capitalize(data.results[1].location.state)
        };
        users.push(user);
        var user = {
            name : _.capitalize(data.results[2].name.first) + ' ' + _.capitalize(data.results[2].name.last),
            photo : data.results[2].picture.large,
            location : _.capitalize(data.results[2].location.city)+', '+_.capitalize(data.results[2].location.state)
        };
        users.push(user);
        var user = {
            name : _.capitalize(data.results[3].name.first) + ' ' + _.capitalize(data.results[3].name.last),
            photo : data.results[3].picture.large,
            location : _.capitalize(data.results[3].location.city)+', '+_.capitalize(data.results[3].location.state)
        };
        users.push(user);
        //console.log (users);
        return users;
    };

    function renderPartners (users){
        var tmpl = _.template($('#list_tmpl').html());
        var list = tmpl({data : users});
        //console.log (list);
        $('#list').html(list);
    };

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
    
    $("#search").on("click", search);

});
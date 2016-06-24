$(function (){
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
        return users;
    };

    function renderPartners (users){
        var content = " ";
        var html = $('#list_tmpl').html();
        content = tmpl(html, {data : users});
        //$('#list').remove();
        $('#list').empty().append(content);
        var pictogram = ["img/mobile_images/ellipse_tv.png", "img/mobile_images/ellipse_chem.png", "img/mobile_images/ellipse_coffie.png", "img/mobile_images/ellipse_fly.png"];
        for (i=0; i<4; i++) {
            $('pictogram').css("src", pictogram[i]);
        };
    };

    /*function renderPictogram (){
        
        var html = $('#list_tmpl').html();
        var content = tmpl(html, {pic : pictogram});
        $('#list').append(content);
    };*/

    function search () {
        var url='';
        url = 'https://randomuser.me/api/?results=4';
        //console.log (url);
      
        $.ajax({
            url: url,
            dataType: "json",
            success: function(data) {
                console.log("Here");
                console.log(data);
                var users = getPartners(data);
                //console.log (users);
                renderPartners (users);
            },
            error: function(error) {
                console.log("error");
                console.log(error);
            }
        });
    };
    search();
    $("#search").on("click", search);
    $("#search_new").on("click", search);
});


    
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
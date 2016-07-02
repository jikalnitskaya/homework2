$(function (){
	$('.grid').masonry({
		itemSelector: '.grid-item',
		//columnWidth: '.grid-sizer',
		//columnWidth: 31.8,
		percentPosition: true,
		gutter: '.gutter',
		//gutter: '3.1%'
		//gutter: '2.3%'
	});
});;$(function (){
//переделать!!!
    function getPartners(data) {
        var users = [];
        var user = {
            name : _.capitalize(data.results[0].name.first) + ' ' + _.capitalize(data.results[0].name.last),
            photo : data.results[0].picture.large,
            location : _.capitalize(data.results[0].location.city)+', '+_.capitalize(data.results[0].location.state),
            picto : "img/mobile_images/ellipse_tv.png"
        };
        users.push(user);
        var user = {
            name : _.capitalize(data.results[1].name.first) + ' ' + _.capitalize(data.results[1].name.last),
            photo : data.results[1].picture.large,
            location : _.capitalize(data.results[1].location.city)+', '+_.capitalize(data.results[1].location.state),
            picto : "img/mobile_images/ellipse_chem.png"
        };
        users.push(user);
        var user = {
            name : _.capitalize(data.results[2].name.first) + ' ' + _.capitalize(data.results[2].name.last),
            photo : data.results[2].picture.large,
            location : _.capitalize(data.results[2].location.city)+', '+_.capitalize(data.results[2].location.state),
            picto : "img/mobile_images/ellipse_coffie.png"
        };
        users.push(user);
        var user = {
            name : _.capitalize(data.results[3].name.first) + ' ' + _.capitalize(data.results[3].name.last),
            photo : data.results[3].picture.large,
            location : _.capitalize(data.results[3].location.city)+', '+_.capitalize(data.results[3].location.state),
            picto : "img/mobile_images/ellipse_fly.png"
        };
        users.push(user);
        return users;
    };

    function renderPartners (users){
        var content = " ";
        var html = $('#list_tmpl').html();
        content = tmpl(html, {data : users});
        $('#list').empty().append(content);
        //renderPictogram();
    };

    /*function renderPictogram (){
        var pictogram = ["img/mobile_images/ellipse_tv.png", "img/mobile_images/ellipse_chem.png", "img/mobile_images/ellipse_coffie.png", "img/mobile_images/ellipse_fly.png"];       
        var html = $('#pictogram_tmpl').html();
        var content = tmpl(html, {pic : pictogram});
        $('.picto').append(content);
    };*/

    function search () {
        var url='';
        url = 'https://randomuser.me/api/?results=4';
        //console.log (url);
      
        $.ajax({
            url: url,
            dataType: "jsonp",
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
    };*/;$(function (){
	function searchIdeas (e) {
        e && e.preventDefault();
        var url='';
        var $input = $('#input').val();
        $input = encodeURIComponent($input);
        var key = '2810130-69f58e75c3b8596474840dbd3';
        url = "https://pixabay.com/api/?key=" + key + "&q=" + $input + "&order=popular&image_type=photo&per_page=7"+"&callback=?";
      
        $.ajax({
            url: url,
            dataType: "jsonp",
            success: function(data) {
                console.log("Here");
                console.log(data);
                for (i=0; i<8; i++) {
	                var src = 'url('+data.hits[i].webformatURL+') no-repeat';
	                console.log (data.hits[i].webformatURL);
	                var target = '.tile_' + (i+1);
	                var targetH = '.tile_' + (i+1) + ' h3';
	                $(target).css('background', src);
	                $(targetH).html(data.hits[i].tags);
	            }
            },
            error: function(error) {
                console.log("error");
                console.log(error);
            }
        });
    };    
    $("#idea").on("click", searchIdeas);
});;$(function() {
    //функция слайдера
	var $arrowRight = $('.arrow_right');
	$arrowRight.on('click', slideRight);

	var $arrowLeft = $('.arrow_left');
	$arrowLeft.on('click', slideLeft);

	var htmlStep_1 = $(".1").html();
	var htmlStep_2 = $(".2").html();
	var htmlStep_3 = $(".3").html();
	var htmlSteps = [htmlStep_1, htmlStep_2, htmlStep_3];

    function slideRight () {
        var $target = $(this);
    	var i = $target.attr("data-title");
    	i = ++i;	
    	if (i == 4) {
    		i = 1
    	};
  		//меняем бекграунд
  		var stepContainer = $target.parent('div');
	    var $url = 'url(./img/desctop_images/step_'+i+'.png) no-repeat';
	    stepContainer.css("background", $url);
        stepContainer.css("background-size", "cover");
        stepContainer.css("background-position", "center center");
	    //меняем текст
        var nextItem = htmlSteps[i-1];
        var stepItem = $target.next('.step_item').html(nextItem);
        //меняем номер аттрибута
	    $target.attr("data-title", i);
	};

	function slideLeft (e) {
    	var $target = $(this);
    	var i = $target.attr("data-title");
    	i = --i;	
    	if (i == 0) {
    		i = 3
    	};
  
	    //меняем бекграунд
  		var stepContainer = $target.parent('div');
	    var $url = 'url(./img/desctop_images/step_'+i+'.png) no-repeat';
	    stepContainer.css("background", $url);
        stepContainer.css("background-size", "cover");
        stepContainer.css("background-position", "center center");
	    //меняем текст
        var nextItem = htmlSteps[i-1];
        var stepItem = $target.prev('.step_item').html(nextItem);
        //меняем номер аттрибута
	    $target.attr("data-title", i);
    };
});
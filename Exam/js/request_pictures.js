$(function (){
	function searchIdeas (e) {
        e && e.preventDefault();
        var url='';
        var $input = $('#input').val();
        $input = encodeURIComponent($input);
        var key = '2810130-69f58e75c3b8596474840dbd3';
        url = "https://pixabay.com/api/?key=" + key + "&q=" + $input + "&order=popular&image_type=photo&per_page=7"+"&callback=?";
      
        $.ajax({
            url: url,
            dataType: "json",
            success: function(data) {
                console.log("Here");
                console.log(data);
                for (i=0; i<7; i++) {
	                var src = 'url('+data.hits[i].webformatURL+') no-repeat';
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
});
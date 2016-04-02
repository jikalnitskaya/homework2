$(function() {
	console.log ('DOM is loaded');
	//функция для табов
    $('ul').each(function() {
        $(this).find('li').each(function(i) {
            $(this).click(function(){
                $(this).addClass('active').siblings().removeClass('active')
                .closest('div.left_wrapper').find('div.block').removeClass('visible').eq(i).addClass('visible');
            });
        });
    });	
    //функция для подсказок
    $('input').each(function(j){ 
        $(this).hover(function(){        
            $(this).closest('form').find('span.help').removeClass('view_help').eq(j).addClass('view_help');
        },
        function (){
        	$(this).closest('form').find('span.help').eq(j).removeClass('view_help');
        });
    });
});




















	
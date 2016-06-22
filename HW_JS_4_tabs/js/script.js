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

    //функция для кнопки
    var $help = $('span');
    var $buttonMode = 'of';
    console.log ($help);
    $('button').on('click', function(e){
        var $buttonMode = 'on';
        e.preventDefault();
        $help.addClass('view_help');    
    });
   
});




















	
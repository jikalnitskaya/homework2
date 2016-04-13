$(document).ready(function(){
    $(".niceCheck").mousedown(
/* при клике на чекбоксе меняем его вид и значение */
        function() {
            changeCheck($(this));  
        });

    $(".niceCheck").each(
/* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
        function() {
            changeCheckStart($(this));
        });
});

function changeCheck(el) {
/*функция смены вида и значения чекбокса
el - span контейнер для обычного чекбокса
input - чекбокс*/
    var el = el,
    input = el.find("input").eq(0);
    label = el.find("label").eq(0);

    if(!input.attr("checked")) {
        el.css("background-position","0 -17px");    
        label.css("font-style","italic");
        input.attr("checked", true)
    } else {
        el.css("background-position","0 0");
        label.css("font-style","normal");    
        input.attr("checked", false)
    }
    return true;
}

function changeCheckStart(el) {
/*если установлен атрибут checked, меняем вид чекбокса*/
    var el = el,
    input = el.find("input").eq(0);
    if(input.attr("checked")) {
        el.css("background-position","0 -17px","font-style","italic");    
        label.css("font-style","italic");
    }
    return true;
}

$(function(){
    var $links = $('.menu a');
    $links.on('click', function(event) {
        var $submenu = $(this).siblings('.submenu');
        event.preventDefault();
        $submenu.show();
    });
});

/*ф-ция для выпадающего меню*/
var $links = $('.menu a');
    $links.on('click', function(event) {
        var $submenu = $(this).siblings('.submenu');
        event.preventDefault();
        $submenu.slideToggle(1000);
    });

    var $sublinks = $('.submenu a');
    $sublinks.on('click', function(ev) {
        var $targetMenu = $(this).siblings('.target_menu');
        ev.preventDefault();
        $targetMenu.slideToggle(1000);
    });
});

 

 

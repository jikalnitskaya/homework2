$(function(){
    var $links = $('.menu a');
    $links.on('click', function(event) {
        var $submenu = $(this).siblings('.submenu');
        event.preventDefault();
        $submenu.fadeToggle(1000);
    });

    var $sublinks = $('.submenu a');
    $sublinks.on('click', function(ev) {
        var $targetMenu = $(this).siblings('.target_menu');
        ev.preventDefault();
        $targetMenu.slideToggle(1000);
    });
});
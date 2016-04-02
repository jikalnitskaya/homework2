/*var $li = $('ul li');
	console.log ($li);
	var $links = $('ul a'); 
	console.log ($links);
	var $blocks = $('.left_wrapper div');
	console.log ($blocks);
	$links.on('click', function(){
		$('.active').removeClass('active');
		$('.visible').removeClass('visible');
		$li.addClass('active');//не все, а текущий
		$blocks.addClass('visible');
	});

	/*$($links).on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('left_wrapper').find('block').removeClass('visible').eq($(this).index()).addClass('visible');
    });*/
/*$('ul a').each(function(i,val){
$(val)
})
});
for()
links[i] //val
$('li').each(function(i, val) {
	console.log ($(val).html())
})

//($(val).css('background', 'red'))

(function($) {
$(function() {

  $('ul.tabs__caption').each(function() {
    $(this).find('li').each(function(i) {
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(i).addClass('active');
      });
    });
  });

})
})
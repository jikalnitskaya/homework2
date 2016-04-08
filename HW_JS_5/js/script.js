(function($) {
  $(function() {
    $('[data-jcarousel]').each(function() {
      var el = $(this);
    });

  $('[data-jcarousel-control]').each(function() {
    var el = $(this);
    el.jcarouselControl(el.data());
    });
  });
});
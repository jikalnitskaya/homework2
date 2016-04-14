$(document).ready(function() {

  $(".fancybox").fancybox();

  menuInit();
  niceCheckInit();

  cuSel({
    changedEl: ".lineForm select",
    visRows: 5,
    scrollArrows: true
  });

  cuSel({
    changedEl: "#city",
    scrollArrows: false
  });

  /*динамическое добавление селекта	*/
  $("#addSelect").click(
    function() {
      var addedSelect = '<select id="add-select" name="add-select">' +
        '<option value="1">доллар США</option>' +
        '<option value="2">доллар канадский</option>' +
        '<option value="3">доллар новозеландский</option>' +
        '<option value="4">фунт стерлинг</option>' +
        '<option value="5">гривна</option>' +
        '<option value="6">рубль</option>' +
        '<option value="7">евро</option>' +
        '</select>';
      $(this).replaceWith(addedSelect);

      cuSel({
        changedEl: ".lineForm select",
        visRows: 4
      });
    });

  /*	показ скрытого селекта */
  $("#showSel").click(
    function() {
      $(this).prev().fadeIn();
      params = {
        refreshEl: "#city2, #city20, #city30",
        /* перечисляем через запятую id селектов, которые нужно обновить */
        visRows: 4
      }
      cuSelRefresh(params);
    });

  /*	динамическое добавление оптионов*/
  $("#addAnimals").click(
    function() {
      var newAnimals = '<span val="4">Слон</span><span val="5">Жираф африканский</span>';

      $("#cusel-scroll-animals").append(newAnimals);

      /* обновлеям селект, чтобы перинициализировать сроллинг */

      var params = {
        refreshEl: "#animals",
        visRows: 6
      }
      cuSelRefresh(params);
    });

  $("#butTest").click(
    function() {
      if ($(this).val() == "Задизайблить селект") {
        $("#cuselFrame-amimals3").addClass("classDisCusel");
        $(this).val("Раздизайблить селект");
      } else {
        $("#cuselFrame-amimals3").removeClass("classDisCusel");
        $(this).val("Задизайблить селект");
      }
    });

  $("#btnSet").click(function() {
    cuselSetValue("#country", $("#txtVal").val());
  })

});

function menuInit() {
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
}

function niceCheckInit() {

  /* при клике на чекбоксе меняем его вид и значение */
  $(".niceCheck").mousedown(function() {
    changeCheck($(this));
  });

  /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
  $(".niceCheck").each(function() {
    changeCheckStart($(this));
  });

  function changeCheck(el) {
    /*функция смены вида и значения чекбокса
    el - span контейнер для обычного чекбокса
    input - чекбокс*/
    var el = el,
      input = el.find("input").eq(0);
    label = el.find("label").eq(0);

    if (!input.attr("checked")) {
      el.css("background-position", "0 -17px");
      label.css("font-style", "italic");
      input.attr("checked", true)
    } else {
      el.css("background-position", "0 0");
      label.css("font-style", "normal");
      input.attr("checked", false)
    }

    return true;
  }

  function changeCheckStart(el) {
    /*если установлен атрибут checked, меняем вид чекбокса*/
    var el = el,
      input = el.find("input").eq(0);

    if (input.attr("checked")) {
      el.css("background-position", "0 -17px", "font-style", "italic");
      label.css("font-style", "italic");
    }

    return true;
  }
}
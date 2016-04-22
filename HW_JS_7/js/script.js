'use strict';

$(function () {
	var profile = {
		title : "Тест по программированию",
		question_1 : "Какого цвета трава?",
		answer_1_1 : "красная",
		answer_1_2 : "зеленая",
		answer_1_3 : "фиолетовая",
		question_2 : "Где живет мышка?",
		answer_2_1 : "в норе",
		answer_2_2 : "в сыре",
		answer_2_3 : "в скворечнике",
	    question_3 : "Как зовут крокодила?",
		answer_3_1 : "Семен Семеныч",
		answer_3_2 : "Гена",
		answer_3_3 : "Вася",
	    buttonCheck : "Проверить мои результаты",
	    buttonReset : "Сбросить все"
	};

//сохраняем и достаем объект из localStorage
	localStorage.clear;
	var str = JSON.stringify (profile);
	//console.log (str);
	var obj = JSON.parse (str);
	//console.log (obj);

//рендерим html
	profile = [obj];
	var html = $('#test').html();
	var users = [];
	var content = tmpl (html, {users : profile});
	$('body').append(content);

//сброс результатов
	function clear() {
		$('input:checked').removeAttr('checked');
	};
	var reset = $('#reset');
	reset.on('click', clear);

//прооверка правильности
    var $correct = [2, 1, 2];
    var $modal;
    var $overlay;
    var $body = $('body');
    
    function isCorrect () {
        var $answers = $('input:checked').map(function (indx, el) {
        	return $(el).val();
        });
        var count = 0;
        for (var i = 0; i<$answers.length; i++) {
            if ($answers[i]==$correct[i]) {
        	    count++;
            };
        };
        console.log (count);
        var text;
        var color;
        var background;
        
        if (count==3) {
            text = 'You are right!!';
            color = '#228B22';
            background = '#7FFF00';} else {
            	text = 'You are wrong!!';
            	color = 'red';
            	background = 'darkred';
            }
        $modal = $('<div class="modal">'+text+'</div>');
        $overlay = $('<div class="overlay"></div>');
        $body.append($overlay);
    	$body.append($modal);
        $modal.css({'color':color, 'background':background});
    	console.log (text);
    	$overlay.one('click', removeModal);
    };

    function removeModal() {
    	$modal.remove();
    	$overlay.remove();
    };

    var check = $('#check');
	check.on('click', isCorrect);
    
});
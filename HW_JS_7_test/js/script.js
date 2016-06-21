'use strict';

$(function () {
	var questions = [{
        question: "Какого цвета трава?",
        answers: ["красная", "зеленая", "фиолетовая"],
        correct: "зеленая"
    }, {
        question: "Где живет мышка?",
        answers: ["в норе", "в сыре", "в скворечнике"],
        correct: "в норе"
    }, {
        question: "Как зовут крокодила?",
        answers: ["Семен Семеныч", "Гена", "Вася"],
        correct: "Гена"
    }];
    var profile = {
		title : "Тест по программированию",
		que : questions,
		buttonCheck : "Проверить мои результаты",
	    buttonReset : "Сбросить все"
	};
//сохраняем и достаем объект из localStorage
	localStorage.clear;
	var str = JSON.stringify (profile);
	localStorage.setItem('data',str);
	//console.log (localStorage);
	//console.log (str);
	var obj = JSON.parse (str);
	//console.log (obj);

//рендерим html
	profile = obj;
	var html = $('#test').html();
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
    var ansNum;
    
    function isCorrect () {
        var $answers = [];
        $answers = $('input:checked').map(function (indx, el) {
        	return $(el).val();
        });
        console.log ($answers);
        var count = 0;
        for (var i = 0; i<$answers.length; i++) {
            if ($answers[i]==$correct[i]-1) {
        	    count++;
            };
        };
        console.log (count);
        var text;
        var color;
        var background;
        var text2;
        ansNum = count;
        text2 = 'You have '+count+'&nbsp;right answers';
        if (count==1) {
        	text2 = 'You have '+count+'&nbsp;right answer';
        } else {
        	text2 = 'You have '+count+'&nbsp;right answers';
        };

        if (count==3) {
            text = 'You are right!!'          
            color = '#228B22';
            background = '#7FFF00';
        } else {
            	text = 'You are wrong!!';
            	color = 'red';
            	background = 'darkred';
            }
        $modal = $('<div class="modal"><p>'+text+'</p><p class="text2">'+text2+'</p></div>');
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
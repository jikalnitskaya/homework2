$(function () {
	var html = $('#test').html();
	var users = [];
	var profile = [
	    {name : 'Иванов Иван Иванович'},
		{work :'Студент заборостроительного института'},
		{question_1 : 'Хочу учить фронтенд, потому что:'},
		{li_1 : 'заборы строить не интересно;'},
		{li_2 : 'платят мало;'},
		{li_3 : 'приходится работать по ночам'},
		{text_1 : 'Мой контактный телефон'},
		{number : '+380222222222'},
		{text_2 : 'Мой профиль ВКонтакте'},
		{link : 'vk.com'},
		{question_2 : 'Мой фитбек:'},
		{answer : 'Если нужно, могу построить вам забор'}
	];
	var content = tmpl (html, {users : profile});
	console.log (content);
	$('body').append(content);
});
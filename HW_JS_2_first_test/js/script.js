var body = document.body;
body.style.fontFamily = 'Arial';

var objTest = {
	form : '',
	ol : '',
	liQuestionFirst : '',
    formFirstLi : '',

createP : function () {                      //создаем заголовок в боди
    var p = document.createElement('p');
    p.innerHTML = "Тест по программированию";
    p.style.textAlign = "center";
    p.style.fontSize = '20px';
    body.appendChild(p); }, 

createForm : function () {                    //создаем форму
    form = document.createElement('form');
    form.style.textAlign = "center"; 
    body.appendChild(form); 
    return form;},

createOl : function() {                      //создаем нум. список в form
	ol = document.createElement('ol');
    ol.style.textAlign = "left"; 
    form.appendChild(ol);
    return this.ol; }, 

createLi : function () {                     //создаем элемент списка в ол
    li = document.createElement('li');
    li.style.fontSize = '18px';
    li.style.marginBottom = '15px';
    ol.appendChild(li); 
    return li;},

createInput : function (string) {            //создаем инпут
    var inputLi = document.createElement('input');
    inputLi.type = 'checkbox'; 
    inputLi.style.marginTop = '15px';
   
    var labelLi = document.createElement('label'); //создаем лейбл
    labelLi.appendChild(inputLi);
    labelLi.appendChild(document.createTextNode(string)); //создаем текст в лейбл
    labelLi.style = "display:block";
    labelLi.style.fontSize = '14px';
    li.appendChild(labelLi); },

createButton : function () {                    //создаем кнопку

    var button = document.createElement('button');
    button.innerHTML = 'Проверить мои результаты';
    button.type = 'submit';
    button.style.padding = '7px';
    button.style.fontSize = '14px';
    form.appendChild(button); }
}

objTest.createP ();
objTest.createForm ();
objTest.createOl ();

for (i=1; i<4; i++) {             //циклом создаем 3 вопроса
	objTest.createLi(ol);
	li.innerHTML = ("Вопрос №"+i);
	   for (j=1; j<4; j++) {             //циклом создаем 3 инпута
	        objTest.createInput ("Вариант ответа №" + j);
	        } 
	}

objTest.createButton ();
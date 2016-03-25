//создание структуры документа
var body = document.body;
body.style.fontFamily = 'Arial';

var objTimer = {
	form : '',
	divTime : '',
			
createDiv : function  () {
	this.divTime = document.createElement('div');
	this.divTime.innerHTML = 'TIME';
	this.divTime.style.height = "100px"; 
	this.divTime.style.width = "300px"; 
	this.divTime.style.fontSize = "40px";
	this.divTime.style.paddingTop = "40px";
	this.divTime.style.textAlign = 'center';
	this.divTime.style.backgroundColor = "green";
	this.divTime.style.border = "5px solid black"; 
	this.divTime.style.borderRadius = "25px";
	this.divTime.style.margin = '20px auto';
	this.divTime.style.position = 'relative';
	body.appendChild(this.divTime);
    return this.divTime},

createDivNum : function () {
	var divNum = document.createElement('div');
	divNum.innerHTML = 'Number';
	divNum.style.fontSize = "16px";
	divNum.style.position = "absolute";
	divNum.style.right = "20px";
	divNum.style.bottom= "10px";
	this.divTime.appendChild(divNum);},

createForm : function () {       
    this.form = document.createElement('form');
    this.form.style.textAlign = "center"; 
    body.appendChild(this.form); 
    return this.form;},

createButtonStart : function () {                  
	var buttonStart = document.createElement('button');
    buttonStart.innerHTML = 'START';
    buttonStart.type = 'submit';
    buttonStart.style.padding = '7px';
    buttonStart.style.fontSize = '20px';
    buttonStart.style.marginRight = '10px';
    this.form.appendChild(buttonStart);},

createButtonClear : function () {                  
	var buttonClear = document.createElement('button');
    buttonClear.innerHTML = 'CLEAR';
    buttonClear.type = 'submit';
    buttonClear.style.padding = '7px';
    buttonClear.style.fontSize = '20px';
    buttonClear.style.marginLeft = '10px';
    this.form.appendChild(buttonClear);}
}  

objTimer.createDiv ();
objTimer.createDivNum ();
objTimer.createForm ();
objTimer.createButtonStart ();
objTimer.createButtonClear ();


function handler () {
	objTimer.buttonStart.innerHTML = 'STOP';
}

objTimer.buttonStart.addEventListener ('click', handler);



/*//время
var now = Date.now();
console.log( 'now', now );
var now2 = Date.now();
console.log( 'now2', now2 );

//ф-ция для вывода чисел ч/з интервал
function printNumbersInterval() {
  var i = 1;
  var timerId = setInterval(function() {
    console.log(i);
    if (i == 20) clearInterval(timerId);
    i++;
  }, 100);
}

// вызов
printNumbersInterval();*/

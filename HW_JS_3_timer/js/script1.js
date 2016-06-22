var body = document.body;
body.style.fontFamily = 'Arial';
body.style.textAlign = "center"; 

var divMain = document.createElement('div');
	divMain.style.height = "100px"; 
	divMain.style.width = "300px"; 
	divMain.style.backgroundColor = "lightgray";
	divMain.style.border = "5px solid black"; 
	divMain.style.borderRadius = "25px";
	divMain.style.margin = '20px auto';
	divMain.style.position = 'relative';
	body.appendChild(divMain);

var divTime = document.createElement('div');
    divTime.innerHTML = '00 : 00 : 00';
    divTime.style.fontSize = "40px";
	divTime.style.marginTop = "18px";
	divTime.style.marginLeft = '10px';
	divMain.appendChild(divTime);
    
var divNum = document.createElement('div');
	divNum.innerHTML = '000';
	divNum.style.fontSize = "20px";
	divNum.style.position = "absolute";
	divNum.style.right = "25px";
	divNum.style.bottom= "10px";
	divMain.appendChild(divNum);

var buttonStart = document.createElement('button');
    buttonStart.innerHTML = 'START';
    buttonStart.type = 'submit';
    buttonStart.style.padding = '7px';
    buttonStart.style.fontSize = '20px';
    buttonStart.style.marginRight = '10px';
    body.appendChild(buttonStart);

var buttonStop = document.createElement('button');
    buttonStop.innerHTML = 'STOP';
    buttonStop.type = 'submit';
    buttonStop.style.padding = '7px';
    buttonStop.style.fontSize = '20px';
    buttonStop.style.marginLeft = '10px';
    buttonStop.style.marginRight = '10px';
    body.appendChild(buttonStop);

var buttonClear = document.createElement('button');
    buttonClear.innerHTML = 'CLEAR';
    buttonClear.type = 'submit';
    buttonClear.style.padding = '7px';
    buttonClear.style.fontSize = '20px';
    buttonClear.style.marginLeft = '10px';
    body.appendChild(buttonClear);

var start;
/*var startHour;
var startMin;
var startSec;
var startMili;*/
var timerId = null;
var prevTime = 0;

//функция расчета времени
function getCurrentTime () {
	/*var stopHour = new Date().getHours();
	var stopMin = new Date().getMinutes();
    var stopSec = new Date().getSeconds();
    var stopMili = new Date().getMilliseconds();*/
    var stop = new Date().getTime();
    var tempTime = stop - start;
    prevTime = tempTime;
    console.log (prevTime);


    var mili = tempTime % 1000;
    var numSecTmp = tempTime / 1000;
    var numSec = Math.floor (numSecTmp);///
    var numMinTmp = numSec / 60;
    var numMin = Math.floor (numMinTmp);
    var sec = numSec - (numMin * 60);
    var numHour = numMin / 60;
    var hour = Math.floor (numHour);
    var min = numMin - (hour * 60);

   /*
    if (stopMili < startMili) {
    	var mili = 1000 + stopMili - startMili;
    } else {
    var mili = stopMili - startMili;};

    if (stopSec < startSec) {
    	var sec = 60 + stopSec - startSec;
    } else {
    var sec = stopSec - startSec;};

    if (stopMin < startMin) {
    	var min = 60 + stopMin - startMin;
    } else {
    var min = stopMin - startMin;};

    if (stopHour - startHour) {
    	var hour = 24 + stopHour - startHour;
    } else {
    var hour = stopHour - startHour;};*/
 
    if (sec<10) 
       {sec = '0' + sec};
    if (min<10)
       {min = '0' + min};
    if (hour<10) 
       {hour = '0' + hour};
    if (mili<10) 
       {mili = '00' + mili};
    if (mili<100 && mili>10) 
       {mili = '0' + mili};
    var time = hour + ' : ' + min + ' : ' + sec;
    divNum.innerHTML = String(mili);
    divTime.innerHTML = time;
    return prevTime;
};

//записываем значение старт, запускаем получ. времени
function handlerStart () {
	if (timerId) {
        handlerStop();
    }
    if (prevTime == 0) {
        start = new Date().getTime(); 
    } else {
    	start = new Date().getTime() - prevTime;
        /*divNum.innerHTML = String(mili);
        //divTime.innerHTML = time;*/ };
   
   	/*startHour = new Date().getHours();
	startMin = new Date().getMinutes();
    startSec = new Date().getSeconds();
    startMili = new Date().getMilliseconds();*/
    timerId = setInterval(getCurrentTime, 100);   
}; 



//функция для стоп
function handlerStop () {
    clearInterval(timerId);
    timerId = null;
    return prevTime;
};

//функция для clear
function handlerClear() {
    clearInterval(timerId);
    timerId = null;
    start = 0;
    stop = 0;
    prevTime = 0;
    divTime.innerHTML = '00 : 00 : 00';
    divNum.innerHTML = '000';   
};

buttonStart.addEventListener ('click', handlerStart);
buttonStop.addEventListener ('click', handlerStop);
buttonClear.addEventListener ('click', handlerClear);


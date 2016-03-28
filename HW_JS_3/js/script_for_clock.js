
function addZero(x,n) {
    while (x.toString().length < n) {
        x = "0" + x;
    }
    return x;
}

function myFunction() {
    var d = new Date();
    var x = document.getElementById("demo");
    var h = addZero(d.getHours(), 2);
    var m = addZero(d.getMinutes(), 2);
    var s = addZero(d.getSeconds(), 2);
    var ms = addZero(d.getMilliseconds(), 3);
    divTime.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}





function handlerStart () {
    start = new Date().getTime(); //Date.now(); для новых браузеров
    /*timerId = */setInterval(myFunction, 100);   
}; //записываем значение старт, запускаем получ. времени



buttonStart.addEventListener ('click', handlerStart);
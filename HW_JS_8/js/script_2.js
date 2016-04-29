$(function (){
var human = [{
    name : 'John',
    surname : 'Black',
    age : 28,
    sex : 'male',
    height : '175sm',
    weight : '76kg',
    sleep : function () {
    	alert ('Tss! I am sleeping!');
    }
}];

var worker = {
    company : 'Pepsi',
    job : 'manager',
    salary : '1000$',
    work : function () {
    	alert ('I am working now!');
    }
};

var student = {
	university : 'Harvard University',
	faculty : 'Harvard University Graduate School of Design',
	program : 'Architecture',
	study : function () {
        alert ('I am studing now!');
	}
};

worker.__proto__= human;
console.log (worker.name, worker.age);
//human.sleep();

var html = $('#test').html();
var content = tmpl (html, {users : human});
console.log (tmpl);
$('body').append(content);

var s= $('#sleep');

console.log (s);
$('#sleep').on('click', human.sleep);

});


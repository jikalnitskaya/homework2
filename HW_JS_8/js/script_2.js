$(function (){
//alert ('Please, open console!');

var human = {
    name : 'John',
    surname : 'Black',
    age : 28,
    sex : 'male',
    height : '175sm',
    weight : '76kg',
    sleep : function () {
    	alert ('Tss! I am sleeping!');
    }
};

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
student.__proto__= human;
console.log (worker.name, worker.age, worker.company);
//worker.sleep();
console.log (student.height, student.weight, student.university);
//student.sleep();
//student.study();

var workerSecond = {
    company : 'Cola',
    job : 'engeneer',
    salary : '5000$',
    work : function () {
        alert ('I am doing something now!');
    }
};
workerSecond.__proto__= human;
console.log (workerSecond.name, workerSecond.age, workerSecond.company);

function shop() {
    this.goods = 'apples';
    this.quantity = 1000;
    this.sellApples = function() {
        var apple = prompt ('How many apples do you want?');
        var restApples = this.quantity - apple;
        console.log (restApples);
    };
};

var newShop = new shop ();
newShop.sellApples();



});


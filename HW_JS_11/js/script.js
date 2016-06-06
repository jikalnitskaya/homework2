var script = function() {
function pow(a, b) {
    result = a;

    if (b == 0) {
    	result = 1;
    } else {

		for (i = 1; i < b; i++) {
		  	result *=a;
		}
    }
    return result;
}

var a = prompt ('Введите число');
var b = prompt ('Введите степень числа');
var result;

do {
    if (b < 0) {
	    alert ('Введите положительное число для степени числа');
	    b = prompt ('Введите степень числа');  
	    pow(a, b);
	} else { 	
    	pow(a, b);
    }

} while (b < 0);


console.log (result);};

script();

module.exports = script;
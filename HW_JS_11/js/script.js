//var script = {
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

function check (a, b) {
    do {
        if (b < 0) {
            result = 'error';
            console.log (result);
            alert ('Введите положительное число для степени числа');
            b = prompt ('Введите степень числа');  
            pow(a, b);
        } else {    
            pow(a, b);
        }

    } while (b < 0);
};

var a //= prompt ('Введите число', '');
var b //= prompt ('Введите степень числа', '');
var result;

check (a, b);

var str = 'Результат = '+ result

//alert (str);
//};

//export {pow};

//module.exports = script;
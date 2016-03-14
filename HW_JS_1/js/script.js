//первая часть
function pow (a, b) {
  var result = a; //можно не создавать отд. переменную, а результат записать в а?
  for (i=1; i<b; i++) //і от нуля или от единицы?
    {result *=a;}//почему не работает а*а?
  return result;
 }

var a = prompt ('Введите число', '')
var b = prompt ('Введите степень числа', '')
console.log (pow (a, b));



//вторая часть
var userNames = [];
var names = prompt ('Введите пять имен через пробел', '');
userNames = names.split (' ');

console.log (userNames);

var newName = prompt ('Введите имя пользователя','');
console.log (newName);

function findTrueName (trueName) {
	return trueName == newName;
}


console.log ( userNames.some (findTrueName));

var mesName = userNames.some (findTrueName)

if (mesName){
  sayHallo (newName);
  alert (arrMes);
}
  else {
  	alert( 'Такое имя пользователя отсутствует' );
}


function sayHallo (newName) {
	arrMes = ['Андрей ', ', вы ', 'успешно ', 'вошли!'] //пробелы, запятые
	console.log (arrMes);
	arrMes.splice(0, 1, newName);
	console.log (arrMes);
	return arrMes;
	}


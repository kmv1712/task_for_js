let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDevide = document.getElementById('buttonDevide');

function onButtonPlusClick(){
	let sum = number1 + number2;
	alert(sum);
}

function onButtonMinusClick(){
	let sum = number1 - number2;
	alert(sum);
}

function onButtonMultiplyClick(){
	let sum = number1 * number2;
	alert(sum);
}

function onButtonDevideClick(){
	let sum = number1 / number2;
	alert(sum);
}

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

var number1 = Number(input1.value);
var number2 = Number(input2.value);

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);

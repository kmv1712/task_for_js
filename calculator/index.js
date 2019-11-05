function getNumber1(){
	return Number(input1.value);
}

function getNumber2(){
	return Number(input2.value);
}

function makeOperation(operationCode){
	var number1 = Number(input1.value);
	var number2 = Number(input2.value);


	switch(operationCode) {
  		case '+':
    		var result = getNumber1() + getNumber2();
    		break;
  		case '-':
  			var result = getNumber1() - getNumber2();
  			break;
  		case '*':
  			var result = getNumber1() * getNumber2();
  			break;
  		case '/':
  			var result = getNumber1() / getNumber2();
  			break;
  	}
  	alert(result);
}

function onOperationButtonClick(eventObject){
	// Получить текущий выбранный элемент из события.
	var clickedElement = eventObject.currentTarget;
	// Получить html внутри тэга.
	var opperation = clickedElement.innerHTML;
	makeOperation(opperation);
}

function addCommonEventListener(i){
	button = operationButtons[i];
	button.addEventListener('click', onOperationButtonClick);
}
// let buttonPlus = document.getElementById('buttonPlus');
// let buttonMinus = document.getElementById('buttonMinus');
// let buttonMultiply = document.getElementById('buttonMultiply');
// let buttonDevide = document.getElementById('buttonDevide');

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

// var operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide];
var operationButtons = document.getElementsByClassName('operation-button');

for (var i = 0; i < operationButtons.length; i++){
	button = operationButtons[i];
	button.addEventListener('click', onOperationButtonClick);
}


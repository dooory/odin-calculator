
function addition(x, y) {
	return x + y;
}

function subtraction(x, y) {
	return x - y;
}

function division(x, y) {
	return x / y;
}

function multiplication(x, y) {
	return x * y;
}

// Associates different synonyms for operators to that operators function
let operatorAliases = {
	add : [addition, "+", "addition", "add"],
	subtract : [subtraction, "-", "–", "substraction", "subtract"],
	multiply : [multiplication, "*", "x", "multiplication", "multiply"],
	divide : [division, "/", "÷", "division", "divide"],
}

// Translates an operator in the form of a string to its function
function getOperatorsFunction(operator) {
	operator = operator.toLowerCase();

	for (const index in operatorAliases) {
		if (operatorAliases.hasOwnProperty(index)) {
			let operatorArray = operatorAliases[index];

			if (operatorArray.includes(operator)) {
				return operatorArray[0];
			}
		}
	}
}

function operate(operator, x, y) {
	if (operator === "") {
		return x || 0;
	}

	// sets y to x if y is null
	y = y || x;

	x = parseInt(x);
	y = parseInt(y);

	let operatorFunction = getOperatorsFunction(operator);

	let sum = operatorFunction(x, y);

	return sum;
}

let numberX = "";
let numberY = "";
let currentOperator = "";
let evaluated = false;

let currentInput = "";
let inputDisplay = document.querySelector("#input");

let numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(button => {
	button.addEventListener("click", function() {
		let number = button.innerText;

		if (currentOperator === '') {
			if (numberX == "0") {
				numberX = ""
			}

			numberX += number;
			currentInput = numberX;
		} else if (currentOperator !== '' && numberX !== ''){
			if (numberY == "0") {
				numberY = ""
			}

			numberY += number;
			currentInput = numberX + currentOperator + numberY;
		}

		inputDisplay.innerText = currentInput;	
	})
});

let mainOperatorsContainer = document.querySelector("#main-operators");
let mainOperatorButtons = mainOperatorsContainer.querySelectorAll(".operator");

mainOperatorButtons.forEach(button => {
	button.addEventListener("click", function() {
		let operator = button.innerText;

		if (numberX !== '') {
			currentOperator = operator;
			currentInput = numberX + currentOperator + numberY;
			inputDisplay.innerText = currentInput;	
		}
	})
});

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function () {
	numberX = "";
	numberY = "";
	currentOperator = "";

	currentInput = '';
	inputDisplay.innerText = '0';
})

let equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click", function () {
	let sum = operate(currentOperator, numberX, numberY);

	currentOperator = "";
	numberY = "";

	currentInput = sum;
	inputDisplay.innerText = sum;

	numberX = sum;
})

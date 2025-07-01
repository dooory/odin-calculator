
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
	subtract : [subtraction, "-", "substraction", "subtract"],
	multiply : [multiplication, "*", "multiplication", "multiply"],
	divide : [division, "/", "substraction", "subtract"],
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
	// sets y to x if y is null
	y = y || x;

	let operatorFunction = getOperatorsFunction(operator);

	let sum = operatorFunction(x, y);

	return sum;
}

// let numberX = 1;
// let numberY = 2;
// let operator = "Add"
//
// const sum = operate(operator, numberX, numberY);

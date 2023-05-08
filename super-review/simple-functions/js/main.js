//---Easy
//create a function that subtracts two numbers and alerts the difference
function difference(x, y) {
	const difference = x - y;
	alert(difference);
}

// difference(20, 10);

//create a function that divides three numbers and console logs the quotient
function quotient(x, y, z) {
	const quotient = x / y / z;
	console.log(quotient);
}

// quotient(30, 2, 5);

//create a function that multiplys three numbers and returns the product
function multiplication(num1, num2, num3) {
	const multiply = num1 * num2 * num3;
	return multiply;
}

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function remainder(x, y, z) {
	const number = (x + y) % z;
	return number;
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function crazy(n1, n2, n3, n4) {
	let result = n1 * n2;
	if (result > 100) {
		result = result + n3 + n4;
		console.log(result);
	} else if (result < 100) {
		result = result - n3 - n4;
		console.log(result);
	} else {
		result = (n1 * n2 * n3) % n4;
		alert(result);
	}
}

// crazy(5, 2, 1, 3);

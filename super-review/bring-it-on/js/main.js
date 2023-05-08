// *Variables*
// Create a variable and console log the value
let love = "Benji";
console.log(love);

// Create a variable, add 10 to it, and alert the value
let num = 20;
alert(num + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function substraction(n1, n2, n3, n4) {
	let subs = n1 - n2 - n3 - n4;
	alert(subs);
}

// Create a function that divides one number by another and returns the remainder
function quotient(num1, num2) {
	let division = num1 % num2;
	return division;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(n1, n2) {
	let sum = n1 + n2;
	if (sum > 50) {
		alert("Jumaji!");
	}
}

jumanji(30, 40);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function threeNumbers(num1, num2, num3) {
	let multiplication = num1 * num2 * num3;
	if (multiplication % 3 === 0) {
		alert("Zebra!");
	}
}
threeNumbers(1, 3, 6);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNumber(word, number) {
	for (let i = 1; i <= number; i++) {
		console.log(word);
	}
}

wordNumber("happy", 13);

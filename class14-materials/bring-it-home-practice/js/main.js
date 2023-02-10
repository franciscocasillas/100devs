// *Variables*
// Create a variable and console log the value
let something = "This is a variable";
console.log(something);

// Create a variable, add 10 to it, and alert the value
let number = 10;
alert(number + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function substract(n1, n2, n3, n4) {
	alert(n1 - n2 - n3 - n4);
}

substract(100, 20, 10, 5);

// Create a function that divides one number by another and returns the remainder
function remainder(num1, num2) {
	return num1 % num2;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(nu1, nu2) {
	if (nu1 + nu2 > 50) {
		alert("Jumaji");
	}
}

jumanji(30, 31);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(one, two, three) {
	if ((one * two * three) % 3 === 0) {
		alert("ZEBRA");
	}
}

zebra(3, 9, 12);

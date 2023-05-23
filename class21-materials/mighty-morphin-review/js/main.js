// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let faveHoliday = "Christmas";
faveHoliday = "Halloween";
console.log(faveHoliday.toUpperCase());

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = "colonoscopy";
let sliced = str.slice(-3);
alert(sliced);

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function crazyNumbers(n1, n2, n3, n4, n5) {
	let result = 100 - n1 - n2 - n3 - n4 - n5;
	alert(Math.abs(result));
}

crazyNumbers(30, 45, 39, 80, 5);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNumbers(n1, n2, n3) {
	let sorted = [n1, n2, n3].sort((a, b) => a - b);
	console.log(sorted[0], sorted[2]);
}

threeNumbers(3, 5, 1);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headsOrTails() {
	let randomNumber = Math.floor(Math.random() * 10);
	if (randomNumber % 2 === 0) {
		alert("HEADS!");
	} else {
		alert("TAILS!");
	}
}

headsOrTails();

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function xHeadsOrTails(x) {
	for (let i = 1; i <= x; i++) {
		headsOrTails();
	}
}

xHeadsOrTails(5);

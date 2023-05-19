// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let faveFood = "hamburgers";
faveFood = "sushi";
alert(faveFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let country = "Mexico";
alert(country[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divideAndMultiply(n1, n2, n3) {
	alert((n1 / n2) * n3);
}

divideAndMultiply(6, 3, 4);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(num) {
	console.log(Math.pow(num, 1 / 3));
}

cubeRoot(3);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function isItSummer(month) {
	month = month.toLowerCase();
	if (month === "june" || month === "july") {
		alert("YAY");
	} else {
		alert("Booo");
	}
}

whichMonth("February");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function fromOneTo(num) {
	for (let i = 1; i <= num; i++) {
		if (i % 5 !== 0) {
			console.log(i);
		}
	}
}

fromOneTo(13);

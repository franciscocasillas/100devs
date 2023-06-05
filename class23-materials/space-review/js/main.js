//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrOfNumbers = [3, 9, 2, 12, 99];
let sum = arrOfNumbers.reduce((acc, x) => acc + x);
console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squaredArray(arr) {
	let square = arr.map((x) => x ** 2);
	console.log(square);
}

squaredArray([3, 4, 5, 18]);

//Create a function that takes string
//Print the reverse of that string to the console
function reverse(str) {
	let reversed = str.split("").reverse().join("");
	console.log(reversed);
}
reverse("happy");

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(word) {
	let reversed = word.split("").reverse().join("");
	if (word === reversed) {
		console.log(`${word} is a palyndrome`);
	} else {
		console.log("Nope");
	}
}

palindrome("happah");

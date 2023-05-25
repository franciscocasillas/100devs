//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arr = [2, 3, 5, 12];
console.log(arr.reduce((acc, x) => (acc += x)));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squaredNumbers(arr) {
	let squared = arr.map((x) => x ** 2);
	console.log(squared);
}

squaredNumbers([3, 2, 4]);

//Create a function that takes string
//Print the reverse of that string to the console

function reverse(word) {
	let reversed = word.split("").reverse().join("");
	return reversed;
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str) {
	if (str === reverse(str)) {
		return true;
	} else {
		return false;
	}
}

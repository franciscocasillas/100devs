//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

function sum(arr) {
	alert(arr.reduce((result, x) => result * x));
}

sum([4, 5, 3]);

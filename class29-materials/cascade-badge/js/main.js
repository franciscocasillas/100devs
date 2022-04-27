//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.
let pokemonParty = [
	"Pikachu",
	"Bulbasaur",
	"Pidgey",
	"Butterfree",
	"Kanghaskan",
	"Torracat",
];

function reverseAndShow() {
	console.log(pokemonParty.reverse());
}

reverseAndShow();

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function crazy(a, b) {
	let aSum = a.reduce((sum, x) => sum + x ** 2);
	let bSum = b.reduce((sum, x) => sum + x ** 3);
	if (aSum > bSum) {
		console.log(true);
	}
}

crazy([9, 3, 8], [1, 1, 2]);

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function byIndex(a) {
	let multiples = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i] % i === 0) {
			multiples.push(a[i]);
		}
	}
	console.log(multiples);
}

byIndex([22, -6, 32, 82, 9, 25]);

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function inte(a) {
	let sum = a.reduce((sum, x) => +sum + +x);
	console.log(sum);
}

inte(["1", "3", 2, "5", "7"]);

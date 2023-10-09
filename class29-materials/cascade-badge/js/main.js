//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

let pokemonParty = [
	"Snorlax",
	"Charizard",
	"Butterfree",
	"Pidgeot",
	"Clefable",
	"Arcanine",
	"Muk",
];

function reversePokemonParty() {
	let reversedPokemonParty = pokemonParty.reverse();
	console.log(reversedPokemonParty);
}

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function comparison(arrayOfSquares, arrayOfCubes) {
	if (sumOfSquares(arrayOfSquares) > sumOfCubes(arrayOfCubes)) {
		return true;
	} else {
		return false;
	}
}

function sumOfSquares(arr) {
	return arr.reduce((acc, el) => acc + el ** 2);
}

function sumOfCubes(arr) {
	return arr.reduce((acc, el) => acc + el ** 3);
}

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function filterMultiplesOfIndex(arr) {
	let multiplesOfIndex = arr.filter((element, index) => element % index === 0);
	console.log(multiplesOfIndex);
}

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumNumbers(arr) {
	console.log(arr.reduce((acc, el) => acc + Number(el)));
}

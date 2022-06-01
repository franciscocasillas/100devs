//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function even(arr) {
	const even = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			even.push(arr[i]);
		}
	}
	console.log(even);
}

even([1, 4, 3, 5, 8, 9]);

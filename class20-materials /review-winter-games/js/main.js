//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function duplicateArray(arr) {
	let evens = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			evens.push(arr[i]);
		}
	}
	alert(evens);
}

duplicateArray([2, 3, 5, 7, 8, 9, 10]);

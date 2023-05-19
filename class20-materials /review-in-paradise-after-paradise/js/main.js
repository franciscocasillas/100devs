// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function hiBye(arr) {
	if (arr[0] < arr[arr.length - 1]) {
		alert("Hi");
	} else if (arr[arr.length - 1] < arr[0]) {
		alert("Bye");
	} else {
		alert("We close in an hour");
	}
}

hiBye([3, 4, 2, 1, 0, 3]);

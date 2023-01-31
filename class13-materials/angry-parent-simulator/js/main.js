document.querySelector("#yell").addEventListener("click", holler);

function holler() {
	let first = document.querySelector("#firstName").value;
	let second = document.querySelector("#firstMiddle").value;
	let third = document.querySelector("#lastMiddle").value;
	let last = document.querySelector("#lastName").value;

	document.querySelector(
		"#placeToYell"
	).innerText = `${first} ${second} ${third} ${last}`;
}

// document.querySelector("#yell").addEventListener("click", run);

// function run() {
// 	let fName = document.querySelector("#firstName").value;
// 	let sName = document.querySelector("#firstMiddle").value;
// 	let tName = document.querySelector("#lastMiddle").value;
// 	let lName = document.querySelector("#lastName").value;

// 	document.querySelector(
// 		"#placeToYell"
// 	).innerText = `${fName} ${sName} ${tName} ${lName}`;
// }

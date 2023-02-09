document.querySelector("#yell").addEventListener("click", run);

function run() {
	const fName = document.querySelector("#firstName").value.toUpperCase();
	const fMidName = document.querySelector("#firstMiddle").value.toUpperCase();
	const lMidName = document.querySelector("#lastMiddle").value.toUpperCase();
	const lName = document.querySelector("#lastName").value.toUpperCase();

	document.querySelector(
		"#placeToYell"
	).innerText = `${fName} ${fMidName} ${lMidName} ${lName}!!!`;
}

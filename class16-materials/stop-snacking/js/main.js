//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector("#help").addEventListener("click", stopSnacking);

function stopSnacking() {
	let snacks = document.querySelector("#snacks").value;
	document.querySelector("#stops").innerText = "";
	for (var i = 0; i < snacks; i++) {
		document.querySelector("#stops").innerText += " Stop Snacking!";
	}
}

document.querySelector("#check").addEventListener("click", check);

function check() {
	const day = document.querySelector("#day").value;

	if (day === "Monday" || day === "Tuesday" || day === "Wednesday") {
		alert("You suck!");
	} else if (day === "Thursday") {
		alert("Almost there!");
	} else {
		alert("Yayyyy!");
	}
}

//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector("#check").addEventListener("click", check);

function check() {
	const day = document.querySelector("#day").value.toLowerCase();

	if (day === "tuesday" || day === "thursday") {
		document.querySelector("#placeToSee").innerText = "Ugh";
	} else if (day === "saturday" || day === "sunday") {
		document.querySelector("#placeToSee").innerText = "Okay!";
	} else {
		document.querySelector("#placeToSee").innerText = "Boring";
	}
}

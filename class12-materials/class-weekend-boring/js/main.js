document.querySelector("#check").addEventListener("click", check);

function check() {
	const day = document.querySelector("#day").value.toLowerCase();

	if (day === "monday" || day === "tuesday" || day === "wednesday") {
		document.querySelector("#placeToSee").innerText = "You suck!";
	} else if (day === "thursday" || day === "friday") {
		document.querySelector("#placeToSee").innerText = "Almost there";
	} else {
		document.querySelector("#placeToSee").innerText = "Yayyy";
	}
}

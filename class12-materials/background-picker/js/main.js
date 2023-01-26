document.querySelector("#purple").onclick = partyPurple;
document.querySelector("#green").onclick = partyGreen;
document.querySelector("#blue").onclick = partyBlue;
document.querySelector("#orange").addEventListener("click", partyOrange);

function partyPurple() {
	document.querySelector("body").style.backgroundColor = "purple";
	document.querySelector("body").style.color = "white";
}

function partyGreen() {
	document.querySelector("body").style.backgroundColor = "green";
	document.querySelector("body").style.color = "white";
}

function partyBlue() {
	document.querySelector("body").style.backgroundColor = "blue";
	document.querySelector("body").style.color = "white";
}

function partyOrange() {
	document.querySelector("body").style.backgroundColor = "orange";
	document.querySelector("body").style.color = "white";
}

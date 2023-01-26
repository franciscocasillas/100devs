//Write your pseduo code first!
document.querySelector("#converter").addEventListener("click", convert);

function convert() {
	const fah = document.querySelector("#fahrenheit").value;

	let cel = Number(fah) + 2;

	document.querySelector("#displayCelcius").innerText = cel;
}

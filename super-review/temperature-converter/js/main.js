//Write your pseduo code first!

//1. Get temperature in Celciuls
//2. Convert to Fahrenheit
//3. Display result

document.querySelector("button").addEventListener("click", toFahrenheit);

function toFahrenheit() {
	const celcius = Number(document.querySelector("#celcius").value);
	let fahrenheit = (celcius + 32) / 9;
	document.querySelector(".result").innerText = fahrenheit;
}

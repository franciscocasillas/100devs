//Write your pseduo code first!

//1. Listen to click on button
//2. Get value from input
//3. Convert value to number
//4. Convert number to Fahrenheit
//5. Display Fahrenheit value inside H2

document.querySelector("button").addEventListener("click", convertTemp);
function convertTemp() {
	const celcius = document.querySelector("#celcius").value;
	const fahrenheit = celcius * 1.8 + 32;
	document.querySelector("h2").innerText = fahrenheit;
}

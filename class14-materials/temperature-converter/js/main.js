//Write your pseduo code first!
//Get temperature
document.querySelector("#convert").addEventListener("click", converter);

//Convert temprature
function converter() {
	let temp = document.querySelector("#temperature").value;
	temp = temp * 2;
	document.querySelector("#result").innerText = `${temp} Celcius`;
}

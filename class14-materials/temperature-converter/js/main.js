//Write your pseduo code first!
//Get temperature
document.querySelector("#convert").addEventListener("click", converter);

//Convert temprature
function converter() {
	let temp = document.querySelector("#temperature").value;
	temp = ((temp - 32) * 5) / 9;
	temp = temp.toFixed(2);
	document.querySelector("#result").innerText = `${temp} Celcius`;
}

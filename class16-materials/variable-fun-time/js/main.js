//--- Easy
//create a variable and assign it a number
let coolNumber = 33;

//minus 10 from that number
let minusTen = coolNumber - 10;

//print that number to the console
console.log(minusTen);

//--- Medium
//create a variable that holds a value from the input
let valerie = document.querySelector("#danceDanceRevolution").value;

//add 25 to that number
let addTwentyFive = valerie + 25;

//alert that number
alert(addTwentyFive);

//--- Hard
//create a variable that holds the h1
let header = document.querySelector("h1");

//add an event listener to that element that console logs the sum of the two previous variables
header.addEventListener("click", numbers);

function numbers() {
	alert(Number(minusTen) + Number(addTwentyFive));
}

// CAROUSEL

//while
let number = 1;

while (number <= 10) {
	console.log(number);
	number++;
}

//for
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

//PARITY
let i = prompt("Give me a number from 1 to 10");
for (i; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(`${i} is even`);
	} else {
		console.log(`${i} is odd`);
	}
}

//INPUT VALIDATION
let num = 1;

while (num < 50 || num > 100) {
	num = prompt("Give me a number, any number");
}

//MULTIPLICATION TABLE
let numb = prompt("Give me another number");

for (let i = 1; i <= 10; i++) {
	console.log(`${i} * ${numb} = ${i * numb}`);
}

//YES OR NO

let txt;
let result = false;
while (result === false) {
	txt = prompt("Drop a word");
	if (txt === "yes" || txt === "no") {
		result = true;
	} else {
	}
}

//FIZZBUZZ

for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("fizzbuzz");
	} else if (i % 3 === 0) {
		console.log("fizz");
	} else if (i % 5 === 0) {
		console.log("buzz");
	} else {
		console.log(i);
	}
}

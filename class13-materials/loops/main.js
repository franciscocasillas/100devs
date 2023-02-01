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

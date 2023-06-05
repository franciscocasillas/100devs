// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = "Think about objects as something fun";
if (sentence.endsWith("?")) {
	console.log("Question!");
} else {
	console.log("It's not a question");
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let str = "various and multiple weird awkward words jr. dev hillarious jr. dev";
let str2 = str.replaceAll("jr. dev", "software engineer");
console.log(str2);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
	let option = Math.floor(Math.random() * 10);
	if (option < 4) {
		return "rock";
	} else if (option < 7) {
		return "paper";
	} else {
		return "scissors";
	}
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function userPlay(userOption) {
	let computerOption = rockPaperScissors();
	console.log(computerOption);
	if (userOption === computerOption) {
		console.log("TIE");
	} else if (
		(userOption === "rock" && computerOption === "scissors") ||
		(userOption === "paper" && computerOption === "rock") ||
		(userOption === "scissors" && computerOption === "paper")
	) {
		console.log("You win");
	} else {
		console.log("You lost!");
	}
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playThreeTimes(arr) {
	let x = arr.length;
	for (let i = 0; i < x; i++) {
		userPlay(arr[i]);
	}
}

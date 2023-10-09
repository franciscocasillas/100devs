// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need.

let bulbasaur = 5;
let caterpie = 1;
let weedle = 1;

let bulbasaurEvolve = 16;
let caterpieEvolve = 7;
let weedleEvolve = 7;

let rareCandyNeeded =
	bulbasaurEvolve -
	bulbasaur +
	(caterpieEvolve - caterpie) +
	(weedleEvolve - weedle);
console.log(rareCandyNeeded);

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

function convertToCelcius(fahrenheit) {
	return (5 / 9) * (fahrenheit - 32);
}

function canCharmanderPlay(fahrenheit) {
	if (convertToCelcius(fahrenheit) > 0) {
		alert("Charmander can play!");
	} else {
		alert("Charmander cannot play!");
	}
}

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function choosePikachuNTimes(enemyPokemonNumber) {
	for (let i = 0; i < enemyPokemonNumber; i++) {
		console.log("Pikachu, I choose you!");
	}
}

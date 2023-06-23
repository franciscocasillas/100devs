//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//https://www.thecocktaildb.com/api.php

//input
document.querySelector("button").addEventListener("click", getCocktail);

function getCocktail() {
	let cocktail = document.querySelector("input").value;
	cocktail = cocktail.replaceAll(" ", "_");

	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.drinks[0]);

			//title
			document.querySelector("h2").innerText = data.drinks[0].strDrink;

			//instructions
			document.querySelector(".instructions").innerText =
				data.drinks[0].strInstructions;

			//thumbnail
			document.querySelector("img").src = data.drinks[0].strDrinkThumb;
		})
		.catch((err) => {});
}

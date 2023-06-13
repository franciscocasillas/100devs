//Create a pizza object that has four properties and three methods

let pizza = {};

pizza.cheese = "cheddar";
pizza.size = "XL";
pizza.ingredientes = ["pepperoni", "jalapenos"];
pizza.crust = "flat";

pizza.send = function () {
	console.log("On its way!");
};

pizza.order = function () {
	console.log("What would you like to have?");
};

pizza.fun = function () {
	console.log("I have no idea");
};

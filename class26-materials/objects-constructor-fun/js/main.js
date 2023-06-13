//Create a constructor with 4 properties and 3 methods
function MakePizza(ingredients, cheese, size, crust, delivery, order, time) {
	this.ingredients = ingredients;
	this.cheese = cheese;
	this.size = size;
	this.crust = crust;
	this.delivery = function () {
		console.log(delivery);
	};
	this.order = function () {
		console.log(order);
	};
	this.time = function () {
		console.log(time);
	};
}

let pepperonni = new MakePizza(
	["peppers", "pineapples"],
	"cheddar",
	"small",
	"thin",
	"On its way!",
	"Your order has been placed",
	"It's gonna be there in less than half an hour"
);

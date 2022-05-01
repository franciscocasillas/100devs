//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine {
	constructor(brand, price, color, watts) {
		this.brand = brand;
		this.price = price;
		this.color = color;
		this.watts = watts;
	}

	noise() {
		console.log("Room, room!");
	}
	turnOff() {
		alert("This shit is off!");
	}
	turnAgain() {
		alert("This shit is already on.");
	}
}

let dolceGusto = new EspressoMachine("Nescafé", 5000, "black", 500);
console.log(dolceGusto.turnOff());

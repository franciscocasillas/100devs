class Animal {
	constructor(name) {
		this._name = name;
	}
	get name() {
		return this._name;
	}
	speak() {
		console.log(`${this._name} makes a sound`);
	}
}
class Dog extends Animal {
	constructor(name, breed) {
		super(name);
		this._breed = breed;
	}
	get breed() {
		return this._breed;
	}
	speak() {
		super.speak();
		console.log(`${this.name} barks`);
	}
}

class Cat extends Animal {
	constructor(name, breed) {
		super(name);
		this._breed = breed;
	}
	get breed() {
		return this._breed;
	}
	speak() {
		super.speak();
		console.log(`${this.name} meows`);
	}
}

class Horse extends Animal {
	constructor(name, color) {
		super(name);
		this._color = color;
	}
	get color() {
		return this._color;
	}
	speak() {
		super.speak();
		console.log(`${this.name} brams`);
	}
}

let simba = new Dog("Simba", "Shepard");
let machi = new Dog("The Machine", "Pitbull");
let salem = new Cat("Salem", "American Shorthair");
let carrot = new Horse("Carrot", "brown");

let farm = [simba, machi, salem, carrot];

for (a of farm) {
	a.speak();
}

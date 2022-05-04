// class Animal {
// 	constructor(name) {
// 		this._name = name;
// 	}
// 	get name() {
// 		return this._name;
// 	}
// 	speak() {
// 		console.log(`${this._name} makes a sound`);
// 	}
// }

// class Dog extends Animal {
// 	constructor(name, breed) {
// 		super(name);
// 		this._breed = breed;
// 	}
// 	get breed() {
// 		return this._breed;
// 	}
// 	speak() {
// 		super.speak();
// 		console.log(`${this.name} barks`);
// 	}
// }

// class Cat extends Animal {
// 	constructor(name, breed) {
// 		super(name);
// 		this._breed = breed;
// 	}
// 	get breed() {
// 		return this._breed;
// 	}
// 	speak() {
// 		super.speak();
// 		console.log(`${this.name} meows`);
// 	}
// }

// class Horse extends Animal {
// 	constructor(name, color) {
// 		super(name);
// 		this._color = color;
// 	}
// 	get color() {
// 		return this._color;
// 	}
// 	speak() {
// 		super.speak();
// 		console.log(`${this.name} brams`);
// 	}
// }

// let simba = new Dog("Simba", "Shepard");
// let machi = new Dog("The Machine", "Pitbull");
// let salem = new Cat("Salem", "American Shorthair");
// let carrot = new Horse("Carrot", "brown");

// let farm = [simba, machi, salem, carrot];

// for (a of farm) {
// 	a.speak();
// }

//1. Create an animal class with name
//2. Create a method of speak

class Animal {
	constructor(name) {
		this._name = name;
	}
	get name() {
		return this._name;
	}
	speak() {
		console.log(`${this._name} makes a sound!`);
	}
}

//3. Create a dog class that inhertis from animal
//4. Add breed to properties
//5. Add previous speak + new line where it barks

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
		console.log(`${this.name} barks loudly.`);
	}
}

//6. Create a cat class that inhertis from animal
//7. Add color to properties
//8. Add method speak + new line where it meows

class Cat extends Animal {
	constructor(name, color) {
		super(name);
		this._color = color;
	}
	get color() {
		return this._color;
	}
	speak() {
		super.speak();
		console.log(`${this._name} meows like crazy.`);
	}
}

//9. Create two dogs and two cats

let sparky = new Dog("Sparky", "Golden Retriever");
let duke = new Dog("Duke", "Chichuahua");

let cata = new Cat("Cata", "white");
let badluck = new Cat("Bad Luck", "black");

//10. Make all the animals speak!
let farm = [sparky, duke, cata, badluck];
for (a of farm) {
	a.speak();
}

for (a of farm) {
	console.log(a.name);
}

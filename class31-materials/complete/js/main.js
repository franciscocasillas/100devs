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
		console.log(`${this._name} is speaking in tongues.`);
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
		console.log(`${this.name}, the ${this.breed}, is barking.`);
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
		console.log(`${this.name}, the ${this.color} cat, is meowing.`);
	}
}

//9. Create two dogs and two cats
const simba = new Dog("Simba", "cocker spaniel");
const cosita = new Dog("Cosita", "chihuahua");
const garfield = new Cat("Garfield", "orange");
const misha = new Cat("Misha", "gray");

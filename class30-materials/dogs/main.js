class Dog {
	constructor(name, breed, measurement) {
		this.name = name;
		this.breed = breed;
		this.measurement = measurement;
	}

	presentation() {
		console.log(
			`${this.name} is a ${this.breed} dog measuring ${this.measurement}`
		);
	}

	barking() {
		let bark = "";
		if (this.measurement > 60) {
			bark = "Grrr! Grrr!";
		} else {
			bark = "Woof! Woof!";
		}
		console.log(`Look, a cat! ${this.name} barks: ${bark}`);
	}
}

let fang = new Dog("Fang", "boarhound", 75);
let snowy = new Dog("Snowy", "terrier", 22);

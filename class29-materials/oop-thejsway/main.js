// Exercise 1

class Dog {
	constructor(name, species, size) {
		(this.name = name),
			(this.species = species),
			(this.size = size),
			(this.bark = function () {
				if (this.size > 60) {
					return "Grrr! Grrr!";
				} else {
					return "Woof! Woof";
				}
			});
	}
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// Exercise 2

class Character {
	constructor(name, health, strength) {
		this.name = name;
		this.health = health;
		this.strength = strength;
		this.xp = 0;
		this.gold = 10;
		this.keys = 1;
	}
	attack(target) {
		if (this.health > 0) {
			const damage = this.strength;
			console.log(
				`${this.name} attacks ${target.name} and causes ${damage} damage points`
			);
			target.health -= damage;
			if (target.health > 0) {
				console.log(`${target.name} has ${target.health} health points left`);
			} else {
				target.health = 0;
				const bonusXP = 10;
				console.log(
					`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.gold} gold and ${target.keys} key(s)`
				);
				this.xp += bonusXP;
				this.gold += target.gold;
				this.keys += target.keys;
			}
		} else {
			console.log(`${this.name} can’t attack (they've been eliminated)`);
		}
	}
	describe() {
		return `${this.name} has ${this.health} health points, ${this.strength} as strength, ${this.xp} XP points, ${this.gold} gold and ${this.keys} key(s)`;
	}
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());

// Exercise 3
class Account {
	constructor(name, credit) {
		this.name = name;
		this.balance = 0;
		this.credit = function (amount) {
			this.balance += amount;
		};
	}
	describe() {
		console.log(`Account owner: ${this.name}, Balance: ${this.balance}`);
	}
}

const sean = new Account("Sean", 300);
const brad = new Account("Brad", 700);
const georges = new Account("Georges", 50000);

const accounts = [sean, brad, georges];

accounts.forEach((account) => {
	account.balance += 1000;
	account.describe();
});

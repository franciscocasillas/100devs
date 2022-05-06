// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism

// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }

class Contractor {
	constructor(name, role) {
		this._name = name;
		this._role = role;
	}
	get name() {
		return this._name;
	}
	get role() {
		return this._role;
	}
	hello() {
		console.log(
			`${this.name}, the ${this.role} at our Agency waves hello at you.`
		);
	}
}

class Frontend extends Contractor {
	constructor(name, role, tech) {
		super(name, role);
		this._tech = tech;
	}
	get tech() {
		return this._tech;
	}
	hello() {
		console.log(
			`Hey, I am ${this.name}, the ${this.role} at #100devs and I use ${this.tech}.`
		);
	}
}

class Backend extends Contractor {
	constructor(name, role, tech) {
		super(name, role);
		this._tech = tech;
	}
	get tech() {
		return this._tech;
	}
	hello() {
		console.log(
			`Hallo, I am ${this.name}, the ${this.role} at #100devs and I'm scared of CSS, that's why I'd rather use ${this.tech}`
		);
	}
}

let leon = new Contractor("Leon", "Product Manager");
let max = new Frontend("Max", "Frontend Developer", "CSS");
let benji = new Backend("Benji", "Backend Developer", "React");

let agency = [leon, max, benji];

for (a of agency) {
	a.hello();
}

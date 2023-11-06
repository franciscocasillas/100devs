//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function CreateCharacter(name, age, gender, power, scream, catchPhrase) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.power = power;

	this.scream = function () {
		console.log(scream);
	};
	this.catchPhrase = function () {
		console.log(catchPhrase);
	};
}

let eHonda = new CreateCharacter(
	"Honda",
	35,
	"male",
	"leg kick",
	"yata",
	"Whatever, dude!"
);

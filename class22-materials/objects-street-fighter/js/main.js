//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeFighter(
	fighterName,
	fighterAge,
	fighterType,
	fighterYell,
	fighterPower
) {
	this.name = fighterName;
	this.age = fighterAge;
	this.type = fighterType;
	this.yell = function () {
		console.log(fighterYell);
	};
	this.power = function () {
		console.log(fighterPower);
	};
}

let honda = new MakeFighter(
	"Honda",
	33,
	"Heavy weight",
	"You're dead",
	"Confess before you die"
);

let chunLi = new MakeFighter(
	"Chun Li",
	27,
	"Fast player",
	"Yata",
	"You won't survive this!"
);

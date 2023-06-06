//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function MakeFighter(
	name,
	gender,
	age,
	specialPower,
	specialKick,
	specialFist,
	phrase
) {
	(this.name = name),
		(this.gender = gender),
		(this.age = age),
		(this.specialPower = specialPower),
		(this.specialKick = function () {
			console.log(specialKick);
		}),
		(this.specialFist = function () {
			console.log(specialFist);
		}),
		(this.phrase = function () {
			console.log(phrase);
		});
}

const chunLi = new MakeFighter(
	"Chun Li",
	"female",
	26,
	"Power kicks",
	"You won't survive this!",
	"This is deadly",
	"Love me not!"
);

const Honda = new MakeFighter(
	"E. Honda",
	"male",
	32,
	"Power hits",
	"You are not my enemy",
	"You have no chance",
	"Have fun!"
);

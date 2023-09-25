//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeShow {
	constructor(region, genre, language, seasons) {
		this.region = region;
		this.genre = genre;
		this.language = language;
		this.seasons = seasons;
	}
	play() {
		alert("Let's start the show!");
	}
	stop() {
		alert("See you soon");
	}
}

let gossipGirl = new MakeShow("USA", "teen drama", "english", 10);

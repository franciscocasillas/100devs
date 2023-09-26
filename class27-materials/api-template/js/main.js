//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
	const choice = document.querySelector("input").value;
	const url = `https://api.nasa.gov/planetary/apod?api_key=6HsGHlzG87cIYac5QVrGDuFkk5HHzkWgX77GbKzh&date=${choice}`;

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data);
			if (data.media_type === "image") {
				document.querySelector("img").style.display = "block";
				document.querySelector("iframe").style.display = "none";
				document.querySelector("img").src = data.hdurl;
				document.querySelector("h3").innerText = data.explanation;
			} else if (data.media_type === "video") {
				document.querySelector("img").style.display = "none";
				document.querySelector("iframe").style.display = "block";
				document.querySelector("iframe").src = data.url;
				document.querySelector("h3").innerText = data.explanation;
			}
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

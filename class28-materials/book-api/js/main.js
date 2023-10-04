//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
	const choice = document.querySelector("input").value;
	const url = `https://openlibrary.org/isbn/${choice}.json`;
	const imgurl = `https://covers.openlibrary.org/b/isbn/${choice}-M.jpg`;

	fetch(url)
		.then((res) => res.json()) //
		.then((data) => {
			localStorage.setItem("book", data.title);
			document.querySelector("h2").innerText = localStorage.getItem("book");
			document.querySelector("img").src = imgurl;
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

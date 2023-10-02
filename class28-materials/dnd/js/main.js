//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
	const choice = document.querySelector("input").value;
	const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.subclasses.length);
			for (let i = 0; i < data.subclasses.length; i++) {
				const ul = document.querySelector("ul");
				const li = document.createElement("li");
				li.textContent = data.subclasses[i].name;
				ul.appendChild(li);
			}
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

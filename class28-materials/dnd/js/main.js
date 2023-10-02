//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
	const choice = document.querySelector("input").value;
	const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

	fetch("https://www.dnd5eapi.co/api/subclasses")
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			const subclasses = [];
			for (let i = 0; i < data.count; i++) {
				subclasses.push(data.results[i].name);
			}
			console.log(subclasses);
			const ul = document.querySelector("ul");
			subclasses.forEach((item) => {
				const li = document.createElement("li");
				li.textContent = item;
				ul.appendChild(li);
			});
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

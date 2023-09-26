//Create a button that adds 1 to a botScore stored in localStorage

if (!localStorage.getItem("counter")) {
	localStorage.setItem("counter", 0);
}

document.querySelector("button").addEventListener("click", addOne);

function addOne() {
	let sum = Number(localStorage.getItem("counter"));
	sum += 1;
	localStorage.setItem("counter", sum);
	document.querySelector("h2").innerText = sum;
}

localStorage.removeItem("count");

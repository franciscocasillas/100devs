document.querySelector("#andiNext").addEventListener("click", andiNext);
document.querySelector("#claireNext").addEventListener("click", claireNext);
document.querySelector("#sharleenNext").addEventListener("click", sharleenNext);

let andi = document.querySelector("#andi");
let claire = document.querySelector("#claire");
let sharleen = document.querySelector("#sharleen");

function andiNext() {
	andi.classList.toggle("hidden");
	claire.classList.add("hidden");
	sharleen.classList.add("hidden");
}

function claireNext() {
	andi.classList.add("hidden");
	claire.classList.toggle("hidden");
	sharleen.classList.add("hidden");
}

function sharleenNext() {
	andi.classList.add("hidden");
	claire.classList.add("hidden");
	sharleen.classList.toggle("hidden");
}

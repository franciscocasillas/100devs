//Set first player!
let currentPlayer = "x";
document.querySelector(".player").innerText = "Player's X turn";

//Change player
function changePlayer() {
	if (currentPlayer === "x") {
		currentPlayer = "o";
		document.querySelector(".player").innerText = "Player's O turn";
	} else {
		currentPlayer = "x";
		document.querySelector(".player").innerText = "Player's X turn";
	}
}

// 3. Add event listener to every single square
document.querySelector("#a1").addEventListener("click", () => {
	gamePlay("#a1");
});
document.querySelector("#a2").addEventListener("click", () => {
	gamePlay("#a2");
});
document.querySelector("#a3").addEventListener("click", () => {
	gamePlay("#a3");
});
document.querySelector("#b1").addEventListener("click", () => {
	gamePlay("#b1");
});
document.querySelector("#b2").addEventListener("click", () => {
	gamePlay("#b2");
});
document.querySelector("#b3").addEventListener("click", () => {
	gamePlay("#b3");
});
document.querySelector("#c1").addEventListener("click", () => {
	gamePlay("#c1");
});
document.querySelector("#c2").addEventListener("click", () => {
	gamePlay("#c2");
});
document.querySelector("#c3").addEventListener("click", () => {
	gamePlay("#c3");
});

function gamePlay(square) {
	if (currentPlayer === "x") {
		document.querySelector(square).classList.add("exes");
		document.querySelector(square).style.backgroundColor = "green";
		checkWin();
		changePlayer();
	} else {
		document.querySelector(square).classList.add("os");
		document.querySelector(square).style.backgroundColor = "purple";
		checkWin();
		changePlayer();
	}
}
// 5. Check out if the player won
function checkWin() {
	if (currentPlayer === "x") {
		if (
			document.querySelector("#a1").classList.contains("exes") &&
			document.querySelector("#a2").classList.contains("exes") &&
			document.querySelector("#a3").classList.contains("exes")
		) {
			document.querySelector(".winner").innerText = "Player X won!";
		} else if (
			document.querySelector("#a1").classList.contains("exes") &&
			document.querySelector("#b1").classList.contains("exes") &&
			document.querySelector("#c1").classList.contains("exes")
		) {
			document.querySelector(".winner").innerText = "Player X won!";
		} else if (
			document.querySelector("#b1").classList.contains("exes") &&
			document.querySelector("#b2").classList.contains("exes") &&
			document.querySelector("#b3").classList.contains("exes")
		) {
			document.querySelector(".winner").innerText = "Player X won!";
		} else if (
			document.querySelector("#c1").classList.contains("exes") &&
			document.querySelector("#c2").classList.contains("exes") &&
			document.querySelector("#c3").classList.contains("exes")
		) {
			document.querySelector(".winner").innerText = "Player X won!";
		} else if (
			document.querySelector("#a2").classList.contains("exes") &&
			document.querySelector("#b2").classList.contains("exes") &&
			document.querySelector("#c2").classList.contains("exes")
		) {
			document.querySelector(".winner").innerText = "Player X won!";
		} else if (
			document.querySelector("#a3").classList.contains("exes") &&
			document.querySelector("#b3").classList.contains("exes") &&
			document.querySelector("#c3").classList.contains("exes")
		) {
			document.querySelector(".winner").innerText = "Player X won!";
		} else if (
			document.querySelector("#a1").classList.contains("exes") &&
			document.querySelector("#b2").classList.contains("exes") &&
			document.querySelector("#c3").classList.contains("exes")
		) {
			document.querySelector(".winner").innerText = "Player X won!";
		} else if (
			document.querySelector("#c1").classList.contains("exes") &&
			document.querySelector("#b2").classList.contains("exes") &&
			document.querySelector("#a3").classList.contains("exes")
		) {
			document.querySelector(".winner").innerText = "Player X won!";
		}
	} else {
		if (
			document.querySelector("#a1").classList.contains("os") &&
			document.querySelector("#a2").classList.contains("os") &&
			document.querySelector("#a3").classList.contains("os")
		) {
			document.querySelector(".winner").innerText = "Player O won!";
		} else if (
			document.querySelector("#a1").classList.contains("os") &&
			document.querySelector("#b1").classList.contains("os") &&
			document.querySelector("#c1").classList.contains("os")
		) {
			document.querySelector(".winner").innerText = "Player O won!";
		} else if (
			document.querySelector("#b1").classList.contains("os") &&
			document.querySelector("#b2").classList.contains("os") &&
			document.querySelector("#b3").classList.contains("os")
		) {
			document.querySelector(".winner").innerText = "Player O won!";
		} else if (
			document.querySelector("#c1").classList.contains("os") &&
			document.querySelector("#c2").classList.contains("os") &&
			document.querySelector("#c3").classList.contains("os")
		) {
			document.querySelector(".winner").innerText = "Player O won!";
		} else if (
			document.querySelector("#a2").classList.contains("os") &&
			document.querySelector("#b2").classList.contains("os") &&
			document.querySelector("#c2").classList.contains("os")
		) {
			document.querySelector(".winner").innerText = "Player O won!";
		} else if (
			document.querySelector("#a3").classList.contains("os") &&
			document.querySelector("#b3").classList.contains("os") &&
			document.querySelector("#c3").classList.contains("os")
		) {
			document.querySelector(".winner").innerText = "Player O won!";
		} else if (
			document.querySelector("#a1").classList.contains("os") &&
			document.querySelector("#b2").classList.contains("os") &&
			document.querySelector("#c3").classList.contains("os")
		) {
			document.querySelector(".winner").innerText = "Player O won!";
		} else if (
			document.querySelector("#c1").classList.contains("os") &&
			document.querySelector("#b2").classList.contains("os") &&
			document.querySelector("#a3").classList.contains("os")
		) {
			document.querySelector(".winner").innerText = "Player O won!";
		}
	}
}
// 6. Reset everything

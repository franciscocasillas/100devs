const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const rappers = {
	"21 savage": {
		age: 29,
		brithName: "Shéyaa Bin Abraham-Joseph",
		brithLocation: "London, England",
	},
	"Chance the Rapper": {
		age: 29,
		birthName: "Chancelor Bennett",
		brithLocation: "Chicago, Illinois",
	},
	unknown: {
		age: 0,
		birthName: "unknown",
		brithLocation: "unkown",
	},
};

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
	res.json(rappers);
});

app.get("/api/:name", (req, res) => {
	const rapperName = req.params.name.toLowerCase();
	if (rappers[rapperName]) {
		res.json(rappers[rapperName]);
	} else {
		res.json(rappers["unknown"]);
	}
});

const PORT = process.env.PORT || 8000; //Listens to the specific environment port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

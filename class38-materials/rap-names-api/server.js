const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const rappers = {
	"21 savage": {
		age: 29,
		birthName: "Shéyaa Bin Abraham-Joseph",
		birthLocation: "London, England",
	},
	"chance the rapper": {
		age: 40,
		brithName: "Chancelor Bennet",
		birthLocation: "Chicago, Illinois",
	},
	"nikki minaj": {
		age: 29,
		brithName: "Onika Tanya Maraj-Petty",
		birthLocation: "Sain James, Port of Spain, Trinidad and Tobago",
	},
};

app.get("/", (request, response) => {
	response.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (request, response) => {
	const rapperName = request.params.rapperName.toLowerCase();
	if (rappers[rapperName]) {
		response.json(rappers[rapperName]);
	} else {
		response.json(rappers["nikki minaj"]);
	}
	response.json(rappers);
});

app.listen(process.env.PORT || PORT, () => {
	console.log(`Your PORT is running inside of port ${PORT}`);
});

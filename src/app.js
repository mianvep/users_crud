const express = require("express");
const usersCrud = require("./users/routes");

const app = express();
app.use(express.json());

app.use("/", usersCrud);

app.get("/", (req, res) => {
	res.status(200).json({ message: "Server OK!" });
});

app.listen(5000, () => {
	console.log("Server listening on port 5000");
});

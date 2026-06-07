const express = require("express");

const app = express();

app.get("/", (req, res) => {
 res.send("Hello from Jenkins Pipeline to AWS ECR!");
});

app.listen(3000, () => {
 console.log("App running on port 3000");
});

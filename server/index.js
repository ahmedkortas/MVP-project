const express = require("express");
let app = express();
let PORT = 3000;
const pet = require("../database/Pet.js");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.static(__dirname + "/../public"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/Pet", function (req, res) {
  let obj = req.body;
  pet.create(obj).then((data) => {
    str = JSON.stringify(data);
    res.send(data);
  });
});

app.get("/api/Pet", (req, res) => {
  pet.findAll().then((data) => {
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log("server is connected");
});

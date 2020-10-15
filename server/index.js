const express = require("express");
let app = express();
let PORT = 3000;
const bodyParser = require("body-parser");

app.use(express.static(__dirname + ""));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log("server is connected");
});

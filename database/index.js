const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost/Petfind";

const db = mongoose.connect(mongoUri);

module.exports = db;

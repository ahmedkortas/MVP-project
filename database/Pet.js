const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;

const petSchema = new mongoose.Schema({
  name: String,
  ownerName: String,
  imageUrl: String,
  description: String,
  gender: String,
  race: String,
  age: Number,
});

let Pet = mongoose.model("Pet", petSchema);

module.exports.findAll = () => {
  return new Promise((resolve, reject) => {
    Pet.find({}, (err, data) => {
      resolve(data);
    });
  });
};

module.exports.create = (obj) => {
  return new Promise((resolve, reject) => {
    Pet.create(obj, (err, data) => {
      resolve(data);
    });
  });
};

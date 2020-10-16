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

const adoptedPetSchema = new mongoose.Schema({
  name: String,
  ownerName: String,
  imageUrl: String,
  description: String,
  gender: String,
  race: String,
  age: Number,
  newOwnerEmail: String,
  email: String,
});

let AdoptedPet = mongoose.model("adoptedPet", adoptedPetSchema);

let Pet = mongoose.model("Pet", petSchema);

module.exports.findAndChange = (obj) => {
  return new Promise((resolve, reject) => {
    Pet.findOneAndDelete(
      { name: obj.name, imageUrl: obj.imageUrl },
      (err, result) => {
        if (err) return reject(err);
        AdoptedPet.create(obj, (err, data) => {
          if (err) return reject(err);
          resolve(data);
        });
      }
    );
  });
};

module.exports.findAll = () => {
  return new Promise((resolve, reject) => {
    Pet.find({}, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

module.exports.create = (obj) => {
  return new Promise((resolve, reject) => {
    Pet.create(obj, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

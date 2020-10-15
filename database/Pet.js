const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const petSchema = new mongoose.Schema({
  name: String,
  ownerName: String,
  imageUrl: String,
  description: String,
  gender : String,
  race:String,
  age : Number
}
);

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
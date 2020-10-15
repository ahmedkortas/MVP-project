const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  firstName: String,
  secondName: String,
  adress: String,
  email: String,
  birthday: Date,
  cardNumber: Number,
  PhoneNumber: Number,
});
let User = mongoose.model("User", userSchema);

module.exports.create = (obj) => {
  return new Promise((resolve, reject) => {
    User.create(obj, (err, data) => {
      resolve(data);
    });
  });
};

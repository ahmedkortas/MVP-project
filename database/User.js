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
  password: String,
});
let User = mongoose.model("User", userSchema);

module.exports.findUser = (obj) => {
  return new Promise((resolve, reject) => {
    let email = obj.email;
    User.findOne({ email: email }, (err, user) => {
      if (err) return reject(err);
      if (user === null) {
        resolve(null);
      } else {
        resolve(user);
      }
    });
  });
};

module.exports.create = (obj) => {
  return new Promise((resolve, reject) => {
    let email = obj.email;
    User.findOne({ email: email }, (err, data) => {
      if (err) return reject(err);
      if (data === null) {
        User.create(obj, (err, data) => {
          if (err) return reject(err);
          resolve(data);
        });
      } else {
        resolve("exists");
      }
    });
  });
};

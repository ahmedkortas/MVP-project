const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  firstName: String,
  secondName:String,
  adress: String,
  email: String,
  birthday : Date,
  cardNumber:Number,
  PhoneNumber : Number
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;
// User.js
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  nom: { type : String, trim: true, required : true },
  email: { type : String , unique : true, lowercase: true, trim: true, required : true },
  hash_password: { type : String , required : true },
  profil: { type : String , enum: ['ADMIN', 'USER', 'READONLY'], default: "READONLY", required : true },
  created: { type : Date, default: Date.now, required : true },
});
UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.hash_password);
}

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
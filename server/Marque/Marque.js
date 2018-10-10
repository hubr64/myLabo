// Marque.js
var mongoose = require('mongoose');
var MarqueSchema = new mongoose.Schema({
  nom: { type : String , unique : true, required : true },
  telephone: { type : String , required : true },
  mail: { type : String , unique : true, required : true },
  web: String,
  adresse: String,
  commentaire: String
});
mongoose.model('Marque', MarqueSchema);

module.exports = mongoose.model('Marque');
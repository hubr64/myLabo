// Objet.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjetSchema = new Schema({
  designation: { type : String , unique : true, required : true },
  categorie: {type: Schema.Types.ObjectId, ref: 'Categorie', required : true},
  quantite: { type : Number, required : true },
  unite: String,
  seuil_alerte: Number,
  dangers: String,
  localisation: String,
  commentaire: String,
  reference: String,
  marque: {type: Schema.Types.ObjectId, ref: 'Marque'},
  prix: Number
});
mongoose.model('Objet', ObjetSchema);

module.exports = mongoose.model('Objet');
// Fiche.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FicheObjetSchema = new Schema({
  quantite: { type : Number , required : true },
  objet: {type: Schema.Types.ObjectId, ref: 'Objet', required : true},
  commentaire: String,
});

var FicheSchema = new Schema({
  nom: { type : String , required : true },
  description: { type : String , required : true },
  protocole: String,
  categorie: {type: Schema.Types.ObjectId, ref: 'Categorie', required : true},
  objets_professeur: [FicheObjetSchema],
  objets_eleve: [FicheObjetSchema],
});

var FicheObjet = mongoose.model('FicheObjet', FicheObjetSchema);
var Fiche = mongoose.model('Fiche', FicheSchema);


exports.Fiche = Fiche;
exports.FicheObjet = FicheObjet;
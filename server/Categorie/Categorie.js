// Categorie.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorieSchema = new Schema({
  nom:  { type : String , unique : true, required : true },
  parent: {type: Schema.Types.ObjectId, ref: 'Categorie'},
});
mongoose.model('Categorie', CategorieSchema);

module.exports = mongoose.model('Categorie');
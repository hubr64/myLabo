// SearchController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Objet     = require('./Objet/Objet');
var Marque    = require('./Marque/Marque');
var Categorie = require('./Categorie/Categorie');

var FicheModel = require('./Fiche/Fiche');
var Fiche = FicheModel.Fiche;
var FicheObjet = FicheModel.FicheObjet;

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

router.get('/:criteria', async function (req, res) {

  var criteria = req.params.criteria;
  var pattern = '.*'+criteria+'.*'
  var result = [];

  var promise = Marque.find({ $or: [{nom: { $regex: pattern, $options:'i' } }, {commentaire: { $regex: pattern, $options:'i' } }] }).exec();

  promise.then(function(marques) {
    for(var marque of marques) {
      result.push({type:"marque",_id:marque._id,titre:marque.nom})
    }
    return Categorie.find({nom: { $regex: pattern, $options:'i' } }).exec();
  })
  .then(function(categories) {
    for(var categorie of categories) {
      result.push({type:"categorie",_id:categorie._id,titre:categorie.nom,img:categorie._id})
    }
    return Fiche.find({ $or: [{nom: { $regex: pattern, $options:'i' } }, {description: { $regex: pattern, $options:'i' } }, {protocole: { $regex: pattern, $options:'i' } }] }).exec();
  })
  .then(function(fiches) {
    for(var fiche of fiches) {
      result.push({type:"fiche",_id:fiche._id,titre:fiche.nom,img:fiche.categorie})
    }
    return Objet.find({ $or: [{designation: { $regex: pattern, $options:'i' } }, {localisation: { $regex: pattern, $options:'i' } }, {commentaire: { $regex: pattern, $options:'i' } }, {reference: { $regex: pattern, $options:'i' } }] }).exec();
  })
  .then(function(objets) {
    for(var objet of objets) {
      result.push({type:"objet",_id:objet._id,titre:objet.designation,img:objet.categorie})
    }
    res.status(200).send(result);
  })
  .catch(function(err){
    // just need one of these
    console.error('error:', err);
  });
});

module.exports = router;
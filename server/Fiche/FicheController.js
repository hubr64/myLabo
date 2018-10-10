// FicheController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var UserController = require('../User/UserController');
var FicheModel     = require('./Fiche');

var Fiche      = FicheModel.Fiche;
var FicheObjet = FicheModel.FicheObjet;

router.post('/', UserController.loginRequired, function (req, res) {

  var fiche = new Fiche;
  fiche.nom = req.body.nom,
  fiche.description = req.body.description,
  fiche.protocole = req.body.protocole,
  fiche.categorie = req.body.categorie,
  fiche.objets_professeur = [];
  fiche.objets_eleve = [];

  for (var i = 0; i < req.body.objets_professeur.length; i++) {
      var fiche_objet = new FicheObjet;
      fiche_objet.quantite = req.body.objets_professeur[i].quantite;
      fiche_objet.objet = req.body.objets_professeur[i].objet;
      fiche_objet.commentaire = req.body.objets_professeur[i].commentaire;
      fiche.objets_professeur.push(fiche_objet);
  }
  for (var i = 0; i < req.body.objets_eleve.length; i++) {
      var fiche_objet = new FicheObjet;
      fiche_objet.quantite = req.body.objets_eleve[i].quantite;
      fiche_objet.objet = req.body.objets_eleve[i].objet;
      fiche_objet.commentaire = req.body.objets_eleve[i].commentaire;
      fiche.objets_eleve.push(fiche_objet);
  }

  Fiche.create(fiche,
    function (err, fiche) {
        if (err) {
          console.error("Impossible de créer la fiche dans la base de données" + err);
          return res.status(500).send("Impossible de créer la fiche dans la base de données.");
        }
        console.log("Création fiche : " + fiche);
        res.status(200).send(fiche);
  });

});

router.get('/', UserController.loginRequired, function (req, res) {

    var query_tmp = req.query;
    if(query_tmp.objet){
        query_tmp = { $or: [{'objets_professeur.objet': query_tmp.objet}, {'objets_eleve.objet': query_tmp.objet}] }
    }

    Fiche.find(query_tmp,  function (err, fiches) {
        if (err) {
          console.error("Impossible de récupérer la liste des fiches" + err);
          return res.status(500).send("Impossible de récupérer la liste des fiches.");
        }
        console.log("Liste des fiches");
        res.status(200).send(fiches);
    }).collation({locale:'fr',strength: 2}).sort({nom: 1});

});

router.get('/:id', UserController.loginRequired, function (req, res) {

    Fiche.findById(req.params.id, function (err, fiche) {
        if (err) {
          console.error("Impossible de récupérer la fiche demandée" + err);
          return res.status(500).send("Impossible de récupérer la fiche demandée.");
        }
        if (!fiche) {
          console.error("Aucune fiche n'existe avec cet identifiant");
          return res.status(404).send("Aucune fiche n'existe avec cet identifiant.");
        }
        console.log("Récupération fiche : " + fiche);
        res.status(200).send(fiche);
    })
    .populate('objets_professeur')
    .populate('objets_professeur.objet')
    .populate('objets_eleve')
    .populate('objets_eleve.objet')
    .populate('categorie')
    .exec();

});

router.put('/:id', UserController.loginRequired, function (req, res) {

  var fiche = Object.assign({}, req.body);
  fiche.objets_professeur = [];
  fiche.objets_eleve = [];

  for (var i = 0; i < req.body.objets_professeur.length; i++) {
      var fiche_objet = new FicheObjet;
      fiche_objet.quantite = req.body.objets_professeur[i].quantite;
      fiche_objet.objet = req.body.objets_professeur[i].objet;
      fiche_objet.commentaire = req.body.objets_professeur[i].commentaire;
      fiche.objets_professeur.push(fiche_objet);
  }
  for (var i = 0; i < req.body.objets_eleve.length; i++) {
      var fiche_objet = new FicheObjet;
      fiche_objet.quantite = req.body.objets_eleve[i].quantite;
      fiche_objet.objet = req.body.objets_eleve[i].objet;
      fiche_objet.commentaire = req.body.objets_eleve[i].commentaire;
      fiche.objets_eleve.push(fiche_objet);
  }

  Fiche.findByIdAndUpdate(req.params.id, fiche, {new: true}, function (err, fiche) {
      if (err) {
        console.error("Impossible de mettre à jour la fiche demandée ("+req.params.id+")" + err);
        return res.status(500).send("Impossible de mettre à jour la fiche demandée ("+req.params.id+")");
      }
      console.log("Mise à jour fiche : " + fiche);
      res.status(200).send(fiche);
  });

});

router.delete('/:id', UserController.loginRequired, function (req, res) {

    Fiche.findByIdAndRemove(req.params.id, function (err, fiche) {
        if (err) {
          console.error("Impossible de supprimer la fiche demandée" + err);
          return res.status(500).send("Impossible de supprimer la fiche demandée.");
        }
        console.log("Suppression fiche : " + fiche);
        res.status(200).send(fiche);
    });

});

module.exports = router;
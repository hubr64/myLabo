// CategorieController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Categorie      = require('./Categorie');
var UserController = require('../User/UserController');

router.post('/', UserController.loginRequired, function (req, res) {

    Categorie.create({
          nom: req.body.nom,
          parent: req.body.parent
        },
        function (err, categorie) {
            if (err) {
              console.error("Impossible de créer la catégorie dans la base de données" + err);
              return res.status(500).send("Impossible de créer la catégorie dans la base de données.");
            }
            console.log("Création catégorie : " + categorie);
            res.status(200).send(categorie);
        });

});

router.get('/', UserController.loginRequired, function (req, res) {

    Categorie.find({}, function (err, categories) {
        if (err) {
          console.error("Impossible de récupérer la liste des catégories" + err);
          return res.status(500).send("Impossible de récupérer la liste des catégories.");
        }
        console.log("Liste des catégories");
        res.status(200).send(categories);
    }).populate('parent').collation({locale:'fr',strength: 2}).sort({nom: 1});
});

router.get('/:id', UserController.loginRequired, function (req, res) {

    Categorie.findById(req.params.id, function (err, categorie) {
        if (err) {
          console.error("Impossible de récupérer la catégorie demandée" + err);
          return res.status(500).send("Impossible de récupérer la catégorie demandée.");
        }
        if (!categorie) {
          console.error("Aucune catégorie n'existe avec cet identifiant");
          return res.status(404).send("Aucune catégorie n'existe avec cet identifiant.");
        }
        console.log("Récupération catégorie : " + categorie);
        res.status(200).send(categorie);
    }).populate('parent');

});

router.put('/:id', UserController.loginRequired, function (req, res) {

    Categorie.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, categorie) {
        if (err) {
          console.error("Impossible de mettre à jour la catégorie demandée ("+req.params.id+")" + err);
          return res.status(500).send("Impossible de mettre à jour la catégorie demandée ("+req.params.id+")");
        }
        console.log("Mise à jour catégorie : " + categorie);
        res.status(200).send(categorie);
    });

});

router.delete('/:id', UserController.loginRequired, function (req, res) {

    Categorie.findByIdAndRemove(req.params.id, function (err, categorie) {
        if (err) {
          console.error("Impossible de supprimer la catégorie demandée" + err);
          return res.status(500).send("Impossible de supprimer la catégorie demandée.");
        }
        console.log("Suppression catégorie : " + categorie);
        res.status(200).send(categorie);
    });

});

module.exports = router;
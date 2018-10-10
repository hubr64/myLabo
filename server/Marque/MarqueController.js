// MarqueController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Marque         = require('./Marque');
var UserController = require('../User/UserController');

router.post('/', UserController.loginRequired, function (req, res) {

    Marque.create({
          nom: req.body.nom,
          telephone: req.body.telephone,
          mail: req.body.mail,
          web: req.body.web,
          adresse: req.body.adresse,
          commentaires: req.body.commentaire

        },
        function (err, marque) {
            if (err) {
              console.error("Impossible de créer le fournisseur dans la base de données" + err);
              return res.status(500).send("Impossible de créer le fournisseur dans la base de données.");
            }
            console.log("Création fournisseur : " + marque);
            res.status(200).send(marque);
        });

});

router.get('/', UserController.loginRequired, function (req, res) {

    Marque.find({}, function (err, marques) {
        if (err) {
          console.error("Impossible de récupérer la liste des fournisseurs" + err);
          return res.status(500).send("Impossible de récupérer la liste des fournisseurs.");
        }
        console.log("Liste des fournisseurs");
        res.status(200).send(marques);
    }).collation({locale:'fr',strength: 2}).sort({nom: 1});
});

router.get('/:id', UserController.loginRequired, function (req, res) {

    Marque.findById(req.params.id, function (err, marque) {
        if (err) {
          console.error("Impossible de récupérer le fournisseur demandé" + err);
          return res.status(500).send("Impossible de récupérer le fournisseur demandé.");
        }
        if (!marque) {
          console.error("Aucun fournisseur n'existe avec cet identifiant");
          return res.status(404).send("Aucun fournisseur n'existe avec cet identifiant.");
        }
        console.log("Récupération fournisseur : " + marque);
        res.status(200).send(marque);
    });

});

router.put('/:id', UserController.loginRequired, function (req, res) {

    Marque.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, marque) {
        if (err) {
          console.error("Impossible de mettre à jour le fournisseur demandé ("+req.params.id+")" + err);
          return res.status(500).send("Impossible de mettre à jour le fournisseur demandé ("+req.params.id+")");
        }
        console.log("Mise à jour fournisseur : " + marque);
        res.status(200).send(marque);
    });

});

router.delete('/:id', UserController.loginRequired, function (req, res) {

    Marque.findByIdAndRemove(req.params.id, function (err, marque) {
        if (err) {
          console.error("Impossible de supprimer le fournisseur demandé" + err);
          return res.status(500).send("Impossible de supprimer le fournisseur demandé.");
        }
        console.log("Suppression fournisseur : " + marque);
        res.status(200).send(marque);
    });

});

module.exports = router;
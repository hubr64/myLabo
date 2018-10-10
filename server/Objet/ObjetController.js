// ObjetController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Objet          = require('./Objet');
var UserController = require('../User/UserController');

router.post('/import', UserController.loginRequired, function (req, res) {

    var objets = req.body;
    for (var i = 0; i < objets.length; i++) {
        delete objets[i]._id;
    }

    Objet.create(objets,
        function (err, objets) {
            if (err) {
                console.error("Impossible de créer l'un des objets dans la base de données. " + err);
                return res.status(500).send("Impossible de créer l'un des objets dans la base de données.");
            }
            console.dir("Création des objet : " + objets);
            res.status(200).send(objets);
        });
});

router.post('/', UserController.loginRequired, function (req, res) {

    Objet.create({
        designation: req.body.designation,
        categorie: req.body.categorie,
        quantite: req.body.quantite,
        unite: req.body.unite,
        seuil_alerte: req.body.seuil_alerte,
        dangers: req.body.dangers,
        localisation: req.body.localisation,
        commentaire: req.body.commentaire,
        reference: req.body.reference,
        marque: req.body.marque,
        prix: req.body.prix
    },
    function (err, objet) {
        if (err) {
            console.error("Impossible de créer l'objet dans la base de données. " + err);
            return res.status(500).send("Impossible de créer l'objet dans la base de données.");
        }
        console.log("Création objet : " + objet);
        res.status(200).send(objet);
    });

});

router.get('/', UserController.loginRequired, function (req, res) {
    Objet.find(req.query, function (err, objets) {
        if (err) {
            console.error("Impossible de récupérer la liste des objets." + err);
            return res.status(500).send("Impossible de récupérer la liste des objets.");
        }
        console.log("Liste des objets");
        res.status(200).send(objets);
    }).populate('categorie').populate('marque').collation({locale:'fr',strength: 2}).sort({designation: 1});
});

router.get('/count', UserController.loginRequired, function (req, res) {
    Objet.find(req.query, function (err, objets) {
        if (err) {
            console.error("Impossible de récupérer le nombre d'objets." + err);
            return res.status(500).send("Impossible de récupérer le nombre d'objets.");
        }
        console.log("Nombre d'objets");
        res.status(200).send({"count":objets.length});
    });
});

router.get('/alert', UserController.loginRequired, function (req, res) {
    Objet.find({ $where : "this.quantite < this.seuil_alerte " }, function (err, objets) {
        if (err) {
            console.error("Impossible de récupérer la liste des objets en alerte." + err);
            return res.status(500).send("Impossible de récupérer la liste des objets en alerte.");
        }
        console.log("Liste des objets en alerte");
        res.status(200).send(objets);
    });
});



router.get('/:id', UserController.loginRequired, function (req, res) {

    Objet.findById(req.params.id, function (err, objet) {
        if (err) {
            console.error("Impossible de récupérer l'objet demandé." + err);
            return res.status(500).send("Impossible de récupérer l'objet demandé.");
        }
        if (!objet) {
            console.error("Aucun objet n'existe avec cet identifiant.");
            return res.status(404).send("Aucun objet n'existe avec cet identifiant.");
        }
        console.log("Récupération objet : " + objet);
        res.status(200).send(objet);
    }).populate('categorie').populate('marque');

});

router.put('/:id', UserController.loginRequired, function (req, res) {

    Objet.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, objet) {
        if (err) {
            console.error("Impossible de mettre à jour l'objet demandé ("+req.params.id+")" + err);
            return res.status(500).send("Impossible de mettre à jour l'objet demandé ("+req.params.id+")");
        }
        console.log("Mise à jour de l'objet : " + objet);
        res.status(200).send(objet);
    });

});

router.delete('/:id', UserController.loginRequired, function (req, res) {

    Objet.findByIdAndRemove(req.params.id, function (err, objet) {
        if (err) {
            console.error("Impossible de supprimer l'objet demandé" + err);
            return res.status(500).send("Impossible de supprimer l'objet demandé.");
        }
        console.log("Suppression de l'objet : " + objet);
        res.status(200).send(objet);
    });

});

module.exports = router;
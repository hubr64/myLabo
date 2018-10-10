// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

var User = require('./User');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

function adminRequired (req, res, next) {
  next();
  if (req.user && req.user.profil && req.user.profil == "ADMIN") {
    next();
  } else {
    return res.status(401).json('Vous devez être connecté en administrateur pour continuer !');
  }
};

router.post('/authenticate', async function (req, res) {

  User.findOne({email: req.body.email}, function(err, user) {
    if (err) {
      console.error("Impossible de récupérer l'utilisateur. " + err);
      return res.status(500).send("Impossible de récupérer l'utilisateur.");
    }
    if (!user) {
      console.error("Echec de connexion. Aucun utilisateur n'existe avec ce mail.");
      return res.status(404).send("Echec de connexion. Aucun utilisateur n'existe avec ce mail.");
    } else if (user) {
      if (!user.comparePassword(req.body.password)) {
        console.error("Echec de connexion. Mot de passe erroné.");
        return res.status(401).send("Echec de connexion. Mot de passe erroné.");
      } else {
        console.log("Récupération user : " + user);
        res.status(200).send({user: user, token: jwt.sign({ profil: user.profil, email: user.email, nom: user.nom, _id: user._id}, 'RESTFULAPIs')});
      }
    }
  });

});

router.post('/register', async function (req, res) {

  var newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function(err, user) {
    if (err) {
      console.error("Impossible de créer un nouvel utilisateur. " + err);
      return res.status(500).send("Impossible de créer un nouvel utilisateur.");
    } else {
      user.hash_password = undefined;
      res.status(200).send(user);
    }
  });

});

router.put('/:id', function (req, res) {

  if (req.user && req.user.profil && req.user.profil == "ADMIN") {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) {
            console.error("Impossible de mettre à jour l'utilisateur demandé ("+req.params.id+")" + err);
            return res.status(500).send("Impossible de mettre à jour l'utilisateur demandé ("+req.params.id+")");
        }
        console.log("Mise à jour de l'utilisateur : " + user);
        res.status(200).send(user);
    });
  }else{
    console.error("Utilisateur non habilité !");
    res.status(401).json('Vous devez être connecté en administrateur pour continuer !');
  }

});

router.get('/', function (req, res) {
  if (req.user && req.user.profil && req.user.profil == "ADMIN") {
    User.find({}, function (err, users) {
        if (err) {
            console.error("Impossible de récupérer la liste des utilisateurs." + err);
            return res.status(500).send("Impossible de récupérer la liste des utilisateurs.");
        }
        console.log("Liste des utilisateurs");
        res.status(200).send(users);
    }).collation({locale:'fr',strength: 2}).sort({nom: 1});
  }else{
    console.error("Utilisateur non habilité !");
    res.status(401).json('Vous devez être connecté en administrateur pour continuer !');
  }

});


router.delete('/:id', function (req, res) {

  if (req.user && req.user.profil && req.user.profil == "ADMIN") {
      User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) {
            console.error("Impossible de supprimer l'utilisateur demandé" + err);
            return res.status(500).send("Impossible de supprimer l'utilisateur demandé.");
        }
        console.log("Suppression de l'utilisateur : " + user);
        res.status(200).send(user);
    });
  }else{
    console.error("Utilisateur non habilité !");
    res.status(401).json('Vous devez être connecté en administrateur pour continuer !');
  }

});

exports.loginRequired = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json('Vous devez être connecté pour continuer !');
  }
};

module.exports.router = router;
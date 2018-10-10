// app.js
var express = require('express');
var app = express();
var db = require('./db');
var jwt = require('jsonwebtoken');

var ObjetController     = require('./Objet/ObjetController');
var MarqueController    = require('./Marque/MarqueController');
var CategorieController = require('./Categorie/CategorieController');
var SearchController    = require('./SearchController');
var FicheController     = require('./Fiche/FicheController');
var UserController      = require('./User/UserController');


app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");

    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
      jwt.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err, decode){
        if(err) {
          req.user = undefined;
          console.error('Impossible de vérifier le token JWT');
        }else{
          req.user = decode;
          console.log('Token JWT validé : ' + decode);
        }

        next();
      });
    }else{

      req.user = undefined;
      console.log('Aucun token JWT fourni.');
      next();
    }

});

app.use('/objets', ObjetController);
app.use('/marques', MarqueController);
app.use('/categories', CategorieController);
app.use('/search', SearchController);
app.use('/fiches', FicheController);
app.use('/users', UserController.router);

module.exports = app;
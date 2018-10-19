#!/usr/bin/env node

// server.js
var app = require('./app');
var port = process.env.PORT || 8080;

var server = app.listen(port, function() {
  console.log('myLaboServer est maintenant démarré sur le port ' + port);
});
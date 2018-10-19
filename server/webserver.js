#!/usr/bin/env node

var express = require('express');
var app = express();
var port = process.env.PORT || 8081;

app.use(express.static('public'));

var server = app.listen(port, function() {
  console.log('myLaboWebServer est maintenant démarré sur le port ' + port);
});
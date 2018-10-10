// db.js
var database_str = 'mongodb://localhost:27017';
var mongoose = require('mongoose');
mongoose.connect(database_str);
//mongoose.connect('mongodb://admin:1KiqvCKiNo4NZcYl@mylabo-shard-00-00-fjr4a.mongodb.net:27017,mylabo-shard-00-01-fjr4a.mongodb.net:27017,mylabo-shard-00-02-fjr4a.mongodb.net:27017/test?ssl=true&replicaSet=myLabo-shard-0&authSource=admin&retryWrites=true');

var db2 = mongoose.connection;

db2.on('error', console.error.bind(console, 'connection error:'));
db2.once('open', function() {
  console.log('Connexion à la base de données '+database_str+' réussie');
});
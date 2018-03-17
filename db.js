var mongoose = require('mongoose');

var connection = 'mongodb://localhost:27017/shoping_project';

mongoose.connect(connection, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', function (err) {
    console.log(err);
});
db.once('open', function () {
    console.log('connected to mongo');
});

module.exports = db;

const colorLog = require('chalk').default;

const db = require('mongodb');
const dbClient = db.MongoClient;

const dbUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

dbClient.connect(dbUrl, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log(colorLog.red.inverse('Unable to connect to the database'));
    }

    console.log(colorLog.green.inverse('Connection succed!!!'));
});
const colorLog = require('chalk').default;

const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const mongoUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

mongoClient.connect(mongoUrl, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log(colorLog.red.inverse('Unable to connect to the database'));
    }

    const db = client.db(dbName);
    db.collection('users').insertOne({
        name: 'Dzmitry',
        age: 35
    });

    console.log(colorLog.green.inverse('Connection succed!!!'));
});
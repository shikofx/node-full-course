const colorLog = require('chalk').default;

const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const mongoUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

mongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log(colorLog.red.inverse('Unable to connect to the database'));
    }

    const db = client.db(dbName);
    // db.collection('users').insertOne({
    //     name: 'Yarik',
    //     age: 35
    // }, (error, result) => {
    //     if(error){
    //         return console.log(colorLog.bgRed(error.code + ': ' + error.message));
    //     }
    //     console.log(result.ops);
    // });

    // console.log(colorLog.green.inverse('Connection succed!!!'));

    // db.collection('users').insertMany([{
    //     name: 'Tanya',
    //     age: 37
    // }, {
    //     name: 'Yarik',
    //     age: 14
    // }, {
    //     name: 'Arsi',
    //     age: 3
    // }], (error, result) => {
    //     if(error){
    //         return console.log(colorLog.bgRed(error.code + ': ' + error.message));
    //     }
    //     console.log(result.ops);
    // });

    db.collection('tasks').insertMany([{
        description: 'Insert docements to database',
        completed: false
    }, {
        description: 'Print log with result of the inserting',
        completed: false
    }], (error, result) => {
        if(error) {
            console.log(colorLog.bgRed(error.code + ": " + error.message));
        }

        console.log(result.ops)
    });
});
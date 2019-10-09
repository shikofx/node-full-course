const colorLog = require('chalk').default;

// const mongodb = require('mongodb');
// const mongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const mongoUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.id.length)
console.log(id.id);
console.log(id.toHexString().length)
console.log(id.getTimestamp())


MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log(colorLog.red.inverse('Unable to connect to the database'));
    }

    const db = client.db(dbName);
    db.collection('users').insertOne({
        _id: id,
        name: 'Yarik',
        age: 35
    }, (error, result) => {
        if(error){
            return console.log(colorLog.bgRed(error.code + ': ' + error.message));
        }
        console.log(result.ops);
    });

    
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

    // db.collection('tasks').insertMany([{
    //     description: 'Insert docements to database',
    //     completed: false
    // }, {
    //     description: 'Print log with result of the inserting',
    //     completed: false
    // }], (error, result) => {
    //     if(error) {
    //         console.log(colorLog.bgRed(error.code + ": " + error.message));
    //     }

    //     console.log(result.ops)
    // });
});
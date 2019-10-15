const colorLog = require('chalk').default;
const assert = require('assert');
// const mongodb = require('mongodb');
// const mongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const mongoUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

const id = new ObjectID();

MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error){
        return console.log(colorLog.bgRed(`Error ${error.code}: ${error.message}`));
    }
    
    console.log('Connected correctly to server');
    
    const db = client.db(dbName);
    
    // db.collection('users').findOne({ name: 'Yarik', age: 35 }, (error, user) => {
    //     if(error){
    //         return console.log(colorLog.bgRed(`Error ${error.code}: ${error.message}`));
    //     }
        
    //     console.log(user);
    // });

    // db.collection('users').findOne({ _id: new ObjectID("5d9dd89a53c92181ac509e2f") }, (error, user) => {
    //     if(error){
    //         return console.log(colorLog.bgRed(`Error ${error.code}: ${error.message}`));
    //     }
        
    //     console.log(user);
    // });
    
    // db.collection('users').find({ age: 35 }).count((error, count) => {
    //     if(error){
    //         return console.log(colorLog.bgRed(`Error ${error.code}: ${error.message}`));
    //     }

    //     console.log('It is found ' + count + ' items');
    // });

    // db.collection('users').find({ age: 35 }).toArray((error, users) => {
    //     if(error){
    //         return console.log(colorLog.bgRed(`Error ${error.code}: ${error.message}`));
    //     }
    //     console.log(users);
    // });

    // db.collection('tasks').findOne( { _id: new ObjectID('5d9ddd5faca4275e48a13202') } , (error, task) => {
    //     if(error){
    //         return console.log(colorLog.bgRed(`Error ${error.code}: ${error.message}`));
    //     }

    //     console.log(task);
    // });



    // db.collection('tasks').find( { completed: true } ).toArray((error, tasks) => {
    //     if(error){
    //         return console.log(colorLog.bgRed(`Error ${error.code}: ${error.message}`));
    //     }
        
    //     console.log(tasks);
    // })
    // db.collection('users').find({ name: 'Yarik' }).toArray((error, users) => {
    //     console.log(users);
    // });
    
        
    // db.collection('users').s
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Yarik',
    //     age: 35
    // }, (error, result) => {
        
    //     console.log(result.ops);
    // });

    
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
    //     completed: true
    // }, {
    //     description: 'Print log with result of the inserting',
    //     completed: true
    // }], (error, result) => {
    //     if(error) {
    //         console.log(colorLog.bgRed(error.code + ": " + error.message));
    //     }

    //     console.log(result.ops)
    // });
});
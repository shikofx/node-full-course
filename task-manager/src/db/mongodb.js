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
    
    //Delete any users with age with promises
    // db.collection('users').deleteMany({
    //     age: 35
    // }).then((result) => {
    //     console.log(result.result);
    // }).catch((error) => {
    //     console.log(error);
    // });
    //Delete one user with ID with promises
    // db.collection('users').deleteOne({
    //     _id: new ObjectID("5d9dd89a53c92181ac509e2f")
    // }).then((result) => {
    //     console.log(result.result);
    // }).catch((error) => {
    //     console.log(error);
    // });
    //Update tasks to complete with promises
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.result);
    // }).catch((error) => {
    //     console.log(error)
    // });

    //Update user's age with incremental operator of update API with promises
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5d9dff9a740f6f65a8fca5ee")
    // }, {
    //     $inc: {
    //         age: 5
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    //Update 1 field of document with promises
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5d9dff9a740f6f65a8fca5ee")
    // }, {
    //     $set: {
    //         name: 'Yari'
    //     }
    // });
    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    //findOne with callbacks
    // db.collection('users').findOne({ name: 'Yarik', age: 35 }, (error, user) => {
    //     if(error){
    //         return console.log(colorLog.bgRed(`Error ${error.code}: ${error.message}`));
    //     }
    //     console.log(user);
    // });

    //findOne with callbacks
    // db.collection('users').findOne({ _id: new ObjectID("5d9dd89a53c92181ac509e2f") }, (error, user) => {
    //     if(error){
    //         return console.log(colorLog.bgRed(`Error ${error.code}: ${error.message}`));
    //     }
        
    //     console.log(user);
    // });
    
    //find with callbacks
    // db.collection('users').find({ age: 35 }).count((error, count) => {
    //     if(error){
    //         return console.log(colorLog.bgRed(`Error ${error.code}: ${error.message}`));
    //     }

    //     console.log('It is found ' + count + ' items');
    // });

    //find with callbacks
    // db.collection('users').find({ age: 35 }).toArray((error, users) => {
    //     if(error){
    //         return console.log(colorLog.bgRed(`Error ${error.code}: ${error.message}`));
    //     }
    //     console.log(users);
    // });

    //findOne with callbacks
    // db.collection('tasks').findOne( { _id: new ObjectID('5d9ddd5faca4275e48a13202') } , (error, task) => {
    //     if(error){
    //         return console.log(colorLog.bgRed(`Error ${error.code}: ${error.message}`));
    //     }

    //     console.log(task);
    // });

    //find with callbacks
    // db.collection('tasks').find( { completed: true } ).toArray((error, tasks) => {
    //     if(error){
    //         return console.log(colorLog.bgRed(`Error ${error.code}: ${error.message}`));
    //     }
        
    //     console.log(tasks);
    // })
    // db.collection('users').find({  }).toArray((error, users) => {
    //     console.log(users);
    // });
    
    //insertOne with callbacks
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Yarik',
    //     age: 35
    // }, (error, result) => {
        
    //     console.log(result.ops);
    // });

    //insertMany with callbacks
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

    //insertMany with callbacks
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
const express = require('express');
const User = require('../models/user');
const router = new express.Router();

router.post('/user', async (req, res) => {
    const user = new User(req.body);
    try{
        await user.save();
        const token = await user.createNewToken();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
});

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredantials(req.body.email, req.body.password );
        const token = await user.createNewToken();
        res.send({ user, token });

    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get('/users', async (req, res) => {
    try{ 
        const users = await User.find({});
        if(!users){
            return res.status(404).send();
        }
        res.send(users);    
    } catch(error) {
        res.status(500).send(error.message);
    }
});

router.get('/user/:id', async (req, res) => {
    
    const _id = new ObjectID(req.params.id);
    try{
        const user = await User.findById(_id);
        if(!user){
            return res.status(404).send();
        }
        res.send(user);    
    } catch(error) {
        res.status().send(error.message);
    }
});

router.get('/users/with/name/:name', async (req, res) => {
    const name = req.params.name;
    try{
        const users = await User.find({ name: name });
        if(!users){
            return res.status(404).send();
        }
        res.send(users);
    } catch(error) {
        res.status(500).send(error.message);
    }
});

router.get('/users/with/age/:age', async (req, res) => {
    const age = req.params.age;
    try {
        const users = await User.find( { age:age } );
        if(!users){
            return res.status(404).send();
        }
        res.send(users);
    } catch(error) {
        res.status(500).send(error.message);
    };
});

router.get('/users/with/name/:name/age/:age', async (req, res) => {
    const name = req.params.name;
    const age = req.params.age;

    try{
        const users = await User.find({ name:name, age:age });
        if(!users){
            return res.status(404).send();
        }
        res.send(users);
    }catch(error) {
        res.status(500).send(error.message);
    };
});

router.patch('/user/:id', async (req, res) => {
    const _id = req.params.id;
    const newBody = req.body;
    const updates = Object.keys(newBody);
    const allowedUpdates = ['name', 'password', 'email', 'age'];
    const isValidOperation = updates.every(updateItem => allowedUpdates.includes(updateItem));
    if(!isValidOperation){
        return res.status(400).send({ error: 'Invalid parameters for update!' })
    }

    try {
        const user = await User.findById(req.params.id);
        updates.forEach((update) => user[update] = req.body[update]);

        await user.save();
        // const user = await User.findByIdAndUpdate(_id, newBody, { new: true, runValidators: true });
        if(!user){
            return res.status(404).send();
        }
        res.send(user);

    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.delete('/user/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const user = await User.findByIdAndDelete(id) ;
        if(!user){
            res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/task/:id', async (req, res) => {
    const id = req.params.id;
    try{    
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            res.status(404).send();
        }
        res.send(task);
    } catch(error) {
        res.status(500).send(error.message);
    }
});


module.exports = router;
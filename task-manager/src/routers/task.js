const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

router.post('/task', async (req, res) => {
    const task = new Task(req.body);
    try{
        await task.save();
        res.status(201).send(task);    
    } catch(error) {
        res.status(400);
        res.send(error.message);
    };
});

router.get('/tasks', async (req, res) => {
    try{
        const tasks = await Task.find( {} );
        if(!tasks){
            res.status(404).send();
        }
        res.send(tasks);
    }catch(error) {
        res.status(500).send(error.message);
    }
});

router.get('/task/:id', async (req, res) => {
    const _id = new ObjectID(req.params.id);
    try{
        const task = await Task.findById(_id);
        if(!task){
            res.status(404).send();
        }
        res.send(task);
    } catch(error) {
        res.status(500).send(error.message);
    }
});

router.get('/tasks/with/completed/:completed', async (req, res) => {
    const completed = req.params.completed;
    try{
        const tasks = await Task.find( { completed:completed } );
        if(!tasks){
            res.status(404).send();
        }
        res.send(tasks);
    } catch(error) {
        res.status(500).send(error.message);
    }
});


router.patch('/task/:id', async (req, res) => {
    const _id = req.params.id;
    const newBody = req.body;
    const updates = Object.keys(newBody);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every(updateItem => allowedUpdates.includes(updateItem));

    if(!isValidOperation){
        return res.status(400).send({ error: 'Invalid parameters for update' });
    }
    try{
        const task = await Task.findById(req.params.id);
        updates.forEach((update) => task[update] = req.body[update]);
        await task.save();
        
        if(!task){
            return res.status(404).send();
        }
        res.send(task);
    } catch(error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
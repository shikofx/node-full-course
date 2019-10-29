const mongoose = require('mongoose');
const colorLog = require('chalk');
const validator = require('validator');

const connectionUrl = 'mongodb://127.0.0.1:27017/task-manager-api'
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true, 
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password must not contain word "password"');
            } 
        }
    },  
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email');
            }
        }
    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number'); 
            }
        }
    }
});

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// const me = new User({
//     name: '     Dzmitry  ',
//     password: 'paord256',
//     email: 'dzmitry@mail.ru',
//     age: 35
// });

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(colorLog.bgRed(error.message))
// });

const myTask = new Task({
    description: '     Modify constraints of mongoose model    ',
    completed: 25
});

myTask.save().then(() => {
    console.log(myTask);
}).catch((error) => {
    console.log(colorLog.bgRed(error.message))
});
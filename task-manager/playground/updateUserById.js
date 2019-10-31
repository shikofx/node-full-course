require('../src/db/mongooseApp');
const User = require('../src/models/user')

User.findByIdAndUpdate('5db850af724d4e0dccf5ce88', { age: 125 } ).then(user => {
    console.log(user);
    return User.countDocuments( { age: 3});
}).then(count => {
    console.log(count);
}).catch(error => {
    console.log(error.message);
});
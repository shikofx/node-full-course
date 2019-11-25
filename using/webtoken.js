const jwt = require('jsonwebtoken');

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'this is my first token', { expiresIn: '7 days'});
    console.log(token);
    const isValid = jwt.verify(token, 'this is my first token');
    console.log(isValid);
}

myFunction();
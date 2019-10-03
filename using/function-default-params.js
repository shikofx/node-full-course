const color = require('chalk');

const greeting = (name = 'User') => {
     console.log(color.green.inverse('Hello ' + name));
}

greeting('Dima');

greeting();
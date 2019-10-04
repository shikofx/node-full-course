const fs = require('fs');
const chalk = require('chalk').default;

const person = {
    firstName: 'Dzmitry',
    lastName: 'Parkheichuk',
    age: 35,
    town: 'Minsk'
};

console.log(chalk.red('Writing person data to file "./files/person.json"......'))
personToJSON = JSON.stringify(person);
fs.writeFileSync('./files/person.json', personToJSON);

console.log(chalk.bgBlue.white('Direct reading from file with require("./files/person.json") --->>>>>'));
const personJsonFile = require('./files/person.json.js');
console.log('First name:', personJsonFile.firstName);
console.log('Last name: ', personJsonFile.lastName);
console.log('Age:       ', personJsonFile.age);
console.log('Town:      ', personJsonFile.town);

console.log(chalk.red('But we can not modify data directly '));


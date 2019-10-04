//chalk module installed as locally
const chalk = require('chalk').default;

console.log(chalk.blue('Hello. How are you???'));

console.log(chalk.bgCyan.bold.italic.underline.black('My name is Dzmitry'));

const yellowSuccess = chalk.yellow('Success is yellow!!!');
console.log(yellowSuccess);

const yellowBoldSuccess = chalk.bold.yellow('Success is bold and yellow!!!');
console.log(yellowBoldSuccess);

const yellowBoldSuccesBlueBackground = chalk.bold.bgWhite.blue('Success is bold and blue and have white background');
console.log(yellowBoldSuccesBlueBackground);

const redError = chalk.red.inverse.bold('Error!!!');
console.log(redError);
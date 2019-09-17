//chalk module installed as locally
const validator = require('validator');

console.log(validator.isEmail('sdf@sdf.com'));
console.log(validator.isURL('sdf.com'));
console.log(validator.isURL('https://sdf.com'));
console.log(validator.isURL('https:/sdf.com'));

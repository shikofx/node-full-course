const util = require('../notes-app/added-module/utils.js');
const getNotes = require('../notes-app/added-module/notes');


console.log(util.name);
console.log(util.add(4, -2));


msg = getNotes();
console.log(msg);

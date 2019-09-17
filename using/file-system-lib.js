//chalk module installed as Globally
const fs = require('fs')

fs.writeFileSync('./files/note.txt', 'This file was created by Node.js! \n');
fs.appendFileSync('./note/files/.txt', "I'm a Dzmitry \n");
fs.appendFileSync('./note/files/.txt', "And my name is SYNC. I'm file system module! \n");
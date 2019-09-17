const fs = require('fs');
const chalk = require('chalk').default;

const addNew = (title, body) => {
    const notes = loadNotes();
    const dublicate = notes.filter(note => note.title === title);

    debugger;
    
    console.log(chalk.cyan(`Adding new note "${title}"......`))
    if(!dublicate){
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.green.inverse(`Note "${title}" successfully added`));
    } else {
        console.log(chalk.red.inverse(`Note "${title}" already found!`));
    }
};

const remove = title => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note){
       return note.title !== title; 
    });

    console.log(chalk.magenta(`Removing notes with title: "${title}"`));
    
    if(notesToKeep.length < notes.length){
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse(`Note "${title}" successfully removed..!`));
    } else {
        console.log(chalk.red.inverse(`Note "${title}" not found`));
    }

};

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => console.log(`${note.title}: ${note.body}`));
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteAfterRead = notes.find(note => note.title === title);
    if(noteAfterRead){
        console.log(`${chalk.cyan.inverse(noteAfterRead.title)}\n${chalk.cyan(noteAfterRead.body)}`)
    } else {
        console.log(chalk.red.inverse(`Note "${title}" not found`));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('./files/notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('./files/notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return[];
    }
};

module.exports = {
    read: readNote,
    listAll: listNotes,
    addNew: addNew,
    remove: remove
}
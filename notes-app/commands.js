const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.9');


yargs.command({
    command:    'add',
    describe:   '- "Add a new note"',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //without title will be error. Title get as required*
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNew(argv.title, argv.body);
    }
    
});

yargs.command({
    command:    'remove',
    describe:   '- "Remove a note"',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.remove(argv.title);
    }
});

yargs.command({
    command:    'read',
    describe:   '- "Read a note"',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    
    handler(argv){
        notes.read(argv.title);
    }
});

yargs.command({
    command:    'list',
    describe:   '- "List notes"',
    handler(){
        notes.listAll();        
    }
});

yargs.parse(); //parsing all yargs configuration and logging to console result
//to run command help use:          using-yargs --help
//to show version of product use:   using-yargs --version
//to run command 'add' use:         node using-yargs add --title="My title" --body="My body is very short"
//to run command 'remove' use:      using-yargs remove
//to run command 'read' use:        using-yargs read
//to run command 'list' use:        using-yargs list
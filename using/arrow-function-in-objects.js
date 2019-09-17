//using in object methods
const chalk = require('chalk').default;

const event = {
    name: 'Birthday Party',
    printGuestList: function(){
        console.log(chalk.cyan('Guest list in usual syntax ') + chalk.green.inverse(this.name));
    }
}
event.printGuestList();

const eventShort = {
    name: 'Birthday Party',
    printGuestList(){
        console.log(chalk.cyan('Guest list in usual syntax ') + chalk.green.inverse(this.name));
    }
}
eventShort.printGuestList();

console.log(chalk.blue('Using arrow function into Object to get success for "this" of Object is FAILED. "this" is undefined'));
const eventWithArrow = {
    name: 'Birthday Party',
    printGuestList: () => {
        console.log(chalk.cyan('Guest list in arrow syntax ') + chalk.red.inverse(this.name)); //this.name - undefined
    }
}
eventWithArrow.printGuestList();

console.log(chalk.blue('Using arrow function into forEach to get success for "this" of object is FAILED. "this" is undefined'));
const eventWithGuests = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList(){
        console.log(chalk.cyan('Guest list in arrow syntax ') + chalk.yellow.inverse(this.name)); 

        this.guestList.forEach(function(guest){
            console.log(chalk.cyan(guest + ' is attending ') + chalk.red.inverse(this.name)); //this.name - undefined
        })

    }
}
eventWithGuests.printGuestList();

console.log(chalk.blue('Using arrow function into forEach to get success for "this" of object is SUCCESS'));
const eventWithGuestsArrow = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList(){
        console.log(chalk.cyan('Guest list in arrow syntax ') + chalk.yellow.inverse(this.name)); 

        this.guestList.forEach((guest) => {
            console.log(chalk.cyan(guest + ' is attending ') + chalk.green.inverse(this.name)); //this.name - undefined
        })

    }
}
eventWithGuestsArrow.printGuestList();
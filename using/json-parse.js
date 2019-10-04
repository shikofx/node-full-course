const chalk = require('chalk').default;
const fs = require('fs');

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}
//to JSON
const bookJSON = JSON.stringify(book);


console.log(bookJSON);

//from JSON
const parsedData = JSON.parse(bookJSON);
console.log("TITLE:     " + parsedData.title);
console.log("AUTHOR:    " + parsedData.author);

const color = require('chalk').default;
const geocodeOf = require('./utils/geocode');
const weather = require('./utils/weather')

const customPlace = process.argv[2];

if(!customPlace){
    return console.log(color.red.inverse('Unable PLACE to find weather. \nPlease enter parameter to command line for example: "node app `Minsk`"'));
} 

weather.findByPlace(customPlace, (w) => {
    console.log(w.timezone);
    console.log(w.latitude);
    console.log(w.longitude);
})


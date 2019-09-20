const color = require('chalk').default;
const geocodeOf = require('./utils/geocode');
const weather = require('./utils/weather')

const customPlace = process.argv[2];

if(!customPlace){
    return console.log(color.red.inverse('Unable PLACE to find weather. \nPlease enter parameter to command line for example: "node app `Minsk`"'));
} 

geocodeOf(customPlace, (error, { longitude, latitude, placeName }) => {
    if(error){
        return console.log(color.red.inverse(error));
    } 
    console.log(color.magenta('Ищем погоду для ') + color.magenta.inverse(placeName));
    console.log(color.yellow('с координатами ') + color.yellow.inverse(latitude) + 
                color.yellow(' градусов северной широты ') + 
                color.yellow.inverse(longitude) + color.yellow(' градусов восточной долготы'));
        
    weather.findBy({ longitude, latitude, placeName }, (error, weather) => {
        if(error){
            return console.log(color.red.inverse(error));
        } 
        console.log(color.cyan(`Найдена погода для ${weather.timezone}`));
        console.log(color.blue(`Сейчас здесь температура = ${weather.temperature} градусов.`)); 
        console.log(color.cyan(`Ветер движется со скоростью ${weather.windSpeed} км/ч.`));
        console.log(color.blue(`Вероятность осадков ${weather.rainProbability}%.`));                    
        console.log(color.cyan.inverse(`${weather.currentlySummary}. ${weather.dailySummary}`)); 
    });
    
});


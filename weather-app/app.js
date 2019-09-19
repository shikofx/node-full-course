const color = require('chalk').default;
const geocodeOf = require('./utils/geocode');
const weather = require('./utils/weather')

const customPlace = process.argv[2];

if(!customPlace){
    console.log(color.red.inverse('Unable place to find weather. \nPlease enter parameter to command line for example: "node app `Minsk`"'));
} else {
    geocodeOf(customPlace, (error, location) => {
        if(!error){
            weather.findBy(location, (error, weather) => {
                if(!error){
                    console.log(color.magenta('Ищем погоду для ') + color.magenta.inverse(location.placeName));
                    console.log(color.yellow('с координатами ') + color.yellow.inverse(location.latitude) + color.yellow(' градусов северной широты ') + 
                    color.yellow.inverse(location.longitude) + color.yellow(' градусов восточной долготы'));
                    console.log(color.cyan(`Найдена погода для ${weather.timezone}`));
                    console.log(color.blue(`Сейчас здесь температура = ${weather.temperature} градусов.`)); 
                    console.log(color.cyan(`Ветер движется со скоростью ${weather.windSpeed} км/ч.`));
                    console.log(color.blue(`Вероятность осадков ${weather.rainProbability}%.`));                    
                    console.log(color.cyan.inverse(`${weather.currentlySummary}. ${weather.dailySummary}`)); 
                } else 
                    console.log(color.red.inverse(error));
                
            });
        } else 
            console.log(color.red.inverse(error));
    });
}

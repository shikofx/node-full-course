const request = require('request');
const color = require('chalk')


const find = ( { latitude, longitude }, callback) => {
    const url = 'https://api.darksky.net/forecast/1d438066941a54d711fb799a44b30655/' + 
                          latitude + ',' + longitude + 
                          '?lang=ru&units=si&exclude=hourly,monthly,alerts,flags';

    request({ url, json: true}, (error, { body, statusCode, statusMessage }) => {
        if(error){
            callback('Unable to connect to location service\n' + error);
        } else if(body.error){
            callback(`Error when get weather ${statusCode}: ${statusMessage} \nCheck URL: ${url}`);
        } else { 
            callback(undefined, {
                timezone:           body.timezone,
                temperature:        body.currently.temperature,
                windSpeed:          body.currently.windSpeed,
                rainProbability:    Math.round(body.currently.precipProbability*100),
                currentlySummary:   body.currently.summary,
                dailySummary:       body.daily.summary
            });  
        }
    });
};

const toString = (location, weather) => {
    return  'Ищем погоду для ' + location.placeName + 'с координатами \n' +
            ' - ' + location.latitude + ' градусов северной широты \m' + 
            ' - ' + location.longitude + ' градусов восточной долготы \n' +
            `Найдена погода для ${weather.timezone}\n` +
            `Сейчас здесь температура = ${weather.temperature} градусов.\n` + 
            `Ветер движется со скоростью ${weather.windSpeed} км/ч.\n` +
            `Вероятность осадков ${weather.rainProbability}%.\n` +                     
            `${weather.currentlySummary}. ${weather.dailySummary}`; 
}

module.exports = {
    findBy: find,
    toString: toString
}

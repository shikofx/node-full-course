const request = require('request');
const color = require('chalk')

const find = (location, callback) => {
    const urlWeatherApi = 'https://api.darksky.net/forecast/1d438066941a54d711fb799a44b30655/' + 
                          location.latitude + ',' + location.longitude + 
                          '?lang=ru&units=si&exclude=hourly,monthly,alerts,flags';
    request({url: urlWeatherApi, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location service\n' + error);
        } else if(response.body.error){
            callback(`Error when get weather ${response.statusCode}: ${response.statusMessage} \nCheck URL: ${urlWeatherApi}`);
        } else { 
            callback(undefined, {
                timezone:           response.body.timezone,
                temperature:        response.body.currently.temperature,
                windSpeed:          response.body.currently.windSpeed,
                rainProbability:    Math.round(response.body.currently.precipProbability*100),
                currentlySummary:   response.body.currently.summary,
                dailySummary:       response.body.daily.summary
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

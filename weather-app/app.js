const request = require('request');
const color = require('chalk').default;

const customPlace = 'Byala Podlyaska';
const urlMapApi = `https://api.mapbox.com/geocoding/v5/mapbox.places/${customPlace}.json?access_token=pk.eyJ1Ijoic2hpa29meCIsImEiOiJjazBwY3k1dzcwaWl2M2xtbGFsYWJ1YW83In0.0nXU-pkK8ZRHe3XaurH0KA&limit=1`;
request({url: urlMapApi, json: true}, (error, response) => {
    if(error){
        console.log('Uneble to connect to location cervice\n' + error);
    } else if(response.statusCode !== 200){
        console.log(color.red(`Error when find location ${response.statusCode}: ${response.statusMessage}`));
    } else if(response.body.features.length === 0){
        console.log(color.red.inverse(`Unable place: ${customPlace}`))
    } else {
        placeName = response.body.features[0].place_name;
        latitude = response.body.features[0].center[1];
        longitude = response.body.features[0].center[0];
        console.log(color.yellow(`Place: ${placeName}`));
        console.log(color.yellow(`Latitude: ${latitude}`));
        console.log(color.yellow(`Longitude: ${longitude}`));  
        const urlWeatherApi = `https://api.darksky.net/forecast/1d438066941a54d711fb799a44b30655/${latitude},${longitude}?lang=ru&units=si&exclude=hourly,monthly,alerts,flags`;
        request({url: urlWeatherApi, json: true}, (error, response) => {
            if(error){
                console.log(color.red.inverse('Unable to connect to location service\n' + error));
            } else if(response.body.error){
                console.log(color.red.inverse(`Error when get weather ${response.statusCode}: ${response.statusMessage}`));
            } else { 
            const timezone = response.body.timezone;
            const temperatureC = response.body.currently.temperature;
            const windSpeed = response.body.currently.windSpeed;
            const rainProbability = Math.round(response.body.currently.precipProbability*100);
            const currentlySummary = response.body.currently.summary;
            const dailySummary = response.body.daily.summary
            console.log(color.blue(`Found weather for ${timezone}: currently t = ${temperatureC} degrees out. Wind moves with ${windSpeed} km/h. Rain probability is ${rainProbability}%`));
            console.log(color.blueBright(`Найдена погода для ${timezone}. Сейчас здесь t = ${temperatureC} градусов.`)); 
            console.log(color.blue(`Ветер движется со скоростью ${windSpeed} км/ч.`));
            console.log(color.blue(`Вероятность осадков ${rainProbability}%.`));                    
            console.log(color.blue(`${currentlySummary}. ${dailySummary}`));
            }
        });  
    }
    
    
});


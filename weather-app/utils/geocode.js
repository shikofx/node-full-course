const request = require('request');

const geocode = (place, callback) => {
    const urlMapApi = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
                        encodeURIComponent(place) +
                        '.json?access_token=pk.eyJ1Ijoic2hpa29meCIsImEiOiJjazBwY3k1dzcwaWl2M2xtbGFsYWJ1YW83In0.0nXU-pkK8ZRHe3XaurH0KA&limit=1';
    request({url: urlMapApi, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location service\n' + error);
        } else if(response.statusCode !== 200){
            callback(`Error when find location ${place}: ${response.statusCode}: ${response.statusMessage}`);
        } else if(response.body.features.length === 0){
            callback(color.red.inverse(`Unable place: ${place}. Try please search with other place`))
        } else {
            callback(undefined, {
                placeName: response.body.features[0].place_name,
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0]
            });
        }
        
    });
};    

module.exports = geocode;
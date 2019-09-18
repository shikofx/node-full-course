const request = require('request');

var placeName;
var latitude;
var longitude;

const findPlace = (customLocation) => {
    const urlMabBox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${customLocation}.json?access_token=pk.eyJ1Ijoic2hpa29meCIsImEiOiJjazBwY3k1dzcwaWl2M2xtbGFsYWJ1YW83In0.0nXU-pkK8ZRHe3XaurH0KA&limit=1`;
    request({url: urlMabBox, json: true}, (error, response) => {
        placeName = response.body.features[0].place_name;
        latitude = response.body.features[0].center[1];
        longitude = response.body.features[0].center[0];
        console.log(latitude);
        console.log(longitude);
        console.log(placeName);
    });    
}
    
module.exports = {
    findPlace,
    placeName,
    latitude,
    longitude
}
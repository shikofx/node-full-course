const https = require('https');

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/.json?access_token=pk.eyJ1Ijoic2hpa29meCIsImEiOiJjazBwY3k1dzcwaWl2M2xtbGFsYWJ1YW83In0.0nXU-pkK8ZRHe3XaurH0KA&limit=1';

const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (responseData) => {
        data = data + responseData.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error) => {
    console.log('Oppsssss! ' + error);
})

request.end();
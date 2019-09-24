const express = require('express');
const path = require('path');
const weather = require('../../weather-app/utils/weather')

const app = express();

//Paths for Express config
const viewPath = path.join(__dirname, '../templates')
const pagesPath = path.join(__dirname, '../pages');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath); 

//Setup static pages content path
app.use(express.static(pagesPath));

const owner = {
    name: 'Shikofx',
    mail: 'shikofx@gmail.com'
};

const source = {
    weather: 'https://darksky.net',
    location: 'https://mapbox.com'
};


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        owner: owner,
        source: source
    });
});

app.get('/weather', (req, res) => {
    weather.findByPlace('Moscow', (w) => {
        res.render('weather', {
            title: 'Weather info',
            weather: w,
            owner: owner,
            source: source,
            date: Date
        });
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Helper',
        owner: owner,
        source: source
    });
});

app.get('/about', (req, res) => {
    
    res.render('about', {
        title: 'About us',
        owner: owner,
        source: source
    });
}); 

app.listen(3000, () => {
    console.log('Server is up on port 3000');
    
});

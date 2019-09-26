const express = require('express');
const color = require('chalk');
const path = require('path');
const weather = require('../../weather-app/utils/weather');
const hbs = require('hbs');
const app = express();

//Paths for Express config
const viewPath = path.join(__dirname, '../templates/views')
const partialsPaht = path.join(__dirname, '../templates/partials')
const pagesPath = path.join(__dirname, '../pages');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath); 

hbs.registerPartials(partialsPaht);

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
    const place = req.query.place;
    if(!place){
        return res.send('<h1>ERROR: Place prlperty is undefined!</h1>');
    }

    weather.findByPlace(place, (w) => {
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

app.get('/help/test', (req, res) => {
    res.send('Article about testing! Here we can see how to test Weather application.');
});

app.get('/help/*', (req, res) => {
    res.render('error404NotFound', {
        title: '404 Article Not Found',
        owner: owner,
        source: source,
        message: "Help article wasn't found"
    });
});

//Все ссылки, которыне не совпали с предыдущими
app.get('*', (req, res) => {
    res.render('error404NotFound', {
        title: '404 Page Not Found',
        owner: owner,
        source: source,
        message: "Error 404. Page wasn't found"
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
    
});

const express = require('express');
const path = require('path');
const weather = require('../../weather-app/utils/weather')

const app = express();

const pagesPath = path.join(__dirname, '../pages');

app.use(express.static(pagesPath));

app.get('/weather', (req, res) => {
    weather.findByPlace('Moscow', (w) => {
        res.send(JSON.stringify(w)); 
    });
});

app.get('/help', (req, res) => {
    res.sendFile(pagesPath + '/help.html');
});

app.get('/about', (req, res) => {
    
    res.sendFile(pagesPath + '/about.html');
}); 

app.listen(3000, () => {
    console.log('Server is up on port 3000');
    
});

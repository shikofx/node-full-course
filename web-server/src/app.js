const express = require('express');
const weather = require('../../weather-app/utils/weather')
const app = express();

console.log(__filename);
console.log(__dirname)
app.get('', (req, res) => {
    // res.send('../pages/index.html')
    res.send('<h1>MAIN page</h1>'); //Send html code
});

app.get('/weather', (req, res) => {
    weather.findByPlace('Moscow', (w) => {
        res.send(JSON.stringify(w));
    });
});

app.get('/help', (req, res) => {
    // res.send('../pages/help.html');

});

app.get('/about', (req, res) => {
    // res.send('../pages/about.html');
    res.send([{
        city: "Minsk", 
        name: "Andrew", 
        age: 25
    }, {
        city: "Brest", 
        name: "Vasya", 
        age: 34
    }])
}); 

app.listen(3000, () => {
    // console.log('Server is up on port 3000');
});
// app.com
// app.com/help
// app.com/about
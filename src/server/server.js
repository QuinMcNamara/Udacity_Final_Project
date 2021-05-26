/* Dependencies */
const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');


// Setup empty JS object to acs as endpoint for all routes
allData = {};


/* Start up an instance of the app */
const app = express();

/* Initialize dist as project folder for app */
app.use(express.static('dist'));

// Replaces body-parser with Express => v4.16
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Enable all CORS Requests
app.use(cors());

// Get Routes
app.get('/all', (req, res) => {
    console.log(allData);
    res.send(allData);
});

// POST Routes
app.post('/postLocation', (req, res) => {
    console.log(req);
    allData.city = req.body.city;
    console.log(res);
    res.send(allData);
});

app.post('/postForecastWeather', (req, res) => {
    console.log(req);
    allData.forecast_high = req.body.forecast_high;
    allData.forecast_low = req.body.forecast_low;
    allData.description = req.body.description;
    console.log(res);
    res.send(allData);
});

app.post('/postHistoricalWeather', (req, res) => {
    console.log(req);
    allData.historical_high = req.body.historical_high;
    allData.historical_low = req.body.historical_low;
    console.log(res);
    res.send(allData);
})

app.post('/pixabayPic', (req, res) => {
    console.log(req);
    allData.pic = req.body.pic;
    console.log(res);
    res.send(allData);
})


// Designates what port the app will listen to for incoming requests
const port = 3031;
app.listen(port, (error) => {
    if (error) console.log(error);
    console.log(`Listening on port: ${port}`)
});
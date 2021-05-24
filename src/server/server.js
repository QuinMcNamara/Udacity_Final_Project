/* Dependencies */
const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

/* Global Variables */
// Setup empty JS object to acs as endpoint for all routes
allData = {};

//GeoNames Variables
const geonamesUsername = process.env.geonames_username;
const geonamesBaseURL = 'http://api.geonames.org/searchJSON?q=';
/* For reference, the full URL needed is as follows:
'http://api.geonames.org/searchJSON?q="user input city here"&maxRows=10&username="geonamesUsername goes here"
User Input City will be pulled from client js and geonamesUsername is from .env file */


//WeatherBit Variables
const weatherbitApiKey = process.env.weatherbit_api_key;
const weatherbitBaseURL = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=';
/* For reference, the full URL needed is as follows:
'https://api.weatherbit.io/v2.0/forecast/daily?lat="latitude entry"&lon="longitude entry"&key="weatherbitApiKey"' */

//PixaBay Variables
const pixabayApiKey = process.env.pixabay_api_key;
const pixabayBaseURL = 'https://pixabay.com/api/?key=';
/* For reference, the full URL needed is as follows:
'https://pixabay.com/api/?key="pixabayApiKey"&q="user input city here"&image_type=photo&category=places'
Note - User input city string must be encoded - see following:
[https://love2dev.com/blog/whats-the-difference-between-encodeuri-and-encodeuricomponent/] */



/* Start up an instance of the app */
const app = express();

/* Initialize dist as project folder for app */
app.use(express.static('dist'));

// Replaces body-parser with Express => v4.16
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Enable all CORS Requests
app.use(cors());


// Designates what port the app will listen to for incoming requests
const port = 3031;
app.listen(port, (error) => {
    if (error) console.log(error);
    console.log(`Listening on port: ${port}`)
});
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


// Designates what port the app will listen to for incoming requests
const port = 3031;
app.listen(port, (error) => {
    if (error) console.log(error);
    console.log(`Listening on port: ${port}`)
});
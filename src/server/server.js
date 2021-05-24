// Required to keep API key private
const dotenv = require('dotenv');
dotenv.config();

// Dependencies
var path = require('path');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

// Start up an instance of the app
const app = express();

// Initialize dist as project folder for app
app.use(express.static('dist'));

// Replaces body-parser with Express => v4.16
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cors());
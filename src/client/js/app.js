/* Global Variables */

//GeoNames Variables
const geonamesUsername = process.env.geonames_username;
const geonamesBaseURL = 'http://api.geonames.org/searchJSON?q=';
/* For reference, the full URL needed is as follows:
'http://api.geonames.org/searchJSON?q="user input city here"&maxRows=2&username="geonamesUsername goes here"
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
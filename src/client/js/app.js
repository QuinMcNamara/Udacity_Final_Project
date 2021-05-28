// Countdown and Date Function
function setDateCountdown (departureDate) {
	let currentDate = new Date();
	let departDate = new Date(departureDate);
	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	let newDate = (currentDate.getDate() +'.'+ (months[currentDate.getMonth()]) +'.'+ currentDate.getFullYear());
	console.log(currentDate);
	console.log(departDate);
	console.log(newDate);

	/* Calculate number of says until trip, as seen here:
	https://www.geeksforgeeks.org/
	how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
	*/
	diffInTime = departDate.getTime() - currentDate.getTime();
	diffInDays = Math.floor(diffInTime / (1000*3600*24));
	console.log(diffInDays);

	const countdown = [departDate, diffInDays];
	console.log(countdown);
	return countdown;
}

//GeoNames Variables
// const geonamesUsername = process.env.geonames_username;
const geonamesBaseURL = 'http://api.geonames.org/searchJSON?q=';
/* For reference, the full URL needed is as follows:
'http://api.geonames.org/searchJSON?q="user input city here"&maxRows=2&username="geonamesUsername goes here"
 */


//WeatherBit Variables
// const weatherbitApiKey = process.env.weatherbit_api_key;
const weatherbitForecastBaseURL = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=';
/* For reference, the full URL needed is as follows:
'https://api.weatherbit.io/v2.0/forecast/daily?lat="latitude entry"&lon="longitude entry"&key="weatherbitApiKey"' */
const weatherbitHistoricalBaseURL = 'PLACEHOLDER';


//PixaBay Variables
// const pixabayApiKey = process.env.pixabay_api_key;
const pixabayBaseURL = 'https://pixabay.com/api/?key=';
/* For reference, the full URL needed is as follows:
'https://pixabay.com/api/?key="pixabayApiKey"&q="user input city here"&image_type=photo&category=places'
Note - User input city string must be encoded - see following:
[https://love2dev.com/blog/whats-the-difference-between-encodeuri-and-encodeuricomponent/] */

// Function to Get GeoNames API Data
const retrieveCoordinates = async(baseURL, city, userName) => {
    // const response = await fetch(`${baseURL}${city}&maxRows=2&username=${userName}`)
    const response = await fetch(`${baseURL}${city}&maxRows=2&username=*PLACEHOLDER*`)
    try {
        const coordData = await response.json();
        console.log(coordData);
        return coordData;
    }
    catch(error) {console.log(error);}
};
 

function clickHandler(event) {
    event.preventDefault;
    userCity = document.getElementById('destination').value;
    retrieveCoordinates(geonamesBaseURL, userCity, geonamesUsername)
    .then(coordData => {
        globalData.latitude = coordData.geonames[0].lat;
        globalData.longitude = coordData.geonames[0].long;
        console.log(globalData);
    })
    .catch(error => console.log(error));
};

export {
    clickHandler,
    retrieveCoordinates
}
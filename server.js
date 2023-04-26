/* eslint-disable no-undef */
'use strict';
const express = require('express');
require('dotenv').config();
let weatherData = require('./data/weather.json');
console.log('Data from weather', weatherData);
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5005;

app.get('/', (request, response) => {
  response.send('Hello World');
});


app.get('/weather', (request, response) => {
  try {
    let searchQuery = request.query.searchQuery;
    console.log('Names !!!', searchQuery);
    // let lat = request.query.lat;
    // let lon = request.query.lon;

    let dataToSearchQuery = weatherData.find(weather => weather.city_name.toLocaleLowerCase() === searchQuery.toLocaleLowerCase());
    // let dataToLat = weatherData.find(weather => weather.lat === lat);
    // let dataToLon = weatherData.find(weather => weather.lon === lon);
    let dataToSend = dataToSearchQuery.data.map(dayForecast => new Forecast(dayForecast));
    response.send(dataToSend);
  } catch (error) {
    next(error);

  }
});



class Forecast {
  constructor(forecastObject){
    console.log('It seems like its raining: ',forecastObject);
    this.description = forecastObject.weather.description;
    this.date = forecastObject.valid_date;
  }
}


app.use((error, request, response,) => {
  response.status(500).send(error.message);
});


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

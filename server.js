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
  response.send('helle World');
});


app.get('/weather', (request, response) => {
  try {
    let searchQuery = request.query.searchQuery;
    let lat = request.query.lat;
    let lon = request.query.lon;

    let dataToInstant = weatherData.find(weather => weather.searchQuery === searchQuery);
    let dataToSend = new Weather(dataToInstant);
    response.send(dataToSend);
  } catch (error) {
    next(error);

  }
});






























app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

/* eslint-disable no-undef */
'use strict';
const express = require('express');
require('dotenv').config();
// let weatherData = require('./data/weather.json');
// console.log('Data from weather', weatherData);
const cors = require('cors');
// const axios = require('axios');
const app = express();
app.use(cors());

const getWeather = require('./modules/weather.js');
const getMovie = require('./modules/movie.js');
// const getYelp = require('./modules/yelp.js');

const PORT = process.env.PORT || 5005;

app.get('/', (request, response) => {
  response.send('Hello World');
});

app.get('/weather', getWeather);
app.get('/movie', getMovie);
// app.get('/yelp', getYelp);



// function yelphandler(request, response) {
//   const location = request.query.searchQuery;
//   yelp(location, request.query.page)
//     .then(reviews => response.send(reviews))
//     .catch((error) => {
//       console.error(error);
//       response.status(500).send('Apologies, something has gone wrong!');
//     });
// }

app.use((error, request, response) => {
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

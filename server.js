'use strict';
const express = require('express');
require('dotenv').config();

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



app.use((error, request, response) => {
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

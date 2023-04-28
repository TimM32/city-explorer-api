/* eslint-disable no-undef */
"use strict";
const express = require("express");
require("dotenv").config();
let weatherData = require('./data/weather.json');
// console.log('Data from weather', weatherData);
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5005;

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/weather", getWeather);
app.get('/movies', getMovies);
// app.get('/yelp', getYelp);




async function getMovie(request, response) {
  let searchQuery = request.query.searchQuery;
  let


}



app.use((error, request, response) => {
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

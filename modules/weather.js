'use strict';

const axios = require('axios');

module.exports = getWeather;

async function getWeather(request, response) {
    let { latitude, longitude } = request.query;
    // console.log(latitude, longitude);
    //make api call to get actual weather data
    let url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&days=5&aqi=no&alerts=no&q=${latitude},${longitude}`;
  
    let weatherData = await axios.get(url);
    console.log('YYYYY', weatherData.data.forecast.forecastday);
    let weatherSummaries = weatherData.data.forecast.forecastday.map(day => {
      return new Forecast(day);
    });
    console.log('WWWWWWWSSSSSSs', weatherSummaries);
    response.status(200).send(weatherSummaries);
  }
  
  
  
  
  class Forecast {
    constructor(forecastObject) {
      console.log('CCCCC', forecastObject.day.condition.text);
      // this.description = forecastObject.weather.description;
      this.date = forecastObject.date;
      this.forecast = forecastObject.day.condition.text;
  
    }//constructor
  }//class


  
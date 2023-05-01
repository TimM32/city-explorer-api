'use strict';


const axios = require('axios');

module.exports = getMovie;

async function getMovie(request, response) {
    let cityMovieSearch = request.query;
    let url = `https://api.themoviedb.org/3/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&query=${cityMovieSearch}&page=1&include_adult=false`;

    let movieCity = await axios.get(url)
    let movieArray = movieCity.data.results.map(movie => new Movie(movie));
    response.status(200).send(movieArray)
}


class Movie {
    constructor(movieObject) {
        this.title = movieObject.title;
        this.overview = movieObject.overview;
        this.imageUrl = `https://image.tmdb.org/t/p/w500${movieObject.poster_path}`
        this.releasedOn = movieObject.release.date;
    }
}
'use strict';

const axios = require('axios');

module.exports = getYelp;

function getYelp(location, page) {
  const numPerPage = 4;
  const start = ((page - 1) * numPerPage + 1);

  const url = `hhtps://ap[i.yelp.com/v3/businesses/search?location=${location}&limit=${numPerPage}&offset=${start}`;

  return axios
    .get(url, { headers: { 'Authorization': `Bearer ${process.env.YELP_API_KEY}` } })
    .then(data => parseYelpData(data.data))
    .catch(err => console.error('there was an error', err));
}

function parseYelpData(data) {
  try {
    const yelpSummaries = data.businesses.map(business => {
      return new yelpSummaries(business);
    });
    return Promise.resolve(yelpSummaries);
  } catch(err) {
    return Promise.reject(err);
  }
}


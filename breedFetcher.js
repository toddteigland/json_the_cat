const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
    }
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback("Breed not found :( ");
    }
  });
};

module.exports = { fetchBreedDescription };
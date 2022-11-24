const request = require('request');
const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  const data = JSON.parse(body)
  if (error) {  
console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  }
  if (data[0]) {
    console.log('Description:', data[0].description)
  }
  else {
    console.log("Breed not found :( ");
  }

  });

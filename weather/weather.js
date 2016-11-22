const request = require('request');


var getWeather = function(lat,lng,callback){    
var _apiKey ='67e781055fae0abac5216d8d9ca8b413';
request({
  url: `https://api.darksky.net/forecast/${_apiKey}/${lat},${lng}`,
  json: true
}, (error, response, body) => {
  if (error) {
   callback('Unable to connect to Forecast.io server.');
  } else if (response.statusCode === 400) {
    callback('Unable to fetch weather.');
  } else if (response.statusCode === 200) {
    //console.log(body.currently.temperature);
    callback(undefined,{
            currentTemp :body.currently.temperature,
            apperantTemp :body.currently.apparentTemperature
    });
  }
});
};

module.exports={
    getWeather
}


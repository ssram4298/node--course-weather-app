const request = require("request");

var getWeather = (lat,lng,callback) => {
    request({
        url: `https://api.darksky.net/forecast/e7a71e7f7a597dee4b61b3bde183a532/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            console.log(lat,lng);
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback("Can't connect to servers right now!");
        }
    });
}

module.exports.getWeather = getWeather; 


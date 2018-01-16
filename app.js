const yargs = require('yargs');

const geocode = require('./geocode.js');
const weather = require('./weather.js');

const argv = yargs
    .options({
        a: {
            demand:true,
            alias: 'address',
            describe: 'place to find weather for',
            string: true
        }
    })
    .help()
    .argv;

geocode.geocodeAddress(argv.address,(errorMessage,results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(JSON.stringify(weatherResults, undefined, 2));
            }
        });

    }
});    

// e7a71e7f7a597dee4b61b3bde183a532
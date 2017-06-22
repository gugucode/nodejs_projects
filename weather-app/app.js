const request = require("request");
const yargs = require("yargs");

const geo = require("./geocode/geocode.js");
const weather = require("./geocode/weathercode.js");

var argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        string: true,
        describe: "Address to fetch weather for"
    }
})
.help()
.alias('help','h')
.argv;

var geoInfo = geo.geoAddress(argv.a,(error,geoResult) =>{
    if(error){
        console.log(error);
    }else{
        weather.weathercode(geoResult.address,geoResult.lat,geoResult.lng, (error,weatherResult) =>{
            if(error){
                console.log(error);
            }else{
                console.log(JSON.stringify(weatherResult,undefined,2));
            }
        });
    }

});


/*
request({
    url:"https://api.darksky.net/forecast/5b2eb02b71b6a182baa4a18e58c6491f/39.7290207,-89.61765400000002",
    json: true
},(error,response,body) => {
    console.log(`Summary: ${body.currently.summary}`);
    console.log(`Summary: ${body.currently.temperature}`);
    console.log(`Summary: ${body.currently.apparentTemperature}`);
})*/
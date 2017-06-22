
const request = require("request");

weathercode = (a,lat,lng,callback) => {
    request({
        url:`https://api.darksky.net/forecast/5b2eb02b71b6a182baa4a18e58c6491f/${lat},${lng}`,
        json: true
    },(error,response,body) => {
        if(error){
            callback("Unable to connect to Forecast.io")
        }else if(response.statusCode === 400){
            callback("Unable to fetch weather")
        }else if(response.statusCode === 200){
            callback(undefined,{address:a,summary: body.currently.summary,
                temperature:body.currently.temperature,
                apparetTemperature:body.currently.apparentTemperature});      
        }
    })
}

module.exports.weathercode = weathercode;
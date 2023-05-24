const request = require('request')

const forecast = (latitude , longtitude , callback) => {

    const url ="http://api.weatherapi.com/v1/current.json?key=9998642042394b2fb31183534231105&q=" + latitude + "," + longtitude
    
    request({url , json:true } , (error , response ) =>{
    
        if(error){
            callback("Unable to connect wether service" , undefined)
        } else if(response.body.error){
            callback(response.body.error.message , undefined)
        } else{
            callback(undefined , response.body.location.name + ' It Is ' + response.body.current.condition.text
            + " And Temp " + response.body.current.temp_c )
        }
    })
    }

module.exports = forecast;
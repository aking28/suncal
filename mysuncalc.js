let SunCalc = require('suncalc')
let moment = require('moment')


class MyCalc {
  constructor() {}

  sunrise(options) {
    console.log({
      lon: options.lon,
      lat: options.lat,
      city: options.city

    })

    let data = SunCalc.getTimes(new Date(), options.lat, options.lon)
    console.log(data)

    let sunrise = moment(data.sunrise).format('MMMM Do YYYY, h:mm:ss a');
    console.log(sunrise)

  }

  sunset(options) {
    console.log({
      lon: options.lon,
      lat: options.lat,
      city: options.city
    })

    let data = SunCalc.getTimes(new Date(), options.lat, options.lon)
    console.log(data)
         

    let sunset = moment(data.sunset).format('MMMM Do YYYY, h:mm:ss a');
    console.log(sunset)

  }

}

module.exports = MyCalc

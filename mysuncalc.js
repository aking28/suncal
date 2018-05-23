let SunCalc = require('suncalc')
let moment = require('moment')


class MyCalc {
  constructor() {}

  sunset(options) {
    console.log({
      lon: options.lon,
      lat: options.lat

    })

    let data = SunCalc.getTimes(new Date(), options.lat, options.lon)

    let sunset = moment(data.sunset).format('MMMM Do YYYY, h:mm:ss A');
    console.log(sunset)

  }

  sunrise(options) {
    console.log({
      lon: options.lon,
      lat: options.lat
    })

    let data = SunCalc.getTimes(new Date(), options.lat, options.lon)
         
    let sunrise = moment(data.sunrise).format('MMMM Do YYYY, h:mm:ss A');
    console.log(sunrise)

  }

}

module.exports = MyCalc

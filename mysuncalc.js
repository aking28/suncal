let SunCalc = require('suncalc')

//Get todays sunlight times for London
//let times = SunCal.getTimes(new date() 5.15, -0.1)

//format sunrise time from the date object
//let sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();

// get position of the sun (azimuth and altitude) at today's sunrise
//let  sunrisePos = SunCalc.getPosition(times.sunrise, 51.5, -0.1);

// get sunrise azimuth in degrees
//let  sunriseAzimuth = sunrisePos.azimuth * 180 / Math.PI;

class MyCalc {
  constructor() {
  }

  sunrise(options) {
    console.log({
      lon: options.lon,
      lat: options.lat,
      city: options.city
    })
  }

  sunset(options) {
    console.log({
      lon: options.lon,
      lat: options.lat,
      city: options.city
    })
  }

}

module.exports = MyCalc

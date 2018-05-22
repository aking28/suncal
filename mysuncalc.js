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

    let data = SunCalc.getTimes(new Date(), options.lat, options.lon )
    console.log(data)
  }

  sunset(options) {
    console.log({
      lon: options.lon,
      lat: options.lat,
      city: options.city
    })

   // let data = SunCalc.getTimes(new Date(), options.lat, options.lon, options.city)
   // console.log(data)

  }

}

module.exports = MyCalc

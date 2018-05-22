let shell = require('shelljs')
let program = require('commander')
let colors = require('colors')
let MyCalc = require('./mysuncalc')
let myCalc = new MyCalc()

program
  .command('sunrise')
  .option('--lat [lat]', 'Latitude')
  .option('--lon [lon]', 'Longitude')
  .option('--city [city]', 'City')
  .action((options) => {
    console.log('sunrise')
    myCalc.sunrise(options)
  })

program
  .command('sunset')
  .option('--lat [lat]', 'Latitude')
  .option('--lon [lon]', 'Longitude')
  .option('--city [city]', 'City')
  .action((options) => {
    console.log('sunset')
    myCalc.sunset(options)
  })

program.parse(process.argv)

if(!program.args.length) program.help() 

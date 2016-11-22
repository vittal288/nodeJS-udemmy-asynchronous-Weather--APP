const yargs = require('yargs');
const Spinner = require('cli-spinner').Spinner;
const spinner = new Spinner('Loading...');
spinner.setSpinnerString('|/-\\');


const geoCode = require('./geocode/geoCode');

const weather = require('./weather/weather');

var argv = yargs
.option({
    address:{
        demand:true,
        alias:'a',
        describe:"Address to fetch wether for",
        string:true
    }
    })
.help()
.alias('help','h')
.argv;

var getDegreeTemp = (fTemp)=> (5*(fTemp-32))/9;

geoCode.getGeoCode(argv.address,(errorMessage,results)=>{
    spinner.start();
    if(errorMessage){
        console.log('Google API ERROR:' ,errorMessage);
        spinner.stop();
        spinner.setSpinnerString('');
    }else{
       //console.log(JSON.stringify(results,undefined,2));  
       var _placeName = results.address;    
       weather.getWeather(results.lat,results.lng,(errorMessage,weatherResults)=>{
            if(errorMessage){
                    console.log('Weather API ERROR :',errorMessage);
                    spinner.stop('');                    
                    spinner.setSpinnerString('');
            }else{
                var _degreeTemp = 
                //console.log(`\n Temperature of ${_placeName} is --> ${getDegreeTemp(weatherResults.currentTemp)} \u2592`);
                console.log(`\n Currently Temperature of ${_placeName}  ${getDegreeTemp(weatherResults.currentTemp)} , Feels like ${getDegreeTemp(weatherResults.apperantTemp)}`);
                
                spinner.stop('');                
                spinner.setSpinnerString('');                
            }
      });
    }
});









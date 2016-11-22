const yargs = require('yargs');
const axios = require('axios');
const Spinner = require('cli-spinner').Spinner;
const spinner = new Spinner('Loading...');
spinner.setSpinnerString('|/-\\');

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
                         
var _url = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`;

var getDegreeTemp = (fTemp)=> (5*(fTemp-32))/9;

axios.get(_url).then((res)=>{
    spinner.start();
    if(res.data.status === "ZERO_RESULTS"){
        //if there is error, then blocks the code execution here
        throw new Error('Unable to find the address');
        spinner.stop();
    }
    //console.log(res.data.results[0].formatted_address)
      
    var _apiKey ='67e781055fae0abac5216d8d9ca8b413',
        lat =res.data.results[0].geometry.location.lat,
        lng =res.data.results[0].geometry.location.lng,
        _placeName = res.data.results[0].formatted_address
    var weatherAPI =`https://api.darksky.net/forecast/${_apiKey}/${lat},${lng}`;
    // axios.get(weatherAPI).then((res)=>{
    //     console.log('Weather Resp' , res.data.currently.temperature);
    // },(err)=>{
    //     console.log('Error In Weather API ' , err);
    // })

    return axios.get(weatherAPI).then((res)=>{        
        spinner.stop();
        console.log(`\n Currently Temperature of ${_placeName}  ${getDegreeTemp(res.data.currently.temperature)} , Feels like ${getDegreeTemp(res.data.currently.apparentTemperature)}`);
    })
}).catch((err)=>{
    if(err.code === 'ENOTFOUND'){
        spinner.stop();
        console.log('Unable to connect to API Server !');
    }else{
        spinner.stop();
        //throw error block will display
        console.log(err.message);
    }   
})











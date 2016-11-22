const request = require('request');
//const request = require('request');



var getGeoCode =(address,callback)=>{       
    const sGoogleMapAPI ='http://maps.googleapis.com/maps/api/geocode/json?address=';                         
    var _url = `${sGoogleMapAPI}${encodeURIComponent(address)}`;
     request({
            url:_url,
            json:true
        },(error,resp,body)=>{
            if(error){
                callback("Undable to conect to Google Server");
            }else if(body.status === "ZERO_RESULTS"){
                callback("Undable to find that address.");
            }else if(body.status==="OK"){                
                var res={
                    address:body.results[0].formatted_address,
                    lat:body.results[0].geometry.location.lat,
                    lng:body.results[0].geometry.location.lng
                };
                callback(undefined,res);                
            }    
        }); 
}
module.exports={
    getGeoCode,
};

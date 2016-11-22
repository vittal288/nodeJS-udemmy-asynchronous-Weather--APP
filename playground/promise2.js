const request = require('request');

var geoCodeAddress =(address)=>{    
    return new Promise((resolve,reject)=>{
        const sGoogleMapAPI ='http://maps.googleapis.com/maps/api/geocode/json?address=';                         
        var _url = `${sGoogleMapAPI}${encodeURIComponent(address)}`;
        //console.log(_url);
        request({
                url:_url,
                json:true
            },(error,resp,body)=>{
                if(error){
                    reject("Undable to conect to Google Server");
                }else if(body.status === "ZERO_RESULTS"){
                    reject("Undable to find that address.");
                }else if(body.status==="OK"){                
                    var res={
                        address:body.results[0].formatted_address,
                        lat:body.results[0].geometry.location.lat,
                        lng:body.results[0].geometry.location.lng
                    };
                    resolve(res);                
                }    
            }); 
    });    
};



geoCodeAddress('560040').then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
    console.log('Error: ' , errorMessage);
});
var aSynchAdd = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a  === "number" && typeof b === "number"){
                resolve(a+b);
            }else{
                reject('Arguments are not numbers !');
            }
        },1500);
    });
};


//promise chaining...
aSynchAdd(5,7).then((res)=>{
    console.log('Results : ', res);
    return aSynchAdd(res,'33');
}).then((res)=>{
    console.log('It should be 45 :' ,res);
}).catch((errorMessage)=>{
   console.log(errorMessage);
});

// var somePromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         //resolve('Its worked');
//         reject("Unable to fillfill the Promise");
//     },2500);       
// });


// somePromise.then((message)=>{
//     console.log("Success:",message);
// },(errorMessage)=>{
//     console.log('Error :' ,errorMessage);
// });
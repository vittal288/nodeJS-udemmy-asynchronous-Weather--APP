var getUser =(id,callback)=>{
    var user={
        id:id,
        name:'Vittal'
    };
    

    setTimeout(()=>{
        callback(user);
    },3000);
};


getUser(28,(userObject)=>{
    console.log(userObject);
});
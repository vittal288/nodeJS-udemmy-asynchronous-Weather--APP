console.log('Staring app');

setTimeout(()=>{
    console.log('I am inside callback');
},2000);

setTimeout(()=>{
    console.log('I am inside 2nd callback');
});
console.log('Finishing APP');
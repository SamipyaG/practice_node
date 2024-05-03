//here we use promise to hold the data before print 
let a= 20;
let b=0;
let waitingData = new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        resolve(30)
    },5000)
})
waitingData.then((data)=>{
    console.log(a+data);
})
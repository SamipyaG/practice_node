// here we embad whole page of html wihtout usinf the extension in the last to visit the page
const express =require('express');
const path = require('path');


const app =express();
const publicpath =path.join(__dirname,'public');
app.get('/',(req,res)=>{
    res.sendFile(`${publicpath}/index.html`)
})
app.get('/abc',(req,res)=>{
    res.sendFile(`${publicpath}/about.html`)
})
app.get('/*',(req,res)=>{
    res.sendFile(`${publicpath}/404.html`)
})

app.listen(5000);
//here we use express js a frame work of node to create a simple 
const express=require('express');
const app =express();
app.get("/about",(req,resp)=>{
 resp.send("<h1>welcome to about us page </h1><br><a href =/home>go to home page  </a>") ;  
})
app.get("/home",(req,resp)=>{
    resp.send(`welcome to home us page<br><a href="/about">go to about us page</a><input type="text" placeholder="username" value=${req.query.name}/>`);

    
   })
   app.get("",(req,resp)=>{
    console.log(" this is the data send by browser ");
   }).listen(5000);
 

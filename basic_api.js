const http = require ('http');
http.createScerver((req,resp)=>{
    resp.write(" i am savage form brt' ");
    resp.end();


}).listen(5000);
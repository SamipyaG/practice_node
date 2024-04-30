const http = require('http');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content_type':'application\json'});
    resp.write(JSON.stringify({ name :'samipya ',email : 'samipya117@gmail.com'}));
    resp.end();
    }).listen(4000);
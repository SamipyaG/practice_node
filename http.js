const http = require('http');
function abc (req,resp){
    resp.write(" <h1>hello,, i am savage </h1>");
    resp.end() ; 
}
http.createServer(abc).listen(4700);
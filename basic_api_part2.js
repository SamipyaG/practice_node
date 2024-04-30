const http = require('http');
const abc = require('./data');

http.createServer((req, resp) => {
    resp.writeHead(200, {'content-type': 'application/json'});
    resp.write(JSON.stringify(abc));
    resp.end();
}).listen(7000);

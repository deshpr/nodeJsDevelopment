var http = require('http')
var url = require('url')


exports = module.exports = {}


function start(){
    http.createServer(function(request, response){
        response.writeHead(200,{'Content-Type': 'text/plain'})
        var url_parts = url.parse(request.url, true);   // parse the contents of the url.
        var str = url_parts.query.name + " works man!!";
        response.end('Hello world from the server created using Node.js!! ' +  str)
        console.log('Handle request ' + url_parts.query.name)
}).listen(8080, 'localhost');
// so the web server object created and returned will  listen port 8080
// for incoming requests, and the IP address is localhost, i.e., 127.0.0.1
console.log('Server running at http://8080 localhost')
}

exports.start = start


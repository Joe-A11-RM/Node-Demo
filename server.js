var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function(request, response) {
    //var pathname = url.parse(request.url).pathname
    console.log("Request For" + pathname + "is received")
    fs.readFile('index.html', function(err, data) {
        if (err) {
            console.log(err)
            response.writeHead(404, { 'Content-Type': 'text/html' })
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.write(data.toString())
        }
        response.end()
    })
}).listen(3000)
console.log('Server running at  http://localhost:3000');

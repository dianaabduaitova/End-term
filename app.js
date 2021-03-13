var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    console.log(`Requested url: ${request.url}`);
    var requestPath = '.' + request.url;
    if (requestPath == './')
        requestPath = './index.html';
    else if(requestPath == './about')
        requestPath = './about.html';
    
    fs.readFile(requestPath, function(errors, contents) {
        if (errors) {
            if(errors.code == 'ENOENT'){
                fs.readFile('error.html', function(errors, contents) {
                    response.writeHead(404, {'Content-Type': 'text/html'});
                    response.write(contents);
                    response.end();
                });
            }
            else {
                response.writeHead(500);
                response.end('500 Internal Server Error');
            }
        }
        else if (request.url === '/style.css') {
            fs.readFile('style.css', 'utf8', function(errors, contents){
                response.writeHead(200, {'Content-Type': 'text/css'});
                response.write(contents);
                response.end();
            })
        }
        else if (request.url === '/img/welcome.jpg') {
            fs.readFile('./img/welcome.jpg', function(errors, contents){
                response.writeHead(200, {'Content-Type': 'image/jpg'});
                response.write(contents);
                response.end();
            })
        }
        else if (request.url === '/img/cry.jpg') {
            fs.readFile('./img/cry.jpg', function(errors, contents){
                response.writeHead(200, {'Content-Type': 'image/jpg'});
                response.write(contents);
                response.end();
            })
        }
        else if (request.url === '/img/about.jpg') {
            fs.readFile('./img/about.jpg', function(errors, contents){
                response.writeHead(200, {'Content-Type': 'image/jpg'});
                response.write(contents);
                response.end();
            })
        }
        else if (request.url === "/img/gallery/graduation.jpg") {
            fs.readFile('./img/gallery/graduation.jpg', function(errors, contents){
                response.writeHead(200, {'Content-Type': 'image/jpg'});
                response.write(contents);
                response.end();
            })
        }
        else if (request.url === "/img/gallery/study.jpg") {
            fs.readFile('./img/gallery/study.jpg', function(errors, contents){
                response.writeHead(200, {'Content-Type': 'image/jpg'});
                response.write(contents);
                response.end();
            })
        }
        else if (request.url === "/video/students/memes.mp4") {
            fs.readFile('./video/students/memes.mp4', function(errors, contents){
                response.writeHead(200, {'Content-Type': 'video/mp4'});
                response.write(contents);
                response.end();
            })
        }
        else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        }
    });
}).listen(3000);
console.log('Server running at 3000');
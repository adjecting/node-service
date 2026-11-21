const http = require('http');

if (req.url === '/') {
    res.end('Hello, world!');
} else {
    res.statusCode = 404;
    res.end('Not Found');
}

const server = http.createServer((req, res) => {
    res.end('Hello, world!');
});

server.listen(3000);

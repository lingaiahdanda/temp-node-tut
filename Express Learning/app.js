const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.end("Hey Linga , Welcome to Home page");
    }
    if(req.url == "/about"){
        res.end("Just getting started");
    }
    res.end(`<h1>OOPS!!!!!!</h1>
    <a href="/">Go back home</a>
    `);
})

server.listen(5000);
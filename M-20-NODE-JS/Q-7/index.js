const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('<h1>I AM Happy To Learn Full Stack Web Development From PW Skills !</h1>');
    }


    res.end();
});

server.listen(5005);

console.log("Server Started At Port: 5005");

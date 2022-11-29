//part 1
const http = require("http");
const PORT = 8080;
const fs = require('fs');

const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log("err in request: ", err));
    response.on("error", (err) => console.log("err in response: ", err));
    if(request.url === '/secretpage'){
        console.log('secret page');
        response.end();
    }
    if (request.url === '/'){

        if (request.method === "GET" || request.method === "HEAD") {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            if (request.method === "HEAD") {
                response.end(`<h1>End Method</h1>`);
            } else if (request.method === "GET") {
    
                response.setHeader("content-type", "text/html");
                response.statusCode = 200;
    
                response.end(`<!doctype html>
                                <html>
                                <title>Hello World!</title>
                                <p>Hello World!</p>
                                </html>`);
            }
        } else if (request.method === "POST") {
            console.log("POST request body");
            response.setHeader("Location", "/secretpage");
            response.statusCode = 302;
            response.end();
        } else {
            response.statusCode = 405;
            response.end();
        }
        const data = `${request.method} \n ${request.url} \n ${Date}`;
        fs.appendFile("requests.txt", data, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
});

server.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`)
);



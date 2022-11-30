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
                console.log('HEAD');
                response.end(`<h1>End Method</h1>`);

            } else if (request.method === "GET") {
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
        const data = `${request.method}, ${request.url}, ${new Date}, ${request.headers["user-agent"]}\n`;
        fs.appendFile("requests.txt", data, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
        // fs.readFile("requests.txt", 'utf8', (err, data) => {
        //     console.log(data);
        // });
        let body = '';
        var readStream = fs.createReadStream("requests.txt", 'utf8');
        readStream.on('data', (chunk)=>{
            console.log('data', chunk);
            body += chunk;
            response.end();
        });
        readStream.on('end', ()=>{
            console.log('end with body', body);
            response.end();
        });
    }
});

server.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`)
);

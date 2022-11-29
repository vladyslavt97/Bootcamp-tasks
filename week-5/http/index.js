//part 1
const http = require("http");
const PORT = 8080;

const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log("err in request: ", err));
    response.on("error", (err) => console.log("err in response: ", err));
    if (request.method === "GET" || request.method === "HEAD") {
        if (request.method === "HEAD") {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;
            response.write("<h3>write</h3>");
            response.end(`<h1>End Method</h1>`);
        } else if (request.url === "/mint") {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;

            response.end(`<h1>Hello from <b>/Mint</b>!</h1>`);
        }
    } else if (request.method === "POST") {
        console.log("POST request");
        let body = '';
        request.on('data', function(chunk) {
            body += chunk;
        }).on('end', function() {
            console.log(body); //logs the entire request body
        });
    } else if (request.method !== "POST" || request.method !== "GET" || request.method !== "HEAD") {
        response.statusCode = 405;
    }
});

server.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`)
);



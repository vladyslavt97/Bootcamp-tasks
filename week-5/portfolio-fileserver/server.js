const http = require("http");
const fs = require("fs");
const path = require("path"); // use path.join() for concatenating paths
const generateProjects = require('./generate-projects');
//require function in Server.js
const contentTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon"
};

const server = http.createServer((req, res) => {
    req.on('error', (err) => {
        console.log('Error while getting request: ', err);
    });
    res.on('error', (err) => {
        console.log('Error while sending response: ', err);
    });

    // In total 3 big if statements
    if (req.method !== "GET") { // 1. Check if method is GET. If it is not. 
        res.statusCode = 400; //Send response with statuscode 400
        res.end();
        return;
    }
    if (req.url === '/'){ 
        const finalHtml = generateProjects();
        res.setHeader('content-type', 'text/html');
        res.end(finalHtml);
    }
    
    // 3. Check if req.url is NOT '/'. If it is not '/' then do additional logic
    if (req.url !== '/') { // assuming req.url is '/ticker' for now
        // __dirname would result to current directory: /Users/zartin/ws/spiced-ws/lessons/02-node/06-portfolio-fileserver
        const pathToCheck = path.join(__dirname, 'projects', req.url);
        const pathExisting = fs.existsSync(pathToCheck);
        if (pathExisting) {
            if (fs.statSync(pathToCheck).isFile()){
                const fileContent = fs.readFileSync(pathToCheck);
                const ext = path.extname(pathToCheck);
                res.setHeader('content-type', contentTypes[ext]);
                res.end(fileContent);
            } else {// else (then it is a directory)
                if (req.url.endsWith("/")){
                    const indexHtmlPath = path.join(pathToCheck, 'index.html');
                    if (fs.existsSync(indexHtmlPath)){
                        const htmlContent = fs.readFileSync(indexHtmlPath);
                        res.end(htmlContent);
                    }else{
                        res.statusCode = 404; // else send 404 back
                        res.end();
                    } 
                }else{ // else (does not end with slash)
                    res.setHeader("Location", req.url + "/"); //make a redirect to req.url + '/'
                    res.statusCode = 307;
                    res.end('do the redirect');
                }
            }
        } else {
            res.statusCode = 404;
            res.end();
        
        }
    }
});

server.listen(8081, () => {
    console.log("server listening on port localhost: 8081...");
});



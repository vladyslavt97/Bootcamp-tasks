const http = require('http');
const chalk = require('chalk');
const PORT = 3000;
// const qs = require('querystring');
const {URLSearchParams} = require('url'); 

const server = http.createServer((req, res)=>{
    req.on('error', (err)=> console.log('error in request: ', err));
    req.on('error', (err)=> console.log('error in request: ', err));

    if(req.method === 'GET'){
        res.setHeader('content-type', 'text/html');
        res.statusCode = 200;

        res.write(`<!doctype html>
                    <html>
                    <title>Colors</title>
                    <form method="POST">
                    <input type="text" name="text">
                    <select name="color">
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="green">green</option>
                        <option value="yellow">yellow</option>
                        <option value="gray">gray</option>
                        <option value="magenta">magenta</option>
                        <option value="cyan">cyan</option>
                    </select>
                    <button type="submit">Go</button>
                    </form>
                    </html>`);
        res.end();
    } else if(req.method === 'POST'){
        console.log("POST request");
        let body = "";

        req.on("data", (chunk) => {
            console.log("chunk: ", chunk);
            body += chunk;
        });

        req.on("end", () => {
            console.log("body: ", body);
            // const parsedBody = qs.parse(body);
            // console.log('parsedBody: ', parsedBody);

            const params = new URLSearchParams(body);
            // console.log(chalk.red(params));
            console.log(chalk[params.get('color')](params.get("text")));
            res.setHeader("content-type", "text/html");
            res.statusCode = 200;
            res.write(`<!doctype html>
                        <html>
                        <title>${params.get("text")}</title>
                        <a href="/" style="color:${params.get("color")}">${params.get("text")}</a>
                        </html>`);
            // res.end(`<h3>Post request was made by ${params.get("text")}!</h3>`);
            res.end();
        });
    }
})
    .listen(PORT, ()=> 
        console.log(`Server is listening at http://localhost:${PORT}`)
    );
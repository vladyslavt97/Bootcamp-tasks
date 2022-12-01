const express = require('express');
const path = require('path');
const app = express();
const generateProjects = require('./generate-projects');

app.use((req, res, next) => {
    console.log('Hi I am executed first with URL: ', req.url);
    next();
});

const staticMiddleware = express.static(path.join(__dirname, 'projects'));
app.use(staticMiddleware);

app.get('/', (req, res) => {
    const finalHtml = generateProjects();
    res.send(finalHtml);
});

const urlEncodedMiddleware = express.urlencoded({ extended: false });
app.use(urlEncodedMiddleware);

app.post('/hello-world', (req, res) => {
    console.log('Body of request: ', req.body);
    const cohort = req.body.cohort;
    res.send(`Cohort you send was ${cohort}`);
});

app.get('/home', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>HOME!</title>
            </head>
            <body>
                <p>HOME! from expres</p>
            </body>
        </html>`
    );

});

app.listen(3000, () => {
    console.log('express server is running on localhost:3000...');
});
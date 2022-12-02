const express = require('express');
const path = require('path');
const app = express();
const generateProjects = require("./generate-projects");
const cookieParser = require('cookie-parser');
const {auth} = require('./index');

let userReq = '';
app.use((req, res, next) => {
    if (req.url.includes('favicon.ico')) {
        res.sendFile(path.join(__dirname, 'cookies', 'favicon.ico'));
    } else {
        next();
    }
});

app.use(cookieParser());

app.use((req, res, next) => {
    if (req.url.startsWith("/cookies")) {
        if(req.cookies.accepted === 'on'){
            console.log("With cookies");
            if (req.url.startsWith('/cookies')){
                console.log('should get redirected to home');
                res.redirect('/home');
            }else {
                next();
            }
        }
        next();
    } else if (!req.url.startsWith("/cookies")){
        if (req.cookies.accepted === "on") {
            next();
        } else {
            userReq = req.url;
            res.redirect("/cookies/");
        }
    } 
});

app.use('/canvas', auth);

// middleware to serve static files from a specific folder
const staticMiddleware = express.static(path.join(__dirname, 'projects'));
app.use(staticMiddleware);

app.get('/', (req, res) => {
    const finalHtml = generateProjects();
    res.send(finalHtml);
});

// middleware to encoding the body of a POST request
const urlEncodedMiddleware = express.urlencoded({ extended: false });
app.use(urlEncodedMiddleware);

app.get('/cookies', (req, res)=>{
    console.log('cookies get');
    res.sendFile(path.join(__dirname, '/cookies', 'index.html'));
});

app.get('/home', (req, res) => {
    const finalHtml = generateProjects();
    res.send(finalHtml);
});


//saves the ticker to userReq 
app.post('/cookies', (req, res) => {
    console.log('req.body', req.body);
    if(req.body.someSelect === 'accept' && req.body.cohort === 'on'){
        res.cookie('accepted', 'on');
        res.redirect(userReq);
    } else {
        res.redirect('/cookies/');
    }
});

app.listen(8080, () => {
    console.log('express server is running on localhost:8080...');
});



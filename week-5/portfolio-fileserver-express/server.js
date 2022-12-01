const express = require('express');
const path = require('path');
const app = express();
const generateProjects = require("./generate-projects");
const cookieParser = require('cookie-parser');

let userReq = '';
app.use((req, res, next) => {
    if (req.url.includes('favicon.ico')) {
        res.sendFile(path.join(__dirname, 'cookies', 'favicon.ico'));
    } else {
        next();
    }
});
// needs to be called first in order to access req.cookies
app.use(cookieParser());

// check if we are allowed to visit url by checking cookies

app.use((req, res, next) => {
    if (req.url.startsWith("/cookies")) {
        if(req.cookies.accepted === 'on'){
            console.log("With cookies");
            if (req.url.startsWith('/cookies')){ //+
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
    // else if(req.cookies.accepted === 'on'){
    //     console.log("With cookies");
    //     if (req.url.startsWith('/cookies')){ //+
    //         console.log('should get redirected to home');
    //         res.redirect('/home');
    //     }else {
    //         next();
    //     }
    // }//////////////////
    // else if(req.cookies.accepted === 'on' && req.url.startsWith('/cookies')){
    //     console.log('whats going on', req.cookies.accepted === 'on' && req.url.startsWith('/cookies'));
    //     res.redirect('/home');
    //     next();
    // } else {
    //     next();
    // }
});


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
    if(req.body.someSelect === 'accept' && req.body.cohort === 'on'){// if cookie was accepted
        res.cookie('accepted', 'on');
        res.redirect(userReq); // redirect to the initial page
    } else {// else
        res.redirect('/cookies/'); // redirect to /cookies
    }
});

// app.post('/cookies', (req, res) => {
//     console.log('req.body', req.body);
//     res.cookie('accepted', 'on');
//     if(req.body.someSelect === 'accept' && req.body.cohort === 'on'){// if cookie was accepted
//         console.log('redirect to', userReq);
//         res.redirect(userReq); // redirect to the initial page
//     } else {// else
//         res.redirect('/cookies/'); // redirect to /cookies
//     }
// });
app.listen(8080, () => {
    console.log('express server is running on localhost:8080...');
});
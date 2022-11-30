const fs = require('fs');
const path = require('path');

const projects = fs.readdirSync(path.join(__dirname, 'projects'));

module.exports = function generateProjects() {   
    let html = '';
    if (projects.length === 0) {
        return "No results";
    } else {
        for (let i = 1; i < projects.length; i++) {
            html += `<a href="./${projects[i]}"> ${projects[i]} </a> <br>`;
        }
    }
    return `<h1> MY PROJECTS </h1>` + html + `<title>Portfolio</title> <style> 
        body {
            background-color: coral;
            
        }
        a{
            font-size: 45px;
        }
        h1{
            color: red;
        }
        </style>`;
    // return `<!DOCTYPE html>
    //         <html>
    //         <head>
    //         <title>Portfolio</title> <style>
    //         <link rel="icon" href="/favicon.ico" type="image/x-icon">
    //         <style> 
    //                 body {
    //                     background-color: coral;
    //                 }
    //                 a{
    //                     font-size: 85px;
    //                 }
    //                 h1{
    //                     color: red;
    //                 }
    //                 </style>
    //         </head>
    //         <body> <h1> MY PROJECTS </h1>` + html + `
    //         </body>
    //         </html>`;
};




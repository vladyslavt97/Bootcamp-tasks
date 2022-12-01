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
    return `<h1> MY PROJECTS </h1>` + html + `<title>Portfolio</title> <link rel="icon" href="/favicon.ico" type="image/x-icon"> <style> 
        body {
            background: rgb(97,159,150);
            background: linear-gradient(-90deg, rgba(97,159,150,1) 0%, rgba(115,115,115,1) 100%);
        }
        a{
            font-size: 45px;
        }
        h1{
            display: flex;
            justify-content: center;
            color: white;
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




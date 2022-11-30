const fs = require('fs');
const path = require('path');

// const projects = [
//     { url: '/connect-four', name: 'Connect Four'},
// ]
// OR more advanced version: use fs.readDirSync for example
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
    return `<html><head><><body><h1> MY PROJECTS </h1>` + html + `<title>HTML Elements Reference</title> <style> 
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
};

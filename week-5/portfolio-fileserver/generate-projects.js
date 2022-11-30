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
        for (let i = 0; i < projects.length; i++) {
            html += "<a>" + projects[i] + "</a>";
        }
    }
    return html;
};

const fs = require('fs');
const path = require('path');

const projects = fs.readdirSync(path.join(__dirname, 'projects'));

module.exports = function generateProjects() {   
    let html = '';
    if (projects.length === 0) {
        return "No results";
    } else {
        for (let i = 2; i < projects.length; i++) {
            html += `<li> <a href="./${projects[i]}"> ${projects[i]} </a> <br> </li>`;
        }
    }
    return `<title>Portfolio</title> <link rel="icon" href="/1_helper-things/favicon.ico" type="image/x-icon"> <h1> MY PROJECTS </h1> <div><ol>` + html + `</ol></div> <style> 
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
            -webkit-text-stroke: 1px darkgreen;
            text-stroke: 1px darkgreen;
            animation: bounce2 2s ease infinite;
            background: -webkit-linear-gradient(45deg, white, darkorange 70%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            
        }
        @keyframes bounce2 {
            0%,
            20%,
            50%,
            80%,
            100% {
                transform: translateY(0);
            }

            40% {
                transform: translateY(-10px);
            }

            60% {
                transform: translateY(-5px);
            }
        }
        

        ol{
            font-size: 25px;
            color: darkgreen;
        }
        div{
            background-color: beige;
            border-radius: 25px;
            width: 50%;
            border: 5px dotted darkgreen;
        }
        div {
            animation: pulse-white 2s infinite;
        }

        @keyframes pulse-white {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
        }
        
        70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
        }
        
        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
        }
        }
        </style>`;
};




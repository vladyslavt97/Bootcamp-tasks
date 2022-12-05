const express = require("express");
const app = express();

const projects = require("./data.json");

// Handlebars Setup
const { engine } = require("express-handlebars");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
// End of setup

app.use(express.static("./public"));
app.use(express.static("./projects"));

const cohortName = "Mint";

app.get("/", (req, res) => {
    res.render("show-lists", {
        layout: "main",
        cohortName,
        projects,
        showImage: true,
        helpers: {
            getStylesHelper: "/styles.css" 
        }
    });
});


app.get('/projects', (req, res) => {
    res.redirect('/projects/canvas');
});

// :projectDirectory is a placeholder and will be put in req.params object
app.get('/projects/:projectDirectory', (req, res) => {
    const projectDirectory = req.params.projectDirectory; // 'kitty-caroussel';
    const selectedProject = projects.find(p => {
        return p.url === projectDirectory;
    });
    
    if (selectedProject === undefined){// TASK: check if selectedProject is undefined.
        res.status(404).send("Wrong request"); //      if it is undefined. set statuscode 404 and send response.
    }

    res.render('show-lists', {
        layout: "main",
        projects: projects,
        showImage: false,
        selectedProject: selectedProject,
        helpers: {
            getStylesHelper: "/stylesforprojects.css",
            getActiveClass: (url) => {
                // console.log(selectedProject);
                if(selectedProject.url === url){
                    return 'active';
                }  
            }
        }
    });
});


app.listen(3000, console.log("running server at 3000..."));

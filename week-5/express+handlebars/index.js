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
    res.render("generalTemplate", {
        layout: "main",
        cohortName,
        projects
    });
});

app.listen(3000, console.log("running server at 3000..."));










// app.get("/about", (req, res) => {
//     res.render("aboutTemplate", {
//         layout: "main",
//         projects,
//         cohortName,
//     });
// });
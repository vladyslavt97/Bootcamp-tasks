const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

function logSizes(fullPath){
    const files = fs.readdirSync(fullPath, { withFileTypes: true});
    // console.log('my flies: ', files);
    for (const entity of files) {
        if (entity.isFile()){
            const filePath = fullPath + '/' + entity.name;
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.log("Error in stat");
                }
                console.log(chalk.bold.red('path: '), chalk.italic.bgWhite.green(filePath), chalk.blue("File size is "), stats.size);
            });
        } 
        if (entity.isDirectory()){
            const newPath = fullPath + '/' + entity.name;
            // console.log('newpath', newPath);
            logSizes(newPath);
        }
    } 
}
logSizes(path.join(__dirname, 'files'));


//part 2
function mapSizes(fullPath){
    const files = fs.readdirSync(fullPath, { withFileTypes: true});
    // console.log('my flies: ', files);
    const myObj = {};
    for (const entity of files) {
        if (entity.isFile()){
            const filePath = fullPath + '/' + entity.name;
            // console.log('my enity: ', entity);
            const saved = fs.statSync(filePath); 
            myObj[entity.name] = saved.size;
            // console.log(myObj);
        } 
        if (entity.isDirectory()){
            const newPath = fullPath + '/' + entity.name;
            myObj[entity.name] = mapSizes(newPath);
        }
    }
    fs.writeFileSync("files.json", JSON.stringify(myObj, null, 4));
    console.log('saved'); 
    return myObj;
}
console.log(mapSizes(path.join(__dirname, 'files')));



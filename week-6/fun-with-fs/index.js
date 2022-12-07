let {readdir, stat} = require('fs');
const {promisify} = require('util');

readdir = promisify(readdir);
stat = promisify(stat);

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


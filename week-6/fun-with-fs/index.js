let {readdir, stat} = require('fs');
const {promisify} = require('util');

readdir = promisify(readdir);
stat = promisify(stat);

const chalk = require('chalk');
const path = require('path');

function logSizes(fullPath){
    
    const resolvedPromises = readdir(fullPath, {withFileTypes: true})
        .then((files) => {
            const promises = [];
            for (const entity of files) {
                // console.log('entity', entity);
                const newPath = fullPath + '/' + entity.name;
                if (entity.isDirectory()){
                    promises.push(logSizes(newPath));
                } else {
                    // const filePath = fullPath + '/' + entity.name;
                    promises.push(stat(newPath)
                        .then((stats) => {
                            console.log(chalk.bold.red('path: '),
                                chalk.italic.bgWhite.green(newPath), chalk.blue("File size is "), stats.size);
                        })
                        .catch((err) => {
                            console.log(err);
                        }));
                }

            }
            return Promise.all(promises);
        })
        .catch((error) => {
            console.log(error);
        }); 

    return resolvedPromises;
}

logSizes(path.join(__dirname, 'files'))
    .then(() => {
        console.log('DONE!');
    })

    .catch((err) => {
        console.log(err);
    });
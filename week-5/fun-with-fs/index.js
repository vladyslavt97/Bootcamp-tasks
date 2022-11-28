const fs = require('fs');
const path = require('path');
// function logSizes(fullPath){
//     const files = fs.readdirSync(fullPath, { withFileTypes: true});
//     // console.log('my flies: ', files);
//     for (const entity of files) {
//         if (entity.isFile()){
//             const filePath = fullPath + '/' + entity.name;
//             fs.stat(filePath, (err, stats) => {
//                 if (err) {
//                     console.log("Error in stat");
//                 }
//                 console.log('path: ', filePath, "File size is ", stats.size);
//             });
//         } 
//         if (entity.isDirectory()){
//             const newPath = fullPath + '/' + entity.name;
//             // console.log('newpath', newPath);
//             logSizes(newPath);
//         }
//     } 
// }
// logSizes(path.join(__dirname, 'files'));


//part 2
function mapSizes(fullPath){
    const files = fs.readdirSync(fullPath, { withFileTypes: true});
    // console.log('my flies: ', files);
    //create an object and add to it a property for each of the items found
    const myObj = {};
    for (const entity of files) {
        if (entity.isFile()){ //If the item is a file, the name of the property should be the item's name and the value of the property should be the item's size. To get the size you will have to call statSync and pass to it the full path to the file.
            const filePath = fullPath + '/' + entity.name;
            // console.log('my enity: ', entity);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.log("Error in stat");
                }
                myObj[entity.name] = stats.size;
                console.log('obj ', myObj);
                // console.log([entity] + ': ' + stats.size);
            });
        } 
        if (entity.isDirectory()){ //If the item is a directory, the name of the property should be the item's name and the value should be the object you get by calling mapSizes again and passing it the full path to the directory. After adding a property for each file and directory, mapSizes should return the object it created.
            const newPath = fullPath + '/' + entity.name;
            // const 
            // console.log(entity.name + ': ' + mapSizes(newPath[]));
        }
    } 

}
mapSizes(path.join(__dirname, 'files'));


// mapSizes()
// fs.writeFileSync(filePath3, JSON.stringify(obj, null, 4));
// const files = fs.readdirSync(fullPath, { withFileTypes: true});
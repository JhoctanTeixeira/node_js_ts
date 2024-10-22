let fs = require('fs')

function readFileAsync(filename){
    return new Promise( (resolve, reject) => {
        fs.readFile(filename, (error, result) => {
            if(error){
                reject(error);
            } else {
                resolve(result);
            }

        });
    });
}
module.exports = readFileAsync;
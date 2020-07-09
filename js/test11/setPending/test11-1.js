var fs = require("fs")

function readFile(filename) {
    return new Promise( (resolve, reject) => {
        fs.readFile(filename, {encoding: "utf8"}, (err, contents) => {
            if (err) { reject(err); return; }
            resolve(contents);
        });
    });
}
// pending状态
let promise = readFile("../example1.txt");

// let promise = new Promise( (resolve, reject) => {
//     fs.readFile("../example.txt", {encoding: "utf8"}, (err, contents) => {
//         if (err) { reject(err); return; }
//         resolve(contents);
//     });
// });
console.log(promise);    

promise.then(
    //fulfilled状态
    (contents) => {
        console.log(contents);
        console.log(promise);
    },
    //rejected状态
    (err) => {
        console.error(err.message);
        console.log(promise);  
    });

    




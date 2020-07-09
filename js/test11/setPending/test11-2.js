var fs = require("fs")

function readFile(filename) {
    console.log(2);
    return new Promise( (resolve, reject) => {
        console.log(3);
        fs.readFile(filename, {encoding: "utf8"}, (err, contents) => {
            if (err) { reject(err); return; }
            resolve(contents);
            console.log(4);
        });
    });
}

console.log(1);

// pending状态
let promise = readFile("../example.txt");
promise.then(
    //fulfilled状态
    (contents) => {
        console.log(contents);
        console.log(5);
    },
    //rejected状态
    (err) => {
        console.error(err.message);
    });

console.log(6);




var fs = require("fs")

function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, {
            encoding: "utf8"
        }, (err, contents) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(contents);
        });
    });
}

//1.参数为非thenable对象或非对象或不传参，返回fulfilled状态的promise
let promise = Promise.resolve();
console.log(promise);

let promise1 = Promise.resolve(42);
console.log(promise1);

//2.参数为promise实例，原封不动的返回传入的promise
// pending状态
let pending = readFile("../example.txt");
let promiseP1 = Promise.resolve(pending);
console.log(promiseP1);

// fulfilled状态
let fulfilled = Promise.resolve(42);
let promiseP2 = Promise.resolve(fulfilled);
console.log(promiseP2);

//3.参数为thenable实例，返回fulfilled状态的promise
let thenable = {
    then: function (resolve, reject) {
        resolve(42);
    }
};
let p1 = Promise.resolve(thenable);
setTimeout(() => {
    console.log(p1);
}, 0);

let thenable1 = {
    then: function (resolve, reject) {
        reject(42);
    }
};
let p2 = Promise.resolve(thenable1);
p2.catch((err) => {
    return;
})
setTimeout(() => {
    console.log(p2);
}, 0);
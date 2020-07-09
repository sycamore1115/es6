//非promise的thenable对象
let thenable = {
    then: function (resolve, reject) {
        resolve(42);
    }
};
let p1 = Promise.resolve(thenable);

let thenable1 = {
    then: function (resolve, reject) {
        reject(42);
    }
};
let p2 = Promise.resolve(thenable1);
p2.catch((err) => {
    return;
})


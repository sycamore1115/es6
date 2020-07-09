//3.当then里面抛出一个错误的时候，返回一个rejected状态的promise,且将抛出的错误作为回调函数的参数
let pl = new Promise(function (resolve, reject) {
    resolve(42);
});

let p2 = pl.then(function (value) {
    throw new Error("Boom!");
});

p2.catch(function (error) {
    console.log(p2);
    console.log(error.message);
});
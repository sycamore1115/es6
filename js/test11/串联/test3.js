//4.当then里面return的是Promise对象时,返回一个状态相同且回调函数的参数值相同的promise对象
let pl = new Promise(function (resolve, reject) {
    resolve(42);
});
let p2 = new Promise(function (resolve, reject) {
    resolve('hello');
});
console.log(p2);

let p3 = pl.then(function (value) {
    console.log(value); // 42
    return p2;
});

p3.then(function (value) {
    console.log(p3);
    console.log(value); 
});


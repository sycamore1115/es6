//then接收两个参数，完成函数和失败函数
//then的返回值为一个新的promise
//1.当then里面没有写return语句或return undefined时，返回一个fulfilled状态的promise，且他回调函数的参数值为undefined
//2.当then里面return的是非Promise对象时，返回一个fulfilled状态的promise，且他回调函数的参数值为返回的值
//3.当then里面抛出一个错误的时候，返回一个rejected状态的promise,且将抛出的错误作为回调函数的参数
//4.当then里面return的是Promise对象时,返回一个状态相同且回调函数的参数值相同的promise对象
let pl = new Promise(function (resolve, reject) {
    resolve(42);
});

let p2 = pl.then(
    function (value) {
        console.log(value);
        // return undefined;
        // return 42;
        // return {name:'pheony',age:25};
    });

p2.then(function () {
    console.log(p2);
    console.log("Finished");
});
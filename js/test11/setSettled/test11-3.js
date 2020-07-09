//创建已完成的promise
let promise = Promise.resolve(42);
console.log(promise);

promise.then(function (value) {
    console.log(value); //42
});


let promise1 = Promise.reject(42);
console.log(promise1);
promise1.catch(function (value) {
    console.log(value); // 42
});

console.log(1);
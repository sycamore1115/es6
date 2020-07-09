
let i = 6;

let promise = new Promise(function(resolve,reject){
    if(i<10){
        reject('i不能小于10');
        return;
    }
    resolve(i);
});
// promise.then((value) => {
//     console.log(value)
// }, (err) => {
//     console.log(err)
// })

// promise.catch((err) => {
//     console.log(err)
// })


let rejected;
process.on('"unhandledRejection"', function (reason, promise) {
    console.log(reason.message);          // "Explosion !"
    console.log(rejected === promise);     // true
});
// process. on("rejectionHandled", function(promise) {
//     console. log(rejected === promise); // true
//     });
rejected = Promise.reject(new Error("Explosion !"));

setTimeout(()=>{
    console.log(1);
},0)

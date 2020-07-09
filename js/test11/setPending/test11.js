let i = 6;

let promise = new Promise(function(resolve,reject){
    if(i<10){
        reject('i不能小于10');
        return;
    }
    resolve(i);
});

// console.log(promise);

promise.then((value) => {
    console.log(value)
}, (err) => {
    console.log(err)
})


// promise.catch((err) => {
//     console.log(err)
// })


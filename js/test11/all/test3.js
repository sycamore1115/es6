setTimeout(()=> {
    console.log('time')
},0)
console.log(1);
let p2 = new Promise(function (resolve, reject) {
    console.log(2);
    resolve(43);
});
console.log(p2);
console.log(3);
console.log(4);
console.log(5);

let p2 = new Promise(function (resolve, reject) {
    console.log(2);
    resolve(43);
});

let p1 = Promise.resolve(42);
console.log(1);

let p3 = new Promise(function (resolve, reject) {
    console.log(3);
    resolve(44);
});
console.log(p1);
console.log(p2);
console.log(p3);
let p4 = Promise.race([p1, p2, p3]);
p4.then(function (value) {
    console.log(value); //42
});
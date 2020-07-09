let pl = new Promise(function (resolve, reject) {
    resolve(42);
});
let p2 = new Promise(function (resolve, reject) {
    resolve(43);
});
let p3 = new Promise(function (resolve, reject) {
    resolve(44);
});
// let p4 = Promise.all([pl, p2, p3]);
let p4 = Promise.all(new Map([[1,pl], [2,p2], [3,p3]]));

p4.then(function (value) {
    console.log(p4);
    console.log(Array.isArray(value));
    // console.log(value[0]);
    // console.log(value[l]);
    // console.log(value[2]);
});
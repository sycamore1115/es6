let values = [6,3,8];

// //for循环
// for(let i=0; i<values.length; i++){
//     console.log('for: '+values[i]);
// }

// // //for in 循环 来枚举对象的属性 for-in是为普通对象设计的
// // for(let index in values) {  
// //     console.log('for-in: '+values[index]);   //index：0,1,2
// // };  

// //foreach
// values.forEach( (value) =>{
//     console.log('forEach: '+value);
// })

// //for-of,不同于forEach方法，它可以与break、continue和return配合使用
for(let value of values){
    console.log('for-of: '+value)
}

// 字符串,for-in for-of for可用
// let text ='hello';
// for (let t of text){
//     console.log(t)
// }
// ____________________________________________________________________________________________________

//数组对象
let set = new Set(['abc', 3, 2]);

// //foreach
// set.forEach((s) => {
//     console.log('forEach: ' + s);
// })

// //for-of
for (let s of set) {
    console.log('for-of: ' + s)
}

//__________________________________________________________________________________________________________

let map = new Map([['name','phoeny'],['sex','male'],['age',25]]);

// //foreach
// map.forEach((m) => {
//     console.log('forEach: ' + m);
// })

// //for-of
for (let m of map) {
    console.log('for-of: ' + m)
}

//___________________________________________________________________________________________________________

//普通对象
// let person = {
//     name:'phoeny',
//     sex: 'male',
//     age:'25'
// }

// //for in 循环 来枚举对象的属性
// for(let p in person){
//     console.log('for-in: ' +p);
// }


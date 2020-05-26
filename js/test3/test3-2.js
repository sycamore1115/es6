//Math.max支持传入多个参数
let num1 = Math.max(25,50,75,100);
console.log("num1="+num1);

let values = [25,50,75,100];

//Math.max不支持传入数组
let num2 = Math.max(values);
console.log("num2="+num2);

//apply可将数组解析成一个一个的参数列表
let num3 = Math.max.apply(Math,values);
console.log("num3="+num3);

let num4 = Math.max.apply(null,values);
console.log("num4="+num4);

//用apply不清晰，es6加入不定参数
let num5 = Math.max(...values);
console.log("num5="+num5);
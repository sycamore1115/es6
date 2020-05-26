//标签模板
//标签：在模板字面量第一个反撇号前标注的字符串
//1.literals数组中项的个数：模板字面量中的占位符(${})的个数+1,
//开始：第一个${}之前的，包括空字符串，literals[0]总是字符串的始端
//中间：两个${}之间的字符串
//结束：最后一个${}之后的，包括空字符串，literals[literals.length-1]总是字符串的结尾
//2.substitutions:暂时将其看成一个数组，其长度是模板字面量中的占位符(${})的个数
//传入的是每个${}后内的解释值
//则有substitutions.length = literals.length-1
function tag(literals, ...substitutions) {
    //返回一个字符串
}

// function passthru(literals, ...substitutions) {
//     let result = "";
//     /**
//      * 第一次循环：0   ""                 "10"                    1
//      * 第二次循环：1   "10 items cost $"  "10 items cost $2.50"   2
//      */
//     for (let i = 0; i < substitutions.length; i++) {
//         result += literals[i];
//         result += substitutions[i];
//     }
//     //"10 items cost $2.50."
//     result += literals[literals.length - 1];
//     return result;
// }
// let count = 10,
//     price = 0.25,
//     //等价于message = passthru(literals,10,0.25);
//     message = passthru `${count} items cost $${(count * price).toFixed(2)}.`;
// console.log(message);


let message1 = `Multiline\nstring`,
message2 = String.raw`Multiline\nstring`;
console.log(message1); // "Multiline
// string"
console.log(message2); // message2实际是Multiline\\nstring,控制台打印"Multiline\nstring"
console.log('Multiline\\nstring1'); 

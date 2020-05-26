// 字符串占位符:使用${}的形式将合法的js表达式添加到字符串中
//变量
let name = `Nicholas`,
    message1 = `Hello,${name}`;
console.log(message1);    

//运算符、函数调用
let count = 10,
    price = 0.25,
    message2 = `${count} items cost $${(count * price).toFixed(2)}`;
console.log(message2);

//模板字面量
let message3 = `Hello,${
    `my name is ${name}`
}`;
console.log(message3);
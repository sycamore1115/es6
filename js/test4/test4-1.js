//对象字面量
// 1.属性名和变量名同名，可只写属性名
// 2.方法可省略:和function关键字
// 3.可计算的属性名 
let name = "Nicholas";

//JS
let lastName = "last name";
let person1 = {
    name: name,
    sayName: function () {
        console.log(this.name);
    }
};
person1.sayName();

//ES6
let person2 = {
    name,
    sayName() {
        console.log(this.name);
    }
}
person2.sayName();

//想添加属性名为first name的属性
let person3 = {
    //无效标识符，标识符只能由数字，字母，下划线,$组成，且第一位不能是数字
    // first name: "123",  
}
//方法1,用方括号(字符串)在对象后面添加
let person31 = {};
person31["first name"] = "zakas1";
console.log(person31["first name"]);
//方法2，用变量添加
let firstName = "first name"
let person32 = {};
person32[firstName] = "zakas2";
console.log(person32[firstName]);
//方法3，前2种方法都不能在对象字面量里直接添加属性，方法3直接使用字符串作为属性名、
let person33 = {
    "first name": "zakas3"
};
console.log(person33["first name"]);
//但方法3是在已知属性名的情况下使用的，如果属性名需要计算则不可用

//ES6中同样使用方括号来处理这种情况
//方法1
let person41 = {
    ["first name"] : "nicol1"
}
console.log(person41["first name"]);
//方法2
let firstName1 = "first name"
let person42 = {
    [firstName1] : "nicol2"
};
console.log(person42[firstName]);
//需计算的属性名
let suffix = " name";
let person43 = {
    ["first" + suffix] : "Nicholas",
    ["last" + suffix] : "Zakas"
}
console.log(person43["first name"]);
console.log(person43["last name"]);
//箭头函数：参数 + => + 函数体
// () => {};
/**
 * 参数
 * 1.没有参数：()
 * 2.一个参数a：a 或 (a)
 * 3.多个参数：(a,b)
 */
/**
 * 函数体
 * 1.空函数：{}
 * 2.一条语句：可以不需要{}
 * 3.多条语句：{函数体}
 * *函数体内只有return语句：如果返回值是对象字面量，则:({对象字面量}),如果返回值是其他，则直接写返回值
 */

// let PageHandler = {
//     id: "123456",
//     init: function () {
//         document.addEventListener("click", function (event) {
//             this.doSomething(event.type); //抛出错误
//         }, false);
//     },
//     doSomething: function (type) {
//         console.log("Handling" + type + "for" + this.id);
//     }
// };

// let PageHandler = {
//     id: "123456",
//     init: function () {
//         document.addEventListener("click", (function (event) {
//             this.doSomething(event.type); // 没有错误产生
//         }).bind(this), false);
//     },
//     doSomething: function (type) {
//         console.log("Handling " + type + " for " + this.id);
//     }
// };
//将这个方法绑到this上
//var f = function (event) {this.doSomething(event.type); }
//var f2 = f.bind(this);
// (function (event) {
//     this.doSomething(event.type); 
// }).bind(this)

//箭头函数没有this绑定
let PageHandler = {
    id: "123456",
    init: function () {
        document.addEventListener("click",
            event => this.doSomething(event.type), false);
    },
    doSomething: function (type) {
        console.log("Handling " + type + "for " + this.id);
    }
};

PageHandler.init();



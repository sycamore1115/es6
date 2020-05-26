// //—————————————————————————————————————循环里的块级作用域————————————————————————————————————————————————————————————
// //for循环里输出相同的值会在浏览器控制台叠加显示
// var a = 2;
// for(i=0;i<4;i++){
//     console.log(a);
// }
// /**
//  * 循环中的函数
//  * 作用域链被保存在[[scope]]属性中，它从最前端找起，从下标0开始往外找
//  */
// //闭包 js红宝书第七章第一节20min-25min
// //结果：输出10个10
//var i是在全局作用域中的变量，可在[[scope]]属性中的global中找到，for循环执行完毕i的值为10
// var funcs = [];
// for(var i=0;i<10;i++){
//     funcs.push(
//         function(){console.log(i);}
//     );
// }
// //[ function(){console.log(i), function(){console.log(i); function(){console.log(i);.....]
// console.log(funcs);
// funcs.forEach(
//     function(func){func();}
// );
// //改进1:自执行函数
// //value 是在闭包作用域中的变量，可在[[scope]]属性中的closure中找到
// var funcs = [];
// for (var i = 0; i < 10; i++) {
//     funcs.push(
//         (function (value) {
//             return function () {
//                 console.log(value);
//             }
//         })(i)
//     );
// }
// //此时已有两层作用域
// console.log(funcs);
// funcs.forEach(
//     function (func) {
//         func();
//     }
// );
// //改进2：采用let
// //用let声明的变量在块级作用域中，可在[[scope]]属性中的block中找到
// var funcs = [];
// for(let i=0;i<10;i++){
//     funcs.push(
//         function(){console.log(i);}
//     );
// }
// console.log(funcs);
// funcs.forEach(
//     function(func){func();}
// );

// //const在循环中使用
var funcs = [],
    object = {a:true, b:true, c:true};
for(const key in object){
    funcs.push(
        function(){console.log(key);}
    );
}
console.log(funcs);
funcs.forEach(
    function(func){func();}
);



// var funcs = [];
// for (var i = 0,j=4; i < 10; i++) {
//     funcs.push(
//         (function (value) {
//             return (function (tt) {
//                 return function(){
//                     console.log(value);
//                     console.log(tt);
//                 }
//             })(j)
//         })(i)
//     );
// }
// //此时已有两层作用域
// console.log(funcs);
// funcs.forEach(
//     function (func) {
//         func();
//     }
// );
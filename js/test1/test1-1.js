//———————————————————————————————通过let const声明引入块级作用域 / 临时死区————————————————————————————————————————————————————————————

/**
 * 不论condition是true或false，在1,2,3都可以访问到value
 * 因为es6之前没有块级作用域
 */
//condition==true:弹出blue1,blue3
//condition==false:弹出undefined2,undefined3
// function getValueVar(condition){
//     if(condition){
//         var value  = 'blue';
//         alert(value+"1");
//     }else{
//         alert(value+"2");
//     }
//     alert(value+"3");
// }
// getValueVar(false);
//实际上上段代码在预编译阶段会修改成下面这样,变量的var声明都会提升到当前作用域的顶部
// function getValueVar1(condition){
//     var value;
//     if(condition){
//         value  = 'blue';
//         alert(value+"1");
//     }else{
//         alert(value+"2");
//     }
//     alert(value+"3");
// }

//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

/**
 * 在es6引入块级作用域
 * let声明不会被提升
 * const声明，声明时必须同时进行初始化，设定值后不能修改，声明对象时，不能修改绑定，但可以修改绑定的值
 * const let都是块级标识符
 * const let是禁止重声明的，在同一作用域中，用let const声明的变量名，不能再用var let const再声明一次
 */
//condition==true:弹出blue1,然后控制台报错，执行流离开if语句，value会立即被销毁
//condition==false:不弹出内容，控制台报错，永远不会声明和初始化value
// function getValueLet(condition){
//     if(condition){
//         let value  = 'blue';
//         alert(value+"1");
//     }else{
//         alert(value+"2");
//     }
//     alert(value+"3");   // Uncaught ReferenceError: value is not defined
// }
// getValueLet(false);
//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

/**
 * 临时死区(TDZ)a
 * 在let a变量的块级作用域中，未声明a之前，a存在于临时死区
 */
/**
 * typeof操作符：对未初始化和未声明的变量执行typeof都会返回undefined
 *              typeof alert
 *              未声明&未初始化  typeof:undefined  alert:报错
 *              已声明&未初始化  typeof:undefined  alert为undefined
*/
//一般情况下我们认为得到的是undefined,但处于临时死区会报错
function getValueTDZ(condition){
    if(condition){
        console.log(typeof value);  //Uncaught ReferenceError: Cannot access 'value' before initialization
        
        let value ='blue';
    }
}
getValueTDZ(true);
//在let声明的作用域外对变量使用typeof不会报错
function getValueTDZ1(condition){
    console.log(typeof value1);      //undefined
    if(condition){
        let value1 ='blue';
    }
}


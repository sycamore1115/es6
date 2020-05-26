/**
 * 默认参数值
 */
// function mixArgs(first,second){       
//     console.log(arguments.length);        //1
//     console.log(first == arguments[0]);   //true
    
//     console.log(second);                  //undefined,没有传递值的命名参数自动赋值undefined
//     console.log(arguments[1]);            //undefined,arguments是类数组，超出数组长度的下标值为undefined
//     console.log(second == arguments[1]);  //true
    
//     first = 'c';
//     second = 'd';
//     console.log(first == arguments[0]);   //true
    
//     console.log(second);                  //d
//     console.log(arguments[1]);            //undefined
//     console.log(second == arguments[1]);  //false
// }
// mixArgs('a');

// function mixArgs(first,second){    
//     'use strict';   
//     console.log(arguments.length);        //1
//     console.log(first == arguments[0]);   //true
//     console.log(second == arguments[1]);  //true
    
//     first = 'c';
//     second = 'd';
//     console.log(first == arguments[0]);   //false
//     console.log(second == arguments[1]);  //false
// }
// mixArgs('a');


// 在非严格模式下
// function mixArgs(first,second = 'b'){
//     // 'use strict';   //默认值与严格模式冲突了，如果在函数中使用严格模式，那么函数的参数就不能有默认值
//     console.log(arguments.length);        //1
//     console.log(first == arguments[0]);   //true
//     console.log(second == arguments[1]);  //false
//     first = 'c';
//     second = 'd';
//     console.log(first == arguments[0]);   //false
//     console.log(second == arguments[1]);  //false
// }

// mixArgs('a');

/**
 * 不定参数
 */
// function pick(object){        //object = book
//     let result = Object.create(null);

//     for(let i =1,len = arguments.length;i<len;i++){
//         result[arguments[i]] = object[arguments[i]];  //i=1  result["autor"] = object["autor"] 
//     }                                                 //i=2  result["year"] = object["year"] 
//     return result;
// }

function pick(object,...keys){        
    let result = Object.create(null);
    for(let i =0,len = keys.length;i<len;i++){
        result[keys[i]] = object[keys[i]];  
    }                                                  
    return result;
}

let book = {
    title:"Understanding ECMAScript 6",
    autor:"Nicholas C. Zakas",
    year:2016
}
let bookData = pick(book,"autor","year"); //arguments[0]:book,arguments[1]:"autor",arguments[2]:"year"
console.log(bookData.autor);
console.log(bookData.year);
console.log(pick.length);
// 问题1：pick函数这么写，只有一个参数，对于可以传入多个参数看起来不明朗
// 问题2 ：调用时传入了三个参数，只有第一个参数有命名形参，后面两个都是无命名参数，取的时候只能遍历arguments，且不是从下标0开始
 

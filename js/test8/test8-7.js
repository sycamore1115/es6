/**
 * js是单线程的
 * 同步：一个任务一个任务排队去执行
 * 异步：不按顺序执行了   
 * 实现异步最基本的方法是回调函数，以setTimeout()为例
 */
function task1(){
    console.log(1);
}

//当你定义setTimeout那一刻起（不管时间是不是0），js并不会直接去执行这段代码，而是把它扔到一个事件队列里面，当页面中所有同步任务都干完了以后，才会去执行事件队列里面的代码
function task2(){
    console.log(2);
    setTimeout(() => {
        console.log(3);
    }, 2000);
}

function task3(){
    console.log(4);
}


task1();
task2();
task3();
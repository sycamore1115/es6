function task1() {
    console.log(1);
}

function task2() {
    console.log(2);
    setTimeout(() => {
        console.log(3);
        setTimeout(() => {
            console.log(4);
            setTimeout(() => {
                console.log(5);
            }, 1000);
        }, 1000);
    }, 1000);
}

//用生成器简化
// function task2(gen){
//     let iterator = gen();
//     result = iterator.next();

//     function step(){
//         setTimeout(() => {
//             if(!result.done){
//                 result = iterator.next();
//                 step();
//             }
//         }, 1000);
//     }
//     step();
// }
// function* gen(){
//     console.log(2);
//     yield;
//     console.log(3);
//     yield;
//     console.log(4);
//     yield;
//     console.log(5);
// }

function task3() {
    console.log(6);
}

task1();
task2();
// task2(gen);
task3();
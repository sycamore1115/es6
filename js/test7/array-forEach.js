let numbers = [4, 2, 3, 3];

//forEach接收可两个参数: 回调函数(必选) + thisArg(可选)
//回调函数接收可三个参数

// numbers.forEach(function (item) {
//     console.log(item);
// });

// numbers.forEach(function (item, index) {
//     console.log(index + ' ' + item);
// });

// numbers.forEach(function (item, index, array) {
//     console.log(index + ' ' + item);
//     console.log(numbers === array);
// });

// 有thisArg
let processor = {
    output(value){
        console.log(value);
    },
    process1(numbers){
        numbers.forEach(function(value){
            this.output(value);   
        },this);
    },
    process2(numbers){
        numbers.forEach(function(value){
            this.output(value);   
        });
    }
};

function output(value){
    console.log(value+' windows');
};

processor.process1(numbers);
processor.process2(numbers);

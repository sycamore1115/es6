let node = {
    type: "Identifier",
    name: "foo",
    age: 20,
    position: 'doctor',
    sex: 'male',
    address: 'shanghai',
    nation: 'china',
    like: 'eat',
    fruit: 'tomato'
};


//没有解构要实现这样的功能
// let type = node.type,
//     name = node.name,
//     age = node.age;

//实现解构后
// let {type,name,age} = node;

let type,name,age;
function outputInfo(value) {
    console.log(value === node);
}
//赋值表达式的值是表达式右边的值，所以value===node
//只是在赋值表达式中完成了解构的功能
// outputInfo({type,name,age} = node);
// outputInfo((()=>{
//     type = node.type;
//     name = node.name;
//     age = node.age;
//     return node;
// })());

console.log(type);
console.log(name);
console.log(age);

// 对象解构
//解构声明时必需初始化，否则报错
//解构赋值时要用小括号包裹
//解构声明或赋值时，=右侧的值不能是null或undefined,否则报错

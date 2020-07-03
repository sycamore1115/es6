// 自定义引用类型的概念很像 类  
/**
 * 六种基础类型：Number String Boolean null undefined Symbol
 * 引用类型： 原生  自定义
 * 原生引用类型： Object(所有引用类型都是Object的实例) Date Array Function 包装类型 Error ....
 * 自定义引用类型  Person  
 */
/**
 * 引用类型(概念，比如人)和对象(实例，比如张三)
 * 引用类型的值都称为对象，对象就是一种无序的数据集合，由若干个“键值对”构成
 * 引用类型创建对象通过 new 对应的构造函数
 */

//对象 
var person = {
    name: 'phoeny',
    age: 25
}
console.log(person instanceof Object);

// 自定义引用类型 
// 构造函数（用new调用，首字母大写规范），本身也是函数，但可以用于创建对象
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var person1 = new Person('nico', 30);

console.log(person1 instanceof Object);
console.log(person1 instanceof Person);
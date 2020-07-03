function PersonType(name) {
    this.name = name;
}
PersonType.prototype.sayName = function () {
    console.log(this.name);
};

// 等价于 PersonClass,首先对于将自定义类型封装成一个类，就不希望外部能访问到类内部的东西，所以一开始用自执行函数全部包裹起来
//1.声明不提升
//2.严格模式
//3.方法不可枚举
//4.具有[[construct]]方法
//5.只能new关键字调用
//6.在类中不能修改类名

let PersonType2 = (function(){
    'use strict';
    const PersonType2 = function(name) {
        if(typeof new.target === 'undefined'){
            throw new Error('必须用new调用')
        }
        this.name = name;
    }
    Object.defineProperty(PersonType2.prototype,'sayName',{
        value: function () {
            console.log(this.name);
        },
        enumerable: false,
        writable: true,
        configurable: true
    })
    return PersonType2;
}());
function Person(name) {
    if (typeof new.target !== "undefined") {
        this.name = name;
    } else {
        throw new Error("必须通过new 关键字来调用Person 。")
    }
}

function AnotherPerson(name) {
    Person.call(this, name);
}

// var person = new Person("Nicholas");
var anotherPerson = new AnotherPerson("Nicholas"); //typeof anotherPerson:undefined


// new 调用函数完整过程
// 1）创建 ECMAScript 原生对象 obj；

// 2）给 obj 设置原生对象的内部属性；（和原型属性不同，内部属性表示为 [[PropertyName]]，两个方括号包裹属性名，并且属性名大写，比如常见 [[Prototype]]、[[Constructor]]）
// 3）设置 obj 的内部属性 [[Class]] 为 Object；
// 4）设置 obj 的内部属性 [[Extensible]] 为 true；

// 5）将 proto 的值设置为 F 的 prototype 属性值；
// 6）如果 proto 是对象类型，则设置 obj 的内部属性 [[Prototype]] 值为 proto；（进行原型链关联，实现继承的关键）
// 7）如果 proto 是不对象类型，则设置 obj 的内部属性 [[Prototype]] 值为内建构造函数 Object 的 prototype 值；（函数 prototype 属性可以被改写，如果改成非对象类型，obj 的 [[Prototype]] 就指向 Object 的原型对象）

// 8）调用函数 F，将其返回值赋给 result；其中，F 执行时的实参为传递给 [[Construct]]（即 F 本身） 的参数，F 内部 this 指向 obj；
// 9）如果 result 是 Object 类型，返回 result；
// 10）如果 F 返回的不是对象类型（第 9 步不成立），则返回创建的对象 obj。
//8,9,10说明:
// 如果构造函数 没有return 或 return基本数据类型，则返回最开始创建的新对象
// 如果构造函数 return对象类型，则直接返回这个对象，而不是最开始创建的新对象

// 若执行 new Foo()，简化阐述过程如下：
// 1）创建新对象 o；
// 2）给新对象的内部属性赋值，关键是给[[Prototype]]属性赋值，构造原型链（如果构造函数的原型是 Object 类型，则指向构造函数的原型；不然指向 Object 对象的原型）；
// 3）执行函数 Foo，执行过程中内部 this 指向新创建的对象 o；
// 4）如果 Foo 内部显式返回对象类型数据，则返回该数据，执行结束；不然返回新创建的对象 o。
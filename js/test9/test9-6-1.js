/**
 * 在ES6之前， JS是无法通过继承的方式创建属于自己的特殊数组的， 也就是说可以使用原型链来继承数组的一些方法， 
 * 但是某些返回一个数组的方法返回的值还是一个Array的实例， 例如slice， length等， 还是Array的实例属性， 
 * 和当前原型链末尾的函数没什么关系， 只是借用了Array的方法。
 */
function MyArray() {
    that = this;
    Array.apply(this, arguments);
}

MyArray.prototype = Object.create(Array.prototype, {
    constructor: {
        value: MyArray,
        writable: true,
        configurable: true,
        enumerable: true
    }
});

// MyArray.prototype = new Array();

var arr = new Array();
console.log(arr);

var colors = new MyArray();
colors[0] = "red";
colors.push('blue');
// colors.pop('blue');
console.log(colors);
console.log(colors.length);

// console.log(arr.hasOwnProperty('length'));
// console.log(colors.hasOwnProperty('length'));

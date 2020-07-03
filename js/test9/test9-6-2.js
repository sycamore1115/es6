/**
 * 子类必须在constructor方法中调用super方法，否则新建实例报错。因为子类没有自己的this对象，
 * 而是继承了父类的this对象，然后对其进行加工。如果不调用super方法，子类得不到this对象。
 */
class MyArray extends Array {
    
}
var colors = new MyArray();
colors[0] = "red";
// colors.push('blue');
console.log(colors);

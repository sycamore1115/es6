// function Person(name){
//     this._name = name;
// }

// var Person = function (name) {
//     this._name = name;
// }

// Person.prototype.getName = function(){
//     return this._name
// }

// var person = new Person('phoeny')
// person._name = 'zakas';
// console.log(person._name);
// console.log(person.getName());

//__________________________________________________________________________________________

// var Person = (function () {
//     var _name;

//     //将Person放到自执行函数内部
//     function Person1(name) {
//         _name = name;
//     }
//     Person1.prototype.getName = function() {
//         return _name;
//     };

//     return Person1;
// }());
// console.log(Person);

// var person = new Person('phoeny')
// var person1 = new Person('zakas')
// console.log(person.getName());
// console.log(person._name);

//__________________________________________________________________________________________

// var Person = (function () {
//     var privateDate = {},
//         privateId = 0;

//     function Person(name) {
//         Object.defineProperty(this,'_id',{
//             value: privateId++,
//             writable:false
//         })
//         // this._id = privateId++;
//         privateDate[this._id] = {
//             name: name
//         }
//     }

//     Person.prototype.getName = function () {
//         return privateDate[this._id].name;
//     };

//     return Person;
// }());

// let person = new Person('phoeny');
// console.log(person.getName());
// console.log(person.name);
// console.log(person._id);
// let person2 = new Person('zakas');
// console.log(person2.getName());
// console.log(person2.name);
// console.log(person2._id);

//__________________________________________________________________________________________

let Person = (function(){
    let privateDate = new WeakMap();

    function Person(name){
        privateDate.set(this,{name:name});
    }
    
    Person.prototype.getName = function(){
        return privateDate.get(this).name;
    }
    return Person;
}());

let person = new Person('phoeny');
console.log(person.getName());
console.log(person._name);
let person2 = new Person('zakas');
console.log(person2.getName());
console.log(person2._name);

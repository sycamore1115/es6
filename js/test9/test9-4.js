//js 实例属性 原型属性 数据属性 访问器属性

//实例属性，最好定义在类构造函数中
//原型属性，直接写在类中的，相当于写在原型peototype上
class PersonCalss {
    constructor(name){
        this.name = name;
        // this._age = _age;
    }
    set show(sex){
        this.sex = sex;
    }
    get show(){
        return this.sex;
    }
    friends = ['123']
    sayName(){
        console.log(this.name);
    }
}

let person = new PersonCalss("phoeny");
console.log(person.name);
person.show = 'female';
console.log(person.show);
console.log(person.friends);
person.sayName();

let person1 = new PersonCalss("nico");
person1.show = 'male';
console.log(person1.show);
console.log(person1.friends);
person1.sayName();


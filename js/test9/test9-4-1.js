//访问器属性 数据属性
/**
 * 访问器用于保护数据属性
 */
let person = {
    name: 'phoeny',
    _age: 25,
    get age() {
        return this._age;
    },
    set age(age1) {
        if (age1 < 26) {
            this._age = age1;
        } else {
            this._age = 25;
        }
    },
}

Object.defineProperties(person, {
    '_phone': {
        value: '13534234343'
    },
    'phone': {
        get: function () {
            if (this._age < 20) {
                return this._phone;
            }
        }
    }
})



console.log(person);
console.log(person.name);
console.log(Object.getOwnPropertyDescriptor(person,'name'));
console.log(Object.getOwnPropertyDescriptor(person,'age'));
person.age = 28;
console.log(person.age);

console.log(Object.getOwnPropertyDescriptor(person,'_phone'));
console.log(Object.getOwnPropertyDescriptor(person,'phone'));
console.log(person.phone);
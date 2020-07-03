//可计算属性
// let firstName = 'first name1234';
// let lastName = 'last name';

//Symbol()生成全局唯一值
let firstName = Symbol();
let lastName = Symbol();

let person = {
    [firstName]: 'Nicholas',
    [lastName]: 'Zakes'
};

console.log(person[firstName]);
console.log(person[lastName]);


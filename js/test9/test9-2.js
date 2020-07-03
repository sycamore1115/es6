class PersonCalss {
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
}

let person = new PersonCalss('phoeny');
person.sayName();

console.log(typeof PersonCalss);
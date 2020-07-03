//几个内建类型像这样使用species
class MyClass {
    static get[Symbol.species]() {
        return this;
    }
    constructor(value) {
        this.value = value;
    }
    clone() {
        console.log(this.constructor[Symbol.species]);
        //return new MyClass(this.value)   ||  new MyDerivedClassl(this.value)
        return new this.constructor[Symbol.species](this.value);
    }
}

class MyDerivedClassl extends MyClass {
    say(){
        console.log('hello');
    }
}
class MyDerivedClass2 extends MyClass {
    static get[Symbol.species]() {
        return MyClass;
    }
    say(){
        console.log('hello');
    }
}

let instancel = new MyDerivedClassl("foo"),
    clonel = instancel.clone(),
    instance2 = new MyDerivedClass2("bar"),
    clone2 = instance2.clone();

console.log(instancel);
console.log(clonel);
console.log(instance2);
console.log(clone2);

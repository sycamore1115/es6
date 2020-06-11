
let person = {
    name:'123',
    sayName(){
        console.log(this.name);
    }
}

let dog = {
    name:'456',
    sayName(){
        console.log(this.name);
    }
}
let friend = Object.create(person);

// function object(o){
//     function F(){};
//     F.prototype  = o;
//     return new F();
// }    

function print(){
    console.log(person);
    console.log(dog);
    console.dir(friend);
    console.log(Object.getPrototypeOf(friend) === person);
    console.log(Object.getPrototypeOf(friend) === dog);
}
print();

Object.setPrototypeOf(friend,dog);

print();
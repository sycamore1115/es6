let person = {
    name:"Hello",
    getGreeting() {
        return this.name + ' person';
    }
};
let dog = {
    name:"Woof",
    getGreeting() {
        return this.name + ' dog';
    }
};
//重写实例的方法，同时调用原型的方法
let friend = {
    name:"yo",
    getGreeting() {
        //friend.getGreeting(),用friend的调用，所以this为friend,Object.getPrototypeOf(friend)就是person
        //person.getGreeting.call(friend) call用于设置this的值
        // return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
        return super.getGreeting() + ", hi!";
    }
};

// 将原型设置为person
Object.setPrototypeOf(friend , person);
console.log(friend.getGreeting()); //"Hello, hi! "
console.log(Object.getPrototypeOf(friend) === person); //true

// 将原型设置为dog
Object.setPrototypeOf(friend, dog);
console.log(friend.getGreeting());// "Woof, hi! "
console . log(Object.getPrototypeOf(friend) === dog);// true

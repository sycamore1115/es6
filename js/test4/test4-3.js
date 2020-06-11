let person = {
    getGreeting() {
        return "Hello";
    }
};//以person 对象为原型
let friend = {
    getGreeting() {
        // return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
        return super.getGreeting() + ", hi!";
    }
};
//以person 对象为原型
Object.setPrototypeOf(friend, person);
//原型是friend
let relative = Object.create(friend);
console.log(person.getGreeting());// "Hello"
console.log(friend.getGreeting());// "Hello, hi!"
//relative.getGreeting()
//Object.getPrototypeOf(relative).getGreeting.call(relative) + ", hi!"
//friend.getGreeting.call(relative) + ", hi!"
//调用friend的getGreeting()方法，此时的this是relative
//friend里面，Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
//friend.getGreeting.call(relative) + ", hi!"
//产生递归调用
console.log(relative.getGreeting());// error!


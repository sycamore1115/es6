//给迭代器的next()传递参数，则这个参数会替代生成器中一条yield语句的返回值
function *createIterator() {
    //1.第一次调用next，执行一条 yield 1,返回值为1
    let first = yield 1;
    //2.第二次调用next, 将next(4)传入的参数替换返回值1,再执行赋值语句 first=4，最后yield 4+2，返回值为6
    let second = yield first + 2;
    //3.第三次调用next,将next(5)传入的参数替换返回值6，再执行赋值语句 second=5，最后yield 5+3,返回值为8
    yield second + 3;
}

let iterator = createIterator();

console.log(iterator.next()); //"{ value: 1, done: false}"
console.log(iterator.next(4)); //"{ value: 6, done: false }"
console.log(iterator.next(5)); //"{ value: 8, done: false}"
console.log(iterator.next()); //"{ value: undefined, done: true}"
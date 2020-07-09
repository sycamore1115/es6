let target = {
    name: "target"
};
let proxy = new Proxy(target, {
    set(trapTarget, key, value, receiver) {
        // 忽略不希望受到影响的已有属性
        if (!trapTarget.hasOwnProperty(key)) {
            if (isNaN(value)) {
                throw new TypeError('属性必须是数字');
            }
        }
        //添加属性
        return Reflect.set(trapTarget, key, value, receiver);
    }
});

// //添加一个新属性
// proxy.count = 1;
// console.log(proxy.count); // 1
// console.log(target.count); // 1

//由于目标已有name 属性因而可以给它赋值
// proxy.name = "proxy";
// console.log(proxy.name);
// console.log(target.name);

// 给不存在的属性赋值会抛出错误
proxy.anotherName = 1;
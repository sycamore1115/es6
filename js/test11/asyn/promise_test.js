let fs = require("fs");

function readFile(filename) {
    return new Promise( (resolve, reject) => {
        fs.readFile(filename, {encoding: "utf8"}, (err, contents) => {
            if (err) { reject(err); return; }
            resolve(contents);
        });
    });
}

function writeFile(filename, data) {
    return new Promise( (resolve, reject) => {
        fs.writeFile(filename, data, {encoding: "utf8"}, (err, contents) => {
            if (err) { reject(err); return; }
            resolve(contents);
        });
    });
}

function run(taskDef) {
    //创建可以在其他地方使用的迭代器
    let task = taskDef();
    let result = task.next();
    // 下面的step方法可用promise替代
    (function step() {
        //如果有更多任务要做
        if (!result.done) {
            //用一个Promise 来解决会简化问题
            let promise = Promise.resolve(result.value);
            promise.then(function (value) {
                result = task.next(value);
                step();
            }).catch(function (error) {
                result = task.throw(error);
                step();
            });
        }
    }());
}
//执行一个任务
run(function* () {
    let content1 = yield readFile("../name.txt");
    yield writeFile("../example.txt", `hello,${content1}`);
    let content2 = yield readFile("../example.txt");
    console.log(content2);
    console.log("Done");
});
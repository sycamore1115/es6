let fs = require("fs");
function readFile(filename) {
    return function (callback) {
        fs.readFile(filename, {encoding: "utf8"}, callback);
    };
}
function writeFile(filename,data) {
    return function (callback) {
        fs.writeFile(filename,data, {encoding: "utf8"}, callback);
    };
}

function run(taskDef) {
    //创建可以在其他地方使用的迭代器
    let task = taskDef();
    let result = task.next();
    // 下面的step方法可用promise替代
    function step() {
        // 如果有更多任务要做
        if (!result.done) {
            if (typeof result.value === "function") {
                result.value(function (err, data) {
                    if (err) {
                        result = task.throw(err);
                        return;
                    }
                    result = task.next(data);
                    step();
                });
            } else {
                result = task.next(result.value);
                step();
            }
        }
    }
    step();
}
//执行一个任务
run(function* () {
    let content1 = yield readFile("../name.txt");
    yield writeFile("../example.txt",`hello,${content1}`);
    let content2 = yield readFile("../example.txt");
    console.log(content2);
    console.log("Done");
});

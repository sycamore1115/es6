let fs = require("fs");

// 1.读取name.txt的内容
// 2.将name.txt的内容写入example.txt
// 3.读取example.txt的内容

fs.readFile("../name.txt", {encoding: "utf8"}, function (err, content1) {
    if (err) {
        throw err;
    }
    fs.writeFile("../example.txt",`hello,${content1}`, {encoding: "utf8"}, function (err, contents) {
        if (err) {
            throw err;
        }
        fs.readFile("../example.txt", {encoding: "utf8"}, function (err, contents) {
            if (err) {
                throw err;
            }
            console.log(contents);
            console.log("Done");
        });
    });
});
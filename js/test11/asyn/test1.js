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
// 1.读取name.txt的内容
// 2.将name.txt的内容写入example.txt
// 3.读取example.txt的内容

readFile("../name.txt")
.then(function (data) {
  return writeFile("../example.txt", `hello,${data}`);
})
.then(function () {
    return readFile("../example.txt");
})
.then(function (data) {
    console.log(data);
    return data;
  })
.catch(function (err) {
  console.log(err);
});
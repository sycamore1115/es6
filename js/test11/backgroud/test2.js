var fs = require("fs")

fs.readFile("./example/example1.txt", {encoding: "utf8"}, function (err, contents) {
    if (err) {
        throw err;
    }
    console.log(contents);
});
console.log("Hi!");
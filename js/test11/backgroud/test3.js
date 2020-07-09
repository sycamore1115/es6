var fs = require("fs")

fs.readFile("./example/example1.txt", {encoding: "utf8"}, function (err, contents) {
    if (err) {
        throw err;
    }
    console.log(contents);
    fs.readFile("./example/example2.txt", {encoding: "utf8"}, function (err, contents) {
        if (err) {
            throw err;
        }
        console.log(contents);
        fs.readFile("./example/example3.txt", {encoding: "utf8"}, function (err, contents) {
            if (err) {
                throw err;
            }
            console.log(contents);
            
        });
    });
});

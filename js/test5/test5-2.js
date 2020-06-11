let node = {
    type: "Identifier",
    name: "foo",
    loc: {
        start: {
            line: 1,
            column: 1
        },
        end: {
            line: 1,
            column: 4
        }
    }
};

let start = node.loc.start;
//很像非同名属性解构的，当：后面的是变量名时，则是为这个对象中的属性重新命名；
//当后面是{}时，则要进一步去：前的对象中更深层次去找
let { loc: {start}}= node;
console.log(start.line); // 1
console. log (start. column); // 1

// 提取node.loc.start
let { loc: { start: localStart }} = node;
console. log(localStart. line); //1
console . log(localStart.column); // 1


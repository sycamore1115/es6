function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

// Rectangle.prototype.getArea = function () {
//     return this.length * this.width;
// };

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}


var square = new Square(3);
console.log(square);
console.log(square.width);

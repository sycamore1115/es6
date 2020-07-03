class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
    static create(length,width){
        return new Rectangle(length,width);
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
        // return {width:length,length:length};
        // return 4;
    }
}

var square = new Square(3);
console.log(square);
console.log(square.length);
// console.log(square.getArea());

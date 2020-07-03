let buffer = new ArrayBuffer(10);
buffer.byteLength = 8;      //无效
console.log(buffer.byteLength);

let view = new DataView(buffer);
view.setInt8(3,5);
view.setInt16(5,-8);

console.log(view.getInt8(3));
console.log(view.getInt16(5));

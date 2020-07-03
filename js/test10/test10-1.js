function createArray(arrayCreator, value) {
    return arrayCreator(value);
}

let value = 1;
let items1 = createArray(Array, value);
let items = createArray(Array.of, value);
console.log(items1);
console.log(items);



class MyArray extends Array{
    static get [Symbol.species](){
        return Array;
    }
}

let arr = MyArray.of('1,3');
console.log(arr);
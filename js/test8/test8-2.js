// function * createIterator(){
//     yield 1;
//     yield 8;
//     yield 6;
// }
// var iterator = createIterator();


function * createIterator(items){
    for(let i=0;i<items.length;i++){
        yield items[i];
    }
}
var iterator = createIterator([5,9,3]);

console.log(iterator.next());   
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());    //true,undefined
console.log(iterator.next());   
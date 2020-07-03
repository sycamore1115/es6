// function createIterator(items){
//     var i = 0;
//     return {
//         next(){
//             var done = (i >= items.length);
//             var value = !done ? items[i] : undefined;
//             i++;
//             return{
//                 done,
//                 value
//             }
//         }
//     }
// }
function createIterator(items){
    var i = 0;
    return {
        next(){
            var done = (i>=items.length);
            var value = !done ? items[i] : undefined;
            i++;
            return{
                done,
                value
            }
        }
    }
}

var iterator = createIterator([1,2,3]);

console.log(iterator.next());   //false，1
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());    //true,undefined
console.log(iterator.next());   
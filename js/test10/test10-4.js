let ints = new Int16Array([ 25, 50, 75, 100]),
subintsl = ints.subarray(),
subints2 = ints.subarray(2),
subints3 = ints.subarray(1, 3);

console.log(subintsl.buffer);    
console.log( subints2.buffer);  
console.log( subints3.buffer);
console.log(subintsl.toString()); // 25,50,75,100
console. log( subints2.toString()); // 75,100
console. log(subints3.toString()); // 50, 75


console. log('__________________________________________________________'); 

subints4 = ints.slice(),
subints5 = ints.slice(2),
subints6 = ints.slice(1, 3);
console.log(subints4.buffer);    
console.log( subints5.buffer);  
console.log( subints6.buffer);
console.log(subints4.toString()); // 25,50,75,100
console. log( subints5.toString()); // 75,100
console. log(subints6.toString()); // 50, 75
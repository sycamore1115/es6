let set = new Set(),
    key = {name:'phoeny'};

set.add(key);

console.log(set.size);
set.forEach(function(value,key,set){
    console.log(value);
})

key = null;

console.log(set.size);
set.forEach(function(value,key,set){
    console.log(value);
})


// let set = new WeakSet(),
//     key = {name:'phoeny'};
//     // key2 = 2;

// set.add(key);
// // set.add(key2);

// console.log(set.has(key));

// key = null;


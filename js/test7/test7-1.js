let numbers = [4, 2, 3, 3];

let set = new Set(numbers);
set.forEach(function (value, key, ownerSet) {
    console.log(key + ' ' + value);
    console.log(ownerSet === set);
})

let processor = {
    output(value){
        console.log(value);
    },
    process(dataSet){
        dataSet.forEach(function(value){
            this.output(value);   
        },this);
    }
};
//4,2,3
processor.process(set);
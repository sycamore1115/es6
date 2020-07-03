function *createNumberiterator() {
    yield 1;
    yield 2;
    return 3;
    yield 4;
}

function *createRepeatingiterator(count) {
    for (let i = 0; i < count; i++) {
        yield "repeat";
    }
}


function *createCombinediterator() {
    let result = yield *createNumberiterator();
    yield *createRepeatingiterator(result);
    yield 'hello';
    yield *'hello';
}

var iterator = createCombinediterator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
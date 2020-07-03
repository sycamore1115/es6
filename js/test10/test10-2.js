let person = {
    name: 'phoeny',
    age: 25,
    likes: ['music','game','movie'],
    *[Symbol.iterator](){
        yield this.name,
        yield this.age,
        yield this.likes
    }
}

let arr = Array.from(person);
console.log(arr);
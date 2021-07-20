function* generator() {
    const list = [1, 2, 4];
    for (let i of list) {
        yield i;
    }
}
let g = generator();
console.log(g.next());//{ value: 1, done: false }
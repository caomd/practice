// const array = [3, 4, 5]
// for (let i in array) {
//     console.log(i)
// }
// for (let j of array) {
//     console.log(j)
// }
const fruits = new Set(['apple', 'pear', 'mango']);
fruits['peach'] = 'Princess Peach! Make a wish';
for (let fruit in fruits) {
    console.log(fruit)//peach
}
for (let fruit of fruits) {
    console.log(fruit)
    // apple
    // pear
    // mango
}
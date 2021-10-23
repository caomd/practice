// const array = [3, 4, 5]
// for (let i in array) {
//     console.log(i)
// }
// for (let j of array) {
//     console.log(j) 
// }
// const fruits = new Set(['apple', 'pear', 'mango']);
// fruits['peach'] = 'Princess Peach! Make a wish';
// for (let fruit in fruits) {
//     console.log(fruit)//peach
// }
// for (let fruit of fruits) {
//     console.log(fruit)
//     // apple
//     // pear
//     // mango
// }
// function* generator() {
//     const who = yield;
//     console.log('hello ' + who)
// }
// const iterator = generator()
// console.log(iterator.next());
// // { value: undefined, done: false }

// console.log(iterator.next('TypeScript'));

// function* generatorPra() {
//     const who = yield;
//     console.log('hello ' + who);
// }
// const iteratorPra = generatorPra()
// console.log('two', iteratorPra.next())
// console.log('w', iteratorPra.next('TypeScript'))

// function* generatorThrow() {
//     try {
//         yield 1;
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// const iteratorThrow = generatorThrow()
// console.log(iteratorThrow.next());
// iteratorThrow.throw(new Error('something is wrong'))
// console.log(iteratorThrow.next());

// interface Teachers {
//     teach(): void
// };
interface Student {
    learn(): void
};
function getPerson(): Student {
    return {} as Student
}
const person = getPerson();
(<Student>person).learn();
// (<Teacher>person).teach();


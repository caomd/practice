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

//P61 课后题 1
let a: string = 'string'
let b: number = 1
let c: boolean = true
let d: undefined = undefined
let e: null = null
let f: object = { a: 'a' }

//修改成其他类型
//a = 1 //==> 不能将类型“number”分配给类型“string”
//b = 'b'//同上报类型错误
//c = 1//同上

//2
let aany: any = 1
aany = 'string'
console.log(aany);

//3题
function fun<T>(a: string): number {
    console.log(a, typeof a);
    return 1
}
fun<string>('1')
fun<number>('1')

function hello<T>(a: T[]): T[] {
    console.log(a.length);
    return []
}
hello<string>(['3'])

//泛型函数
function helloTitle<T>(arg: string): number {
    return 1
}
console.log(helloTitle('ok'));
console.log(helloTitle<string>('heoo'));

//枚举 定义一些名字有意义的常量 
//1.数字枚举 后面的枚举变量递增
enum OrderStatus {
    Start = 1,
    Unpaid,
    Shipping,
    Shipped,
    Complete,
}
//枚举类型中的值必须是确定的
//2.字符串枚举 没有递增 只能手动初始化
enum OrderStatusStr {
    Start = 'Start',
    Unpaid = 'Unpaid',
    Shipping = 'Shipping',
    Shipped = 'Shipped',
    Complete = 'Complete'
}
//反向映射 数字枚举的一个技巧
enum EnumY {
    A
}
//编译器会编译到javascript 如下
(
    function (EnumY) {
        EnumY[EnumY["A"] = 0] = "A"
    }
)(EnumY || {})

//字符串中没有反向映射
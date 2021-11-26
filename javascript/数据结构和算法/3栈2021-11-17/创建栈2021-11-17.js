function Stack() {
    let items = [];
    //为栈声明一些方法
    //添加一个或几个新元素到栈顶
    this.push = function (elements) {
        items.push(elements)
    }
    //移除栈顶的元素，同时返回被移除的元素
    this.pop = function () {
        return items.pop()
    }
    //返回栈顶的元素，不对栈做任何的修改，不会移除栈顶元素，仅仅只是返回它
    this.peek = function () {
        return items[items.length - 1]//最后一个元素length - 1
    }
    //如果栈里没有元素就返回true,否则false
    this.isEmpty = function () {
        return items.length === 0
    }
    //移除栈里所有的元素
    this.clear = function () {
        items = []
    }
    //返回栈里的元素个数，和length相似
    this.size = function () {
        return items.length
    }
    //把栈里的元素都输出到控制台
    this.print = function () {
        console.log(items.toString())
    }
}
//测试
let stack = new Stack()
// console.log(stack.isEmpty())//true
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
// console.log(stack.isEmpty())false
console.log(stack.print(), 'print')//1,2,3,4,5返回undefined
console.log(stack.size(), 'size') //5 size
console.log(stack.peek(), 'peek') //5 peek

//ES6语法声明类
class StackClass {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    //其他方法
}
//Symbol 
let _items = Symbol()
class StackSymbol {
    constructor() {
        this[_items] = []
    }
}

let stackSymbol = new StackSymbol()
// stackSymbol.push(5)
// stackSymbol.push(8)
let objectSymbols = Object.getOwnPropertySymbols(stackSymbol)
console.log(objectSymbols.length)
console.log(objectSymbols)
console.log(objectSymbols[0])
console.log(stackSymbol[objectSymbols[0]].push(1))

//ES6 WeakMap 实现类 保证属性是私有的
const items = new WeakMap()
class StackMap {
    constructor() {
        items.set(this, [])
    }
    push(element) {
        let s = items.get(this)
        s.push(element)
    }
    pop() {
        let s = items.get(this);
        let r = s.pop()
        return r
    }
    //其他方法
}
//使用闭包包起来
let StackP = (
    function () {
        const items = new WeakMap()
        class StackMap {
            constructor() {
                items.set(this, [])
            }
            push(element) {
                let s = items.get(this)
                s.push(element)
            }
            pop() {
                let s = items.get(this);
                let r = s.pop()
                return r
            }
            //其他方法
        }
        return StackMap //返回stack实例
    }
)()
//用栈解决问题 十进制转二进制
function divideBy2(decNumber) {
    var remStack = new Stack(),
        rem,
        binaryString = '';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / 2)
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }
    return binaryString
}
//测试
// console.log(divideBy2(233))
// console.log(divideBy2(10))
// console.log(divideBy2(1000))

function baseConverter(decNumber, base) {
    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF'
    while (decNumber) {
        rem = Math.floor(decNumber % base)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / base)
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString
}
//测试
console.log(baseConverter(100345, 2))
console.log(baseConverter(100345, 8))
console.log(baseConverter(100345, 16))
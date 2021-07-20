/**
 *通常把基础变量存在栈里，对象的话存的是地址，指向一个堆
 *浏览器优先执行栈
 * @class Stack
 */
class Stack {
    constructor() {
        this.items = [];
    }
    //添加元素
    push(element) {
        this.items.push(element);
    }
    //删除元素
    pop() {
        return this.items.pop();
    }
    //返回一个栈顶元素
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() { }
    clear() { }
    size() { return this.items.length; }
}

//扩展判断有效自闭合
//input：‘{}}’ false, '{}[]()'true,'{[()]}'true
//算法思考流程
//1.需要什么样的数据结构，满足模型的数据--构造变量，常量
//2.运行方式 简单条件执行，遍历，递归...算法结构
//3.确定输入输出，稳定输出，保证正确性
const isValid = function (s) {
    const stack = new Stack();
    const Map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        stack.push(char);
        if (stack.size < 2) continue;
        const _one = stack.items[stack.size() - 1];//后入栈的
        const _two = stack.items[stack.size() - 2];//先入栈的
        if (Map[_two] === _one) {//左边的先入栈
            stack.pop();
            stack.pop();
        }
    }
    return stack.size() === 0;
}
console.log(isValid('{}}'))
console.log(isValid('{()}[]'))
console.log(isValid('{[()]}'))
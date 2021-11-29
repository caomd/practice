//创建队列 2021
function Queue() {
    let items = []
    //向队尾添加一个或多个新的项
    this.enqueue = function (elements) {
        items.push(elements)
    }
    //移除队列的第一项，并返回移除的元素
    this.dequeue = function () {
        //先进先出 取出第一个元素
        return items.shift()
    }
    //返回队列中第一个元素，最先被添加，也将是最先被移除的元素
    this.front = function () {
        return items[0]
    }
    //判读是否为空
    this.isEmpty = function () {
        return items.length === 0
    }
    this.size = function () {
        return items.length
    }
    //打印队列元素
    this.print = function () {
        return items.toString()
    }
}
//测试
var queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue('hello')
queue.enqueue('queue')
queue.enqueue('chapter')
queue.enqueue('content')
console.log(queue, 'queue')
console.log(queue.isEmpty())
console.log(queue.print())
console.log(queue.size())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.print())

//使用闭包封装私有变量
var Queue2 = (
    function () {
        const items = new WeakMap()
        class Queue {
            constructor() {
                items.set(this, [])
            }
            enqueue(element) {
                let q = items.get(this)
                q.push(element)
            }
            dequeue() {
                let q = items.get(this)
                return q.shift()
            }
            isEmpty() {
                let q = items.get(this)
                return q.length === 0
            }
            print() {
                let q = items.get(this)
                return q.toString()
            }
            size() {
                let q = items.get(this)
                return q.length
            }
            //其他方法
        }
        return Queue
    }
)()
//测试
var queue = new Queue2()
console.log(queue.isEmpty())
queue.enqueue('hello')
queue.enqueue('queue')
queue.enqueue('chapter')
queue.enqueue('content')
console.log(queue, 'queue')
console.log(queue.isEmpty())
console.log(queue.print())
console.log(queue.size())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.print())

//优先队列
function PriorityQueue() {
    let items = []
    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }
    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority)
        let added = false
        for (let i = 0; i < items.length; i++) {
            //priority值越大，优先级越低，小于当前队列中的元素，优先级高
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement)
                added = true
                break
            }
        }
        //priority值大于当前所有元素，即优先级最低，插入队尾
        if (!added) {
            items.push(queueElement)
        }
    }
    this.print = function () {
        console.log(items)
        return items.toString()
    }
    this.isEmpty = function () {
        return items.length === 0
    }
    this.size = function () {
        return items.length
    }
}

//测试
let priorityQueue = new PriorityQueue()
console.log(priorityQueue.isEmpty(), 'priorityQueue')
priorityQueue.enqueue('John', 25)
priorityQueue.enqueue('John2', 1)
priorityQueue.enqueue('John3', 23)
// console.log(priorityQueue.isEmpty())
// console.log(priorityQueue.size())
// console.log(priorityQueue.print())

//循环遍历 击鼓传花 2021-11-18
function hotPotato(nameList, num) {
    let queue = new Queue()
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }
    let eliminated = ''
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
            console.log(queue.size())//一直都是5
        }
        eliminated = queue.dequeue()
        console.log(eliminated + '在击鼓传花游戏中被淘汰')
    }
    return queue.dequeue()
}
let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
let winner = hotPotato(names, 7)
console.log('The winner is ' + winner)
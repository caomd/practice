/*
 * @Author: caomd 
 * @Date: 2021-11-29 08:46:13 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-29 10:08:51
 */
//队列先进先出FIFO
var Queue = function () {
    var item = [], length = 0
    //入队列
    this.enqueue = function (node) {
        item.push(node)
        return length++
    }
    //出队列 移除第一位节点 并返回该节点
    this.dequeue = function () {
        var node = item.shift()
        length--
        return node
    }
    //判断是否为空
    this.isEmpty = function () {
        return length === 0
    }
    this.size = function () {
        return length
    }
    //打印队列元素
    this.print = function () {
        return item.toString()
    }
}
//使用ES6语法实现Queue
var QueueES6 = (
    function () {
        const items = new WeakMap()
        class Queue {
            constructor() {
                items.set(this, [])
            }
            enqueue(element) {
                items.get(this).push(element)
            }
            dequeue() {
                return items.get(this).shift()
            }
            isEmpty() {
                return items.get(this).length === 0
            }
            print() {
                return items.get(this).toString()
            }
            size() {
                return items.get(this).length
            }
        }
        return Queue //一定要return出去
    }
)()
//测试
// var queue = new Queue()
//测试ES6版本
var queue = new QueueES6()
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
var PriorityQueue = function () {
    var items = [], length = 0
    var QueueElement = function (element, priority) {
        this.element = element
        this.priority = priority
    }
    this.enqueue = function (element, priority) {
        var queue = new QueueElement(element, priority), added = false
        for (var i = 0; i < items.length; i++) {
            //值越大优先级越低
            if (items[i].priority > priority) {
                items.splice(i, 0, queue)
                added = true
                break
            }
        }
        //优先级值最大，插入队尾
        if (!added) {
            items.push(queue)
        }
        return length++
    }
    this.print = function () {
        var s = ''
        for (var i = 0; i < items.length; i++) {
            s += items[i].element + '优先级是：' + items[i].priority + '\n'
        }
        return s
    }
    this.size = function () {
        return length
    }
}
//测试
var priority = new PriorityQueue()
priority.enqueue('hello', 1)
priority.enqueue('queue', 5)
priority.enqueue('chapter', 0)
priority.enqueue('content', 3)
console.log(priority.size())
console.log(priority.print())
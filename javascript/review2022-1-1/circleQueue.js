/*
 * @Author: caomd 
 * @Date: 2022-01-01 21:30:07 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-01 22:48:31
 */
var CircleQueue = function (k) {
    //已经使用的元素个数
    this.used = 0
    //第一个元素所在位置
    this.front = 0
    //rear 是enqueue可存放的位置
    //注意开闭原则
    //【front,rear)
    this.rear = 0
    //最多存放的元素个数
    this.capacity = k
    //循环队列存储空间
    this.items = new Array(k)
    this.enqueue = function (val) {
        //如果已经放满
        if (this.isFull()) {
            return false
        }
        //没有放满
        this.items[this.rear] = val
        //rear注意取模
        this.rear = (this.rear + 1) % this.capacity
        //已经使用的空间
        this.used++
        //存放成功
        return true
    }
    this.dequeue = function () {
        //if is a empty queue
        if (this.isEmpty()) {
            return false
        }
        //第一个元素取出
        var ret = this.items[this.front]
        //注意取模
        this.front = (this.front + 1) % this.capacity
        //已经存放的元素减减
        this.used--
        //success return true
        return true
    }
    //队首元素
    this.Front = function () {
        //
        if (this.isEmpty()) {
            return -1
        }
        return this.items[this.front]
    }
    //队尾元素
    this.Rear = function () {
        if (this.isEmpty()) {
            return -1
        }
        //这里不能使用rear-1
        var tail = (this.rear - 1 + this.capacity) % this.capacity
        return this.items[tail]
    }
    this.isEmpty = function () {
        return this.used === 0
    }
    this.isFull = function () {
        return this.used === this.capacity
    }
}

var cq = new CircleQueue(6)
cq.enqueue(1)
cq.enqueue(2)
cq.enqueue(3)
cq.enqueue(4)
cq.enqueue(5)
cq.enqueue(6)
cq.enqueue(7)
console.log(cq.used)
console.log(cq.dequeue())
console.log(cq.Front(), 'Front')
console.log(cq.Rear(), 'Rear')
console.log(cq.isEmpty())
console.log(cq.isFull())
console.log(cq.used)
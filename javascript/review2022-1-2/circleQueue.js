/*
 * @Author: caomd 
 * @Date: 2022-01-02 10:40:08 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-02 11:27:08
 */
var CircleQueue = function (k) {
    this.capacity = k
    this.front = 0
    this.rear = 0
    this.used = 0
    this.items = new Array(k)
    this.enqueue = function (val) {
        if (this.isFull()) {
            return false
        }
        this.items[this.rear] = val
        this.rear = (this.rear + 1) % this.capacity
        this.used++
    }
    //remove first elements
    this.dequeue = function () {
        if (this.isEmpty()) {
            return false
        }
        var ret = this.items[this.Front]
        this.front = (this.front + 1) % this.capacity
        this.used--
        return true
    }
    this.isEmpty = function () {
        return this.used === 0
    }
    this.isFull = function () {
        return this.used === this.capacity
    }
    this.Front = function () {
        if (this.isEmpty()) {
            return false
        }
        return this.items[this.front]
    }
    this.Rear = function () {
        if (this.isEmpty()) {
            return false
        }
        var tail = (this.rear - 1 + this.capacity) % this.capacity
        return this.items[tail]
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
console.log(cq.used)//6
console.log(cq.Front(), 'Front')
console.log(cq.Rear(), 'Rear')
console.log(cq.dequeue())
console.log(cq.used)//5
console.log(cq.Rear(), 'Rear')
console.log(cq.Front(), 'Front')
cq.enqueue(7)
console.log(cq.used)//5
console.log(cq.Rear(), 'Rear')
console.log(cq.Front(), 'Front')
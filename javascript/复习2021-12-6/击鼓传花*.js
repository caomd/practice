/*
 * @Author: caomd
 * @Date: 2021-12-06 08:00:19
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-06 08:10:32
 */
//击鼓传花利用队列先进先出FIFO
// var Queue = function () {

// }
//使用类
class Queue {
    constructor() {
        this.items = []
        this.size = 0
    }
    enqueue(element) {
        this.items.push(element)
        return this.size++
    }
    //首个元素出队列
    dequeue() {
        this.size--
        return this.items.shift()
    }
}
function hotPotato(names, num) {
    var queue = new Queue()
    //将名字加入队列
    for (var i = 0; i < names.length; i++) {
        queue.enqueue(names[i])
    }
    //根据数字循环队列 淘汰人员 只留一位获胜者 
    while (queue.size > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        queue.dequeue()
    }
    //获胜者
    console.log('获胜者是' + queue.dequeue())
}
let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
let winner = hotPotato(names, 7)
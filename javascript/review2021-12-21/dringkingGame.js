/*
 * @Author: caomd 
 * @Date: 2021-12-21 18:05:40 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 18:36:15
 */
var Queue = function () {
    var items = []
    this.size = 0
    this.enqueu = function (key) {
        items.push(key)
        return this.size++
    }
    this.dequeue = function () {
        this.size--
        return items.shift()
    }
}
var hotPotato = function (nameList, num) {
    var queue = new Queue()
    for (var i = 0; i < nameList.length; i++) {
        queue.enqueu(nameList[i])
    }
    while (queue.size > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueu(queue.dequeue())
        }
        var eliminate = queue.dequeue()
        console.log('eliminate is ' + eliminate)
    }
    var winner = queue.dequeue()
    console.log('winner is ' + winner)
}
let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
let winner = hotPotato(names, 7)
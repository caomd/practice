/*
 * @Author: caomd 
 * @Date: 2022-01-03 09:16:36 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-03 09:35:37
 */
var Queue = function () {
    var items = [], size = 0
    this.enqueue = function (key) {
        items.push(key)
        return size++
    }
    this.dequeue = function () {
        size--
        return items.shift()
    }
    this.isEmpty = function () {
        return size === 0
    }
    this.size = function () {
        return size
    }

}
var hotPotato = function (nameList, num) {
    var q = new Queue()
    for (var i = 0; i < nameList.length; i++) {
        q.enqueue(nameList[i])
    }
    while (q.size() > 1) {
        for (var j = 0; j < num; j++) {
            q.enqueue(q.dequeue())
        }
        var eliminate = q.dequeue()
        console.log('eliminate is ' + eliminate)
    }
    var winner = q.dequeue()
    console.log('the winner is ' + winner)
    return winner
}
let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
let winner = hotPotato(names, 7)
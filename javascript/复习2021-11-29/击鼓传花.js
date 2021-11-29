/*
 * @Author: caomd
 * @Date: 2021-11-29 09:45:34
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-29 10:09:18
 */
//循环队列 击鼓传花
var hotPotato = function (nameList, num) {
    var items = []
    this.enqueue = function (name) {
        items.push(name)
    }
    this.dequeue = function () {
        return items.shift()
    }
    for (var i = 0; i < nameList.length; i++) {
        items.push(nameList[i])
    }
    while (items.length > 1) {
        if (num > 0) {
            //将多于的个数对应的人插入队列 长度不变
            for (var i = 0; i < num; i++) {
                this.enqueue(this.dequeue())
            }
        }
        var eliminated = this.dequeue()
        console.log(eliminated + '在本局中淘汰')
    }
    var won = this.dequeue()
    return won
}
let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
let winner = hotPotato(names, 7)
console.log('The winner is ' + winner)
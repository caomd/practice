/*
 * @Author: caomd 
 * @Date: 2022-01-13 20:12:53 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-13 20:38:25
 */
var Stack = function () {
    var items = [], size = 0
    this.push = function (key) {
        items.push(key)
        return size++
    }
    this.pop = function () {
        size--
        return items.pop()
    }
    this.peek = function () {
        return items[size - 1]
    }
    this.isEmpty = function () {
        return size === 0
    }
    this.size = function () {
        return size
    }
}
var fishSolution = function (size, dir) {
    if (size.length !== dir.length) return false
    var s = new Stack(), left = 0, right = 1
    for (var i = 0; i < size.length; i++) {
        var curSize = size[i],
            curDire = dir[i], hasEat = false
        while (!s.isEmpty() && curDire === left && dir[s.peek()] === right) {
            if (curSize < size[s.peek()]) {
                //current is eatten 
                hasEat = true
                break
            } else {
                //curSize bigger than s.peek()
                //pop
                s.pop()
            }
        }
        if (!hasEat) {
            s.push(i)
        }
    }
    console.log(s.size())
    while (!s.isEmpty()) {
        console.log(s.pop())
    }
}
console.log('remain fish count')
fishSolution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])
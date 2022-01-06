/*
 * @Author: caomd 
 * @Date: 2022-01-06 15:48:27 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-06 16:01:48
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
    this.print = function () {
        for (var i = 0; i < size; i++) {
            console.log(items[i])
        }
    }
}
var FishSolution = function (size, dire) {
    if (size === null || dire === null) return console.log('false not valid data')
    if (size.length !== dire.length) return console.log('not equals count')
    //condition item in stack smaller than cur and direction is right and current is left or bigger than cur and cur is eatten by bigger
    var s = new Stack(), left = 0, right = 1,
        length = size.length
    for (var i = 0; i < length; i++) {
        var curSize = size[i], curDir = dire[i], hasEat = false
        while (!s.isEmpty() && curDir === left && dire[s.peek()] === right) {
            if (curSize < size[s.peek()]) {
                // bigger in stack eat cur break
                hasEat = true
                break
            }
            //else pop
            s.pop()
        }
        if (!hasEat) {
            s.push(i)
        }
    }
    if (!s.isEmpty()) {
        s.print()
    }
}
console.log('remain fish count')
FishSolution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])
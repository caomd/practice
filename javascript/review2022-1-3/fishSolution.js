/*
 * @Author: caomd 
 * @Date: 2022-01-03 13:33:49 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-03 14:01:11
 */
var Stack = function () {
    var items = [], size = 0
    this.push = function (val) {
        items.push(val)
        return size++
    }
    this.pop = function () {
        size--
        return items.pop()
    }
    this.isEmpty = function () {
        return size === 0
    }
    this.peek = function () {
        return items[size - 1]
    }
    this.size = function () {
        return size
    }
    this.print = function () {
        for (var i = 0; i < size; i++) {
            console.log(items[i])
        }
    }
}
//stack save index
var FishSolution = function (size, dire) {
    if (size === null || dire === null) return false
    if (size.length !== dire.length) return 'not match fishes count'
    var length = size.length, left = 0, right = 1, s = new Stack()
    for (var i = 0; i < length; i++) {
        var curSize = size[i],
            curDire = dire[i],
            hasEat = false
        while (!s.isEmpty() && dire[s.peek()] === right && curDire === left) {
            if (size[s.peek()] > curSize) {
                hasEat = true
                break
            }
            //in stack smaller than currentsize
            s.pop()
        }
        if (!hasEat) {
            s.push(i)
        }
    }
    s.print()
    console.log(s.size())
}
console.log('remain fish count')
FishSolution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])
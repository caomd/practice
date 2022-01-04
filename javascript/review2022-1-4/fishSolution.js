/*
 * @Author: caomd 
 * @Date: 2022-01-04 10:36:13 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-04 11:04:23
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
//items in stack smaller than current and opposite than eat
var FishSolution = function (size, dir) {
    if (size === null || dir === null) return false
    if (size.length !== dir.length) return false
    var s = new Stack(), length = size.length, left = 0, right = 1
    for (var i = 0; i < length; i++) {
        var curSize = size[i],
            curDir = dir[i],
            hasEat = false
        //not empty stack and opposite direction
        while (!s.isEmpty() && dir[s.peek()] === right && curDir === left) {
            //curSize < stack items hasEat = true 
            if (curSize < size[s.peek()]) {
                hasEat = true
                break
            }
            //curSize bigger than in stack pop
            s.pop()
        }
        if (!hasEat) {
            s.push(i)
        }
    }
    console.log(s.size())
    s.print()
}
console.log('remain fish count')
FishSolution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0])
/*
 * @Author: caomd 
 * @Date: 2022-01-02 14:07:34 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-02 15:45:45
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
var FishSolution = function (size, dir) {
    if (size === null || dir === null) return 'not null'
    if (size.length !== dir.length) return 'not match size'
    if (size.length <= 1) return size.length
    var length = size.length, s = new Stack(), left = 0, right = 1
    for (var i = 0; i < length; i++) {
        var curFishSize = size[i], curFishDir = dir[i], hasEat = false
        //stack not empty current 
        while (!s.isEmpty() && dir[s.peek()] === right && curFishDir === left) {
            //stack top fish bigger than current fish then eat
            if (size[s.peek()] > curFishSize) {
                hasEat = true
                break
            }
            //stack top fish smaller than current fish then pop
            s.pop()
        }
        //if curfish not eatten push stack
        if (!hasEat) {
            s.push(i)
        }
    }
    console.log('remain fish index')
    s.print()
    return s.size()
}
console.log('remain fish count', FishSolution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]))
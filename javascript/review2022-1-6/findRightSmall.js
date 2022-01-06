/*
 * @Author: caomd 
 * @Date: 2022-01-06 15:34:37 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-06 15:47:20
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
}
//smaller eat bigger increase stack
var findRightSmall = function (arr) {
    if (arr.length < 0 || !Array.isArray(arr)) return console.log('not a array')
    var s = new Stack(), res = []
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i]
        while (!s.isEmpty() && cur < arr[s.peek()]) {
            res[s.peek()] = i
            s.pop()
        }
        s.push(i)
    }
    while (!s.isEmpty()) {
        res[s.pop()] = -1
    }
    return res
}
console.log(findRightSmall([1, 2, 4, 9, 4, 0, 5]))
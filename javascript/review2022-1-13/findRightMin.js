/*
 * @Author: caomd 
 * @Date: 2022-01-13 19:44:11 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-13 20:12:20
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
}
var findRightMin = function (arr) {
    var s = new Stack(), res = []
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i]
        while (!s.isEmpty() && cur < arr[s.peek()]) {
            res[s.peek()] = i
            s.pop() //出栈
        }
        s.push(i)
    }
    while (!s.isEmpty()) {
        res[s.pop()] = -1
    }
    return res
}
console.log(findRightMin([1, 2, 4, 9, 4, 0, 5]))
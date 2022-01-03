/*
 * @Author: caomd 
 * @Date: 2022-01-03 16:31:25 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-03 16:37:25
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
}
var findRightMax = function (arr) {
    var s = new Stack(), length = arr.length, ans = []
    for (var i = 0; i < length; i++) {
        var cur = arr[i]
        while (!s.isEmpty() && cur > arr[s.peek()]) {
            ans[s.peek()] = i
            //弹出最小值
            s.pop()
        }
        s.push(i)
    }
    while (!s.isEmpty()) {
        ans[s.peek()] = -1
        s.pop()
    }
    return ans
}
console.log(findRightMax([1, 2, 4, 9, 4, 0, 5]))
/*
 * @Author: caomd 
 * @Date: 2022-01-03 15:43:56 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-03 16:13:09
 */
var Stack = function () {
    var items = [], size = 0
    this.push = function (val) {
        items.push(val)
        return size++
    }
    this.pop = function () {
        size--
        items.pop()
    }
    this.isEmpty = function () {
        return size === 0
    }
    this.peek = function () {
        return items[size - 1]
    }
}
var findRightSmall = function (arr) {
    var ans = [], s = new Stack()
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i]
        while (!s.isEmpty() && cur < arr[s.peek()]) {
            ans[s.peek()] = i
            //bigger pop from stack
            s.pop()
        }
        //remains push stack
        s.push(i)
    }
    while (!s.isEmpty()) {
        ans[s.peek()] = -1
        s.pop()
    }
    return ans
}
console.log(findRightSmall([1, 2, 4, 9, 4, 0, 5]))
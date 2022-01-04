/*
 * @Author: caomd 
 * @Date: 2022-01-04 11:04:55 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-04 11:12:11
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
}
//thought find Right smaller when find then bigger pop or return -1
var findRightSmall = function (arr) {
    var ans = [], s = new Stack(), length = arr.length
    for (var i = 0; i < length; i++) {
        var cur = arr[i]
        while (!s.isEmpty() && cur < arr[s.peek()]) {
            ans[s.peek()] = i
            //bigger pop
            s.pop()
        }
        s.push(i)
    }
    while (!s.isEmpty()) {
        ans[s.pop()] = -1
    }
    return ans
}
console.log(findRightSmall([1, 2, 4, 9, 4, 0, 5]))
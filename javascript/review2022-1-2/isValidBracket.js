/*
 * @Author: caomd 
 * @Date: 2022-01-02 12:20:11 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-02 12:57:03
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
}
var isValidBracket = function (str) {
    if (str === null || str.length === 0) return 'false not null'
    if (str.length % 2 !== 0) return 'false not odd'
    var boolean = false, strArr = str.split(''), stack = new Stack()
    for (var i = 0; i < strArr.length; i++) {
        var cur = strArr[i]
        if (cur === '(') {
            stack.push(cur)
        }
        else if (cur === ')') {
            if (stack.isEmpty()) return false
            stack.pop()
        }
    }
    return stack.isEmpty()
}
console.log(isValidBracket('(())()()()'))
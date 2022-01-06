/*
 * @Author: caomd 
 * @Date: 2022-01-06 17:11:51 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-06 17:22:17
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
    this.size = function () {
        return size
    }
}
var isValidBracket = function (str) {
    if (str.length < 0) return 'false not a string'
    var s = new Stack(), strArr = str.split('')
    for (var i = 0; i < strArr.length; i++) {
        var cur = strArr[i]
        if (cur === '(') {
            s.push(cur)
        } else {
            if (s.isEmpty()) {
                return console.log('false not match')
            }
            s.pop()
        }
    }
    return s.isEmpty()
}
//methods two
var isValidBracketOptimizing = function (str) {
    if (str.length < 0) return 'false not a string'
    var leftBracketNum = 0, strArr = str.split('')
    for (var i = 0; i < strArr.length; i++) {
        var cur = strArr[i]
        if (cur === '(') {
            leftBracketNum++
        } else {
            if (leftBracketNum === 0) {
                return console.log('not match bracket')
            }
            leftBracketNum--
        }
    }
    return leftBracketNum === 0
}
// console.log(isValidBracket('(())()()()'))
isValidBracketOptimizing('(())()()))')
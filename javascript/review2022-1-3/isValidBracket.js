/*
 * @Author: caomd 
 * @Date: 2022-01-03 13:20:50 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-03 13:33:33
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
//O(N) spaceComplex O(N)
var isValidBracket = function (str) {
    if (str === null || str.length < 0) return false
    if (str.length % 2 !== 0) return 'must even'
    var s = new Stack(), strArr = str.split('')
    for (var i = 0; i < strArr.length; i++) {
        var cur = strArr[i]
        if (cur === '(') {
            s.push(cur)
        } else {
            if (s.isEmpty()) {
                return 'not match left Bracket'
            }
            s.pop()
        }
    }
    return s.isEmpty()
}
// console.log(isValidBracket('(())()()()'))
// optimizing variable leftBracketCount
var isValidBracketOptimizing = function (str) {
    if (str === null || str.length < 0) return false
    if (str.length % 2 !== 0) return 'must even'
    var strArr = str.split(''), leftBracketCount = 0
    for (var i = 0; i < strArr.length; i++) {
        var cur = strArr[i]
        if (cur === "(") {
            leftBracketCount++
        } else {
            if (leftBracketCount === 0) return 'not match'
            leftBracketCount--
        }
    }
    return leftBracketCount === 0
}
console.log(isValidBracketOptimizing('(())()()))'))

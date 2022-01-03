/*
 * @Author: caomd 
 * @Date: 2022-01-02 12:20:11 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-03 13:33:00
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
//时间复杂度为O(N) 空间复杂度为O(N)
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
// console.log(isValidBracket('(())()()()'))

//methods 2 计数优化 时间复杂度为O(N) 空间复杂度为O(1)
var isValidBracket2 = function (str) {
    if (str === null || str.length < 0) return 'false not null'
    if (str.length % 2 !== 0) return 'false not odd'
    var leftBraceNumber = 0, strArr = str.split('')
    for (var i = 0; i < strArr.length; i++) {
        var cur = strArr[i]
        if (cur === '(') leftBraceNumber++
        else if (cur === ')') {
            if (leftBraceNumber === 0) return 'false not match'
            leftBraceNumber--
        }
    }
    return leftBraceNumber === 0
}
console.log(isValidBracket2('(())()()))'))
//extend only contains '(',')','{','}','[',']'
var extendIsValid = function (str) {
    if (str === null || str.length < 0) return 'false not null'
    if (str.length % 2 !== 0) return 'false not odd'
    var strArr = str.split(''), leftBracketNum = 0, leftBraceNum = 0, squareBrackets = 0
    for (var i = 0; i < strArr.length; i++) {
        var cur = strArr[i]
        if (cur === '(') leftBracketNum++
        if (cur === ')') {
            if (leftBracketNum === 0) {
                return 'not match leftBracketNum'
            }
            leftBracketNum--
        }
        if (cur === '{') leftBraceNum++
        if (cur === '}') {
            if (leftBraceNum === 0) {
                return 'not match leftBraceNum'
            }
            leftBraceNum--
        }
        if (cur === '[') squareBrackets++
        if (cur === ']') {
            if (squareBrackets === 0) {
                return 'not match squareBrackets'
            }
            squareBrackets--
        }
    }
    return leftBracketNum === 0 && leftBraceNum === 0 && squareBrackets === 0
}
// console.log(extendIsValid('((()[]){[[}]'))
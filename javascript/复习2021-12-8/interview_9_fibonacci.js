/*
 * @Author: caomd
 * @Date: 2021-12-08 15:14:01
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-09 11:41:27
 */
//fibonacci  input n and request n 
//method 1 efficiency low
var fibonacci1 = function (n) {
    if (n <= 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return fibonacci1(n - 1) + fibonacci1(n - 2)
}
console.log(fibonacci1(6))

//methods 2 practical 实用的 时间复杂度O(n)
var fibonacci2 = function (n) {
    var result = [0, 1]
    if (n < 2) {
        return result[n]
    }
    var fibMinusOne = 1, fibMinusTwo = 0, fibN = 0
    for (var i = 2; i <= n; i++) {
        fibN = fibMinusOne + fibMinusTwo
        //fibMinusOne = 1 can not set two to one
        fibMinusTwo = fibMinusOne
        fibMinusOne = fibN
    }
    return fibN
}
console.log(fibonacci2(6))

//methods 3 interview 11


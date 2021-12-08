/*
 * @Author: caomd 
 * @Date: 2021-12-08 15:31:34 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-08 15:31:57
 */
//methods 2 practical 实用的 时间复杂度O(n) //fibMinusOne = 1 can not set two to one
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
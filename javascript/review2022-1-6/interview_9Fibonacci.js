/*
 * @Author: caomd 
 * @Date: 2022-01-06 14:35:29 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-06 14:48:00
 */

var Fibonacci = function (n) {
    var n0 = 0, n1 = 1, sum = 0
    for (var i = 2; i <= n; i++) {
        sum = n0 + n1
        n0 = n1
        n1 = sum
    }
    console.log(sum)
}
Fibonacci(6)
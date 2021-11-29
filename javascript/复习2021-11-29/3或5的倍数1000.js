/*
 * @Author: caomd 
 * @Date: 2021-11-29 19:13:20 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-29 19:21:14
 */
//欧拉计划 Problem1
// If we list all the natural numbers below  that are multiples of  or, we get, , and.The sum of these multiples is.

// Find the sum of all the multiples of  or  below.
var multiples = function (num) {
    var sum = 0
    for (var i = 3; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }
    return sum
}
console.log(multiples(1000))
/*
 * @Author: caomd
 * @Date: 2021-12-14 18:14:23
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-14 18:41:44
 */
//fibonacci recursion actually tree traverse 
var Fibonacci = function (n) {
    var n0 = 0, n1 = 1, sum = 0
    for (var i = 2; i <= n; i++) {
        sum = n0 + n1
        n0 = n1//n0 -> next
        n1 = sum//n1->next
    }
    return sum
}
console.log(Fibonacci(6))
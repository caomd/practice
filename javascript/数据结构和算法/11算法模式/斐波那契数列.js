/*
 * @Author: caomd 
 * @Date: 2021-11-28 18:42:54 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-28 19:10:38
 */

function fiboncacci(num) {
    if (num === 1 || num === 2) {
        return 1
    }
    console.log(fiboncacci(num - 1) + fiboncacci(num - 2))
    return fiboncacci(num - 1) + fiboncacci(num - 2)
}

fiboncacci(6)
//非递归方式
function fib(num) {
    var n1 = 1, n2 = 1, n = 1
    for (var i = 3; i <= num; i++) {
        n = n1 + n2
        n1 = n2 //将上一个值赋给n1
        n2 = n//将最新值赋给n2
    }
    return n
}
console.log(fib(6))
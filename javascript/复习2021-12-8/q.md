/*
 * @Author: caomd 
 * @Date: 2021-12-08 15:31:34 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-09 11:49:03
 */
 ****************interview 8 reverse array
 left > mid ----> left = mid
 mid < right ----> right = mid 
 when left === mid === right can not judge min in left increase or right increase so use orderSort find the minNum
//*************** interview 9 
methods 2 practical 实用的 时间复杂度O(n) //fibMinusOne = 1 can not set two to one
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
*******享元模式
createElement div div.innerHTML = `<span>...</span>`
div.querySelector('.delFile')
var dom = document.createElement('div')
                        dom.innerHTML = `<span>文件名：` + filename + `文件大小：` + filesize + `<button class='delFile'>删除</button></span>`
                        document.body.appendChild(dom)
                        dom.querySelector('.delFile').onclick = function () {
                            flyWeight.del(id)
                        }
****************职责链模式
        Chain.prototype.passRequest = function () {
            var ret = this.fn.apply(this, arguments)
            if (ret === 'nexSuccessor') {
                // ret = this.successor.fn.apply(this, arguments)
                ****************这里的返回 执行successor.passRequest
                return this.successor && this.successor.passRequest.apply(this.successor, arguments)
            }
        }
******************interview_11 
final conditions 
//use bit algorithm
//unsigned 无符号 不能为负数 exponent
//a^n = a^n/2*a^n/2 n is even || a^n = a^(n-1)/2 * a^(n-1)/2*a n is odd
//right move is divide 2 left move is multiplied 2
7除以2，商3余1。
Divide 2 into 7, and the answer is 3, remainder 1.
6 divided by 2 equals 3
6 multiplied by 2 equals 12.
Four times six is 24
var result = powerWithUnExponent(base, exponent >> 1)
//when all is 1 & 1 so === 1 number is odd
    //when even contains 0 so 0 & 1 is 0 
    //judge odd or even
    if (exponent & 1 === 1) {
        result *= base
    }
*******************interview 10
//thinking a integer num minus 1 last num equals 0 and make reverse
//and middle num is 1 minus 1 behind 1 num 0 switch 1 and middle num switch 0 and then get the new num with before num make & operation and get the result and the result is the before num last 1 switch 0 so the num has how many 1 the operation will to do how many times util all number is 0
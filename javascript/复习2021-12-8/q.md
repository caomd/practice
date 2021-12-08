/*
 * @Author: caomd 
 * @Date: 2021-12-08 15:31:34 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-08 22:18:44
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
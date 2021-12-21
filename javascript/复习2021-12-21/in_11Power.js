/*
 * @Author: caomd 
 * @Date: 2021-12-21 09:28:53 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 10:04:03
 */
var Power = function (exponent, base) {
    var ret = 1
    if (base === 0 || base === null) return
    if (exponent === 1) return base
    if (exponent === 0) return 1
    if (exponent < 0) {
        exponent = Math.abs(exponent)
    }
    if (exponent < 0) {
        ret = 1 / ret
    }
    ret = Power(exponent >> 1, base)
    ret *= ret
    if (exponent & 0b1) {
        ret *= base
    }
    console.log(ret)
    return ret
}


Power(4, 2)
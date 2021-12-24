/*
 * @Author: caomd 
 * @Date: 2021-12-24 22:20:45 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-24 22:37:36
 */

var Power = function (base, exponent) {
    if (base === 0) return 0
    if (base === 1) return 1
    if (exponent === 0) return 1
    if (exponent === 1) return base
    if (exponent < 0) {
        exponent = Math.abs(exponent)
    }
    var result = Power(base, exponent >> 1)
    result *= result
    if (exponent & 0b1) {
        result *= base
    }
    return result
}
console.log(Power(3, 5))

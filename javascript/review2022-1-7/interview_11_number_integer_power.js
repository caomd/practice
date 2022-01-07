/*
 * @Author: caomd 
 * @Date: 2022-01-07 16:23:24 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-07 16:34:19
 */

var Power = function (base, exponent) {
    var result = 1
    if (base === 1) return 1
    if (exponent === 0) return 1
    if (exponent === 1) return base
    result = Power(base, exponent >> 1)
    result *= result
    if (exponent & 1) {
        result *= base
    }
    return result
}
console.log(Power(2, 5))
/*
 * @Author: caomd
 * @Date: 2021-12-14 20:18:13
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 09:56:29
 */
//power
//case 1 power>0 case2 power<0 
var PowerNum = function (exponent, base) {
    //base case
    var result = 1
    if (base === 0) {
        return 0
    }
    if (exponent < 0) {
        exponent = Math.abs(exponent)
    }
    result = getResultPower(exponent, base)
    if (exponent < 0) {
        result = 1 / result
    }
    return result
}
var getResultPower = function (exponent, base) {
    var result = 1
    for (var i = 1; i <= exponent; i++) {
        result *= base
    }
    return result
}
// console.log(PowerNum(3, 2))

//surprise method a^even = a*a a^odd = a^(odd-1)*a^(odd-1)*a
var getValue = function (base, exponent) {
    var result = 1
    if (base === 0 || base === null) {
        return
    }
    if (exponent === 0) {
        return 1
    }
    if (exponent === 1) {
        return base
    }
    if (exponent < 0) {
        exponent = Math.abs(exponent)
    }
    result = getValue(base, exponent >> 1)
    result *= result
    if (exponent & 0b1) {
        result *= base
    }
    return result
}
console.log(getValue(3, 5))
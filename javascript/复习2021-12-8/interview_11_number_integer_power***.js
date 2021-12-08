/*
 * @Author: caomd 
 * @Date: 2021-12-08 23:23:04 
 * @Last Modified by:   caomd 
 * @Last Modified time: 2021-12-08 23:23:04 
 */
//数值的整数次方 两种方式 exponent 指数

var Power = function (base, exponent) {
    //final conditions
    if (base === 0 && exponent < 0) {
        return 0
    }
    //exponent < 0  abs and 1/result
    var result, absExponent
    if (exponent < 0) {
        absExponent = Math.abs(exponent)
    }
    result = powerWithUnsignedExponent(base, absExponent)
    if (exponent < 0) {
        result = 1 / result
    }
    return result
}
var powerWithUnsignedExponent = function (base, absExponent) {
    var result = 1
    for (var i = 0; i < absExponent; i++) {
        result *= base
    }
    return result
}
console.log(Power(2, -2))
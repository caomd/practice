/*
 * @Author: caomd 
 * @Date: 2021-12-08 23:23:04 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-09 10:45:50
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

//use bit algorithm
//a^n = a^n/2*a^n/2 n is even || a^n = a^(n-1)/2 * a^(n-1)/2*a n is odd
//unsigned 无符号 不能为负数 exponent
var powerWithUnExponent = function (base, exponent) {
    if (exponent === 0) {
        return 1
    }
    if (exponent === 1) {
        return base
    }
    var result = powerWithUnExponent(base, exponent >> 1)
    // exponent is even
    result *= result
    // or is odd
    console.log('exponent & 1 === ', exponent & 1)
    //when all is 1 & 1 so === 1 number is odd
    //when even contains 0 so 0 & 1 is 0 
    //judge odd or even
    if (exponent & 1 === 1) {
        result *= base
    }
    return result
}
console.log('result is: ', powerWithUnExponent(2, 5))
//2 => 10 << 3 1000 2^3=8 左移乘2 右移除以2
// console.log(2 >> 1)//1
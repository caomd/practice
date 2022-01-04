/*
 * @Author: caomd 
 * @Date: 2022-01-04 13:12:27 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-04 13:32:34
 */

var integerPower = function (base, exponent) {
    var res = 1
    //base case
    if (exponent === 0) {
        return 1
    }
    if (exponent === 1) {
        return base
    }
    res = integerPower(base, exponent >> 1)
    //general case
    res *= res
    //even & 1 0 odd & 1 = 1
    if (exponent & 1) {
        res *= base
    }
    if (exponent < 0) {
        res = 1 / res
    }
    return res
}
console.log(integerPower(2, 5))
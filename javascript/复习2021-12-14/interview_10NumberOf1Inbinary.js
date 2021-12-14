/*
 * @Author: caomd
 * @Date: 2021-12-14 18:24:59
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-14 18:52:32
 */
// find 1 counts in binary ->0b111
// console.log(0b111)//7
//rule << left move multiplied 2 1&1=1 1&0=0
var Count1InBinary = function (n) {
    var flag = 1, count = 0
    while (flag) {
        if (n & flag) {
            count++
        }
        flag = flag << 1 //traverse 32 times 32bit
    }
    return count
}
// console.log(Count1InBinary(0b111))

//surprise method
var surpriseMethod = function () {
    var binaryNum = 0b101101101, count = 0
    //if bnaryNum-1 and then with binaynum do & operation
    while (binaryNum) {
        count++
        binaryNum = (binaryNum - 1) & binaryNum
    }
    return count
}
console.log(surpriseMethod())
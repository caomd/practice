/*
 * @Author: caomd
 * @Date: 2021-12-09 11:25:05
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-09 11:39:50
 */
//thinking a integer num minus 1 last num equals 0 and make reverse
//and middle num is 1 minus 1 behind 1 num 0 switch 1 and middle num switch 0 and then get the new num with before num make & operation and get the result and the result is the before num last 1 switch 0 so the num has how many 1 the operation will to do how many times util all number is 0
function findNumOne() {
    var binaryNum = 0b101101101, count = 0
    //when all is 0 while break
    while (binaryNum) {
        binaryNum = (binaryNum - 1) & binaryNum
        count++
    }
    return count
}
console.log(findNumOne())
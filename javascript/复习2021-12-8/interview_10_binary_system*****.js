//binary system 1 times
//use & 1&1===1 1&0===0
var findOneTimesBinarySytem = function () {
    var binaryNum = 0b101101101, count = 0
    var octalNum = 0o10
    var hexadecimalNum = 0x10// hexa 16 decimal 十进制 
    // n = binaryNum << 1
    flag = 1
    while (flag) {
        if (binaryNum & flag) {
            count++
        }
        flag = flag << 1 //multiplied 2 binary decimal 10 & 101101101 有0就是0 
    }
    console.log(count)
}
findOneTimesBinarySytem()
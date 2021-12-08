//binary system 1 times
//use & 1&1===1 1&0===0
var findOneTimesBinarySytem = function () {
    var binaryNum = 0b101101101, count = 0,
        // n = binaryNum << 1
        flag = 1
    while (flag) {
        if (binaryNum & flag) {
            count++
            flag = flag << 1
        }
    }
    console.log(count)
}
findOneTimesBinarySytem()
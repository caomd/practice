/*
 * @Author: caomd 
 * @Date: 2021-12-09 11:55:37 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-09 17:02:13
 */
//打印1到最大的n位数
//method 1
function printNm(n) {
    var num = 1, max = 0, result = 1
    while (max < n) {
        num *= 10
        max++
    }
    while (result < num) {
        console.log(result++)
    }
}
// printNm(2)
// this is a trap large numbers by string or array to fix
// methods two use string simulation number addition
// number max n bit string length n+1 and init every num =0
//when number not meet n bit then add 0 in front part
function printNumByString(n) {
    if (n <= 0) {
        return
    }
    var str = ''
    str.length = n + 1
    //init every bit is 0
    for (var i = 0; i < n; i++) {
        str += 0
    }
    increament(str, n)
}
var increament = function (str, n) {
    var flag = 1, maxNum = 1, i = 0, count = 0
    while (i < n) {
        maxNum *= 10
        i++
    }
    var strArr = str.split('')
    print(strArr, maxNum, flag, count)
}
var print = function (strArr, maxNum, flag, count) {
    while (Number(strArr.join('')) < maxNum - 1) {
        //无进位
        var num = Number(strArr[strArr.length - flag])
        if (num < 9) {
            num++
            strArr[strArr.length - flag] = num + ''
            console.log(Number(strArr.join('')))
        } else {
            if (Number(strArr.join('')) < maxNum - 1) {
                //进位 当前位为0 前一位为1 
                strArr[strArr.length - flag] = '0'
                strArr[strArr.length - (++flag)] -= - 1
                //在后一位做++
                print(strArr, maxNum, --flag)
            }
        }
    }
}
// printNumByString(3) //时间复杂度为O(n)n 位数
// console.log(Number('021'))

//methods 3 
//时间复杂度为O(1)
var printMax = function (n) {
    var i = 0, str = '', maxNum = 1
    str.length = n + 1
    while (i < n) {
        maxNum *= 10
        str += '0'
        i++
    }
    // var strArr = str.split('')
    var str = str.split('')
    while (!increamentThree(str)) {
        printResult(str)
    }
}
var increamentThree = function (strArr) {
    var isOverflow = false, nTakeOver = 0, length = strArr.length
    for (var i = length - 1; i >= 0; i--) {
        var nSum = strArr[i] - '0' + nTakeOver //-0 自动转为数值类型
        if (i === length - 1) {
            nSum++
        }
        if (nSum >= 10) {
            if (i === 0) {//第一位
                isOverflow = true
            } else {
                nSum -= 10
                nTakeOver = 1
                strArr[i] = nSum
            }
        } else {
            strArr[i] = nSum
            break
        }
    }
    return isOverflow
}
var printResult = function (strArr) {
    console.log(Number(strArr.join('')))
    // for (var i = 0; i < strArr.length; i++) {
    //     console.log(strArr[i])
    // }
}
// printMax(2)

//method 3 recursion
var printToMaxofDigits = function (n) {
    if (n <= 0) {
        return false
    }
    var i = 0, str = ''
    while (i < n) {
        i++
        str += '0'
    }
    str = str.split('')
    for (var i = 0; i < 10; i++) {
        str[0] = i
        printToMaxofDigitsRecursively(str, n, 0)
    }
}
var printToMaxofDigitsRecursively = function (str, length, index) {
    if (index === length - 1) {
        printResult(str)
        return
    }
    for (var i = 0; i < 10; i++) {
        str[index + 1] = i
        printToMaxofDigitsRecursively(str, length, index + 1)
    }
}
printToMaxofDigits(2)
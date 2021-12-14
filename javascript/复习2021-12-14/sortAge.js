/*
 * @Author: caomd
 * @Date: 2021-12-14 21:00:23
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-14 21:23:06
 */

//sortAges arr
var SortAges = function (agesArr) {
    if (agesArr.length <= 0 || !Array.isArray(agesArr)) {
        return false
    }
    //find same age times
    var ageTimes = new Array(100), maxAge = 99
    for (var i = 1; i <= maxAge; i++) {
        //initialize
        ageTimes[i] = 0
    }
    for (var i = 0; i < agesArr.length; i++) {
        var age = agesArr[i]
        if (age < 0 || age >= 100) {
            throw new Error('age out range')
        }
        ageTimes[age]++
    }
    //traverse and sort age
    var index = 0
    for (var age = 1; age <= 99; age++) {
        for (var times = 1; times <= ageTimes[age]; times++) {
            agesArr[index] = age
            index++
        }
    }
    console.log(agesArr)
}
var arr = [3, 5, 1, 6, 4, 7, 2, 5, 6, 22, 42, 66, 2, 45, 23, 21, 7, 54, 6, 42, 43, 44, 45, 33, 32, 23, 45]
SortAges(arr)
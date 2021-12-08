
/*
 * @Author: caomd
 * @Date: 2021-12-08 12:05:56
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-08 14:11:21
 */
//sort age ten thousand(wan) employees
var SortAge = function (ages) {
    //final conditions
    if (ages === null || ages.length <= 0) {
        return
    }
    //set max age is 99
    var oldestAge = 99,
        //time age 
        timsOfAge = new Array(100)
    for (var i = 0; i <= oldestAge; i++) {
        //inital age times 0
        timsOfAge[i] = 0
    }
    for (var j = 0; j < ages.length; j++) {
        var age = ages[j]
        if (age < 0 || age > oldestAge) {
            throw new Error('age out of range')
        }
        //age times ++
        ++timsOfAge[age]
    }
    var index = 0
    //s mean age range
    for (var s = 0; s <= oldestAge; s++) {
        // t mean age times not equals 0
        for (var t = 0; t < timsOfAge[s]; t++) {
            ages[index] = s
            ++index
        }
    }
    console.log(ages)
}
var arr = [3, 5, 1, 6, 4, 7, 2, 5, 6, 22, 42, 66, 2, 45, 23, 21, 7, 54, 6, 42, 43, 44, 45, 33, 32, 23, 45]
SortAge(arr)
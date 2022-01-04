/*
 * @Author: caomd 
 * @Date: 2022-01-04 12:09:53 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-04 12:26:50
 */

var SortAges = function (ageArrs) {
    var maxAge = 99, timesAge = []
    //initialize ages
    for (var i = 0; i <= maxAge; i++) {
        timesAge[i] = 0
    }
    //intialize timeAges in agesArr
    for (var i = 0; i < ageArrs.length; i++) {
        var curAge = ageArrs[i]
        if (curAge < 0 || curAge > 99) {
            throw new Error('age out of the range')
        }
        timesAge[curAge]++
    }
    var index = 0
    for (var i = 0; i <= maxAge; i++) {
        for (var j = 0; j < timesAge[i]; j++) {
            ageArrs[index] = i
            index++
        }
    }
    console.log(ageArrs)
}
var arr = [3, 5, 1, 6, 4, 7, 2, 5, 6, 22, 42, 66, 2, 45, 23, 21, 7, 54, 6, 42, 43, 44, 45, 33, 32, 23, 45]
SortAges(arr)
/*
 * @Author: caomd 
 * @Date: 2021-12-21 13:42:19 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 13:56:18
 */
//
var SortedAge = function (arr) {
    var maxAge = 99, ageTimes = []
    //initialize
    for (var i = 0; i < maxAge; i++) {
        ageTimes[i] = 0
    }
    //update times
    for (var t = 0; t < arr.length; t++) {
        var age = arr[t]
        ageTimes[age]++
    }
    //traverse
    var index = 0
    for (var t = 0; t < maxAge; t++) {
        for (var age = 0; age < ageTimes[t]; age++) {
            arr[index] = t
            index++
        }
    }
    console.log(arr)
}
SortedAge([1, 3, 4, 5, 6, 7, 2, 1, 11, 3, 22, 21, 11, 44, 5, 66, 7, 88, 4, 32])
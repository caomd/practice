/*
 * @Author: caomd
 * @Date: 2021-12-08 14:18:13
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-08 14:26:44
 */
//sortAges range [0-99] oldest = 99 declare array range 100
var SortAges = function (ages) {
    //judge final conditions
    if (Array.isArray(ages) && ages.length > 0) {
        //declare variables
        var oldest = 99, timesAge = new Array(100)
        //initial timesAge
        for (var i = 0; i < oldest; i++) {
            timesAge[i] = 0
        }
        //traverse ages find age times
        for (var i = 0; i < ages.length; i++) {
            var age = ages[i]
            //judge age valid
            if (age < 0 || age > 99) {
                throw new Error('age out of range')
            }
            ++timesAge[age]
        }
        //order ages
        var index = 0
        //outer mean age
        for (var i = 0; i < oldest; i++) {
            //inner mean times
            for (var j = 0; j < timesAge[i]; j++) {
                ages[index] = i
                index++
            }
        }
        console.log(ages)
    }
    else {
        throw new Error('ages is not a array')
    }
}
var arr = [3, 5, 1, 6, 4, 7, 2, 5, 6, 22, 42, 66, 2, 45, 23, 21, 7, 54, 6, 42, 43, 44, 45, 33, 32, 23, 45]
SortAges(arr)
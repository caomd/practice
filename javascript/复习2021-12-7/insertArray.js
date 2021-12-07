/*
 * @Author: caomd
 * @Date: 2021-12-07 09:34:03
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-07 10:05:56
 */
//two sort arr one has enough capacity to insert another one and sort the bigger one
//idea from the behind one to insert to arr1 compare two array last one if
//arr2 bigger or equal to arr1 then insert arr1 behind arr2.length-- if arr1 bigger than arr2 arr1.length--
//splice and push
var A1 = [1, 2, 4, 6, 8, 11]
var B1 = [1, 2, 3, 4, 5, 6, 7]
var insertArray = function (arr1, arr2) {
    var i = arr1.length - 1,
        j = arr2.length - 1
    while (i >= 0 && j >= 0) {
        if (arr2[j] >= arr1[i]) {
            //save behind current index element splice delete param (startIndex,deletecount)
            var behind = arr1.splice(i + 1, arr1.length - i - 1)
            arr1.splice(i + 1, 1, arr2[j])
            arr1.push(...behind)
            j--
        } else {
            i--
        }
    }
    console.log(arr1)
}
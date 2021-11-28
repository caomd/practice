/*
 * @Author: caomd 
 * @Date: 2021-11-28 15:41:38 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-28 15:44:39
 */
var array = [5, 4, 3, 2]
sequentialSearch = function (item) {
    for (var i = 0; i < array.length; i++) {
        if (item === array[i]) {
            console.log(i)
            return i
        }
    }
    return -1
}
sequentialSearch(3)
/*
 * @Author: caomd 
 * @Date: 2021-12-04 19:27:10 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-04 19:33:08
 */
//迭代器模式
var each = function (arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback.apply(this, [i, arr])
    }
}
each([1, 2, 3, 4, 5, 6], function (index, arr) {
    console.log(index, arr)
})
/*
 * @Author: caomd 
 * @Date: 2022-01-05 12:14:47 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-05 12:17:38
 */
var arr = [3, 5, 1, 6, 4, 7, 2]
var BubbleOrder = function () {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var t = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = t
            }
        }
    }
    console.log(arr)
}
BubbleOrder()
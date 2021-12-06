/*
 * @Author: caomd
 * @Date: 2021-12-06 16:22:56
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-06 18:59:30
 */
//两个排序数组A1 和 A2 内存在A1的末尾有足够多空余空间容纳A2请实现一个函数 把A2中所有的数字插入到A1中并且所有数字是排序的
var A1 = [1, 2, 3, 4, 5, 6, 7], A2 = [1, 6, 7, 8, 9]
console.log(A1.length, A2.length)
function insertation(arr1, arr2) {
    var arr1Length = arr1.length - 1,
        arr2Length = arr2.length - 1
    while (arr2Length >= 0 && arr1Length >= 0) {
        //arr2 biggest  arr1 biggest  lastone insert arr2-- in order to insert arr2 biggest behind befort insert splice the news in arr1 and then insert correct place
        if (arr2[arr2Length] >= arr1[arr1Length]) {
            var arr = arr1.splice(arr1Length + 1, arr1.length - arr1Length)
            arr1.splice(arr1Length + 1, 1, arr2[arr2Length])
            arr1.push(...arr)
            arr2Length--
            //arr2 smaller than arr1 arr1-- until arr2 bigger than arr1 insert element
        } else if (arr2[arr2Length] < arr1[arr1Length]) {
            arr1Length--
        }
    }
    console.log(arr1)
}
insertation(A1, A2)



/*
 * @Author: caomd 
 * @Date: 2021-11-28 19:21:59 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-28 19:45:02
 */
var array = [3, 5, 1, 6, 4, 7, 2]
var binarySearch = function (item) {
    //先将数组排序
    quickSort()
    console.log(array)
    if (array.length > 1) {
        var low = 0, high = array.length - 1
        while (low <= high) { //临界条件
            var mid = Math.floor((low + high) / 2),
                element = array[mid]
            //搜索元素小于中间值 在左侧
            if (item < element) {
                high = mid - 1
            }
            else if (item > element) {
                low = mid + 1
            } else {
                console.log(mid)
                return mid
            }
        }
    }
}
var quickSort = function () {
    quick(array, 0, array.length - 1)
}
var quick = function (arr, left, right) {
    //划分小数组和大数组
    if (arr.length > 1) {
        //划分下标
        var index = partition(arr, left, right)
        if (index - 1 > left) {
            quick(arr, left, index - 1)
        }
        if (right > index) {
            quick(arr, index, right)
        }

    }
}
//划分过程
var partition = function (arr, left, right) {
    //中间值
    var pivot = arr[Math.floor((left + right) / 2)], i = left, j = right
    while (i <= j) {
        while (arr[i] < pivot) {
            i++
        }
        while (arr[j] > pivot) {
            j--
        }
        //此时arr[i]>中间值 arr[j]<中间值
        if (i <= j) {
            swap(arr, i, j)
            i++
            j--
        }
    }
    //返回左下标i 此时的值大于中间值 而j在i的左侧，小于中间值，所以以i为分界线
    return i
}
var swap = function (arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
binarySearch(7)
/*
 * @Author: caomd 
 * @Date: 2021-11-28 15:45:10 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-28 18:03:35
 */
var array = [3, 5, 1, 6, 4, 7, 2]
var binarySearch = function (item) {
    //先进行排序
    quickSort()
    var low = 0, high = array.length - 1, mid, element
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        element = array[mid]
        //中间值小于要搜索的值 要找的值在右侧
        if (element < item) {
            low = mid + 1
        }
        //中间值大于搜索值 要找的值在左侧
        else if (element > item) {
            high = mid - 1
        } else {
            console.log(mid)
            return mid
        }
    }
    return -1
}
var quickSort = function () {
    //快速排序，选中间值，左侧都是小于中间值的数组，右侧是大于中间值的数组
    return quick(array, 0, array.length - 1)
}
var quick = function (arr, left, right) {
    if (arr.length > 1) {
        //获取中间值
        var index = partition(arr, left, right)
        if (left < index - 1) {
            quick(arr, left, index - 1)
        }
        if (right > index) {
            quick(arr, index, right)
        }
    }
    return arr
}
var partition = function (arr, left, right) {
    var mid = arr[Math.floor((left + right) / 2)], i = left, j = right
    while (i <= j) {
        //遍历左侧，大于中间值就停止
        while (arr[i] < mid) {
            i++
        }
        //遍历右侧，大于中间值就停止
        while (arr[j] > mid) {
            j--
        }
        //比较i和j的大小 交换值
        if (j >= i) {
            swap(arr, i, j)
            i++
            j--
        }
    }
    //交叉了返回左侧坐标，说明左侧值均小于中间值
    return i
}
var swap = function (arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
binarySearch(7)
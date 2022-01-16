/*
 * @Author: caomd 
 * @Date: 2022-01-15 11:38:26 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-15 12:04:27
 */
var arr = [3, 5, 1, 6, 4, 7, 2]
var heapSort = function () {
    var heapSize = arr.length
    //构建堆
    buildHeap(arr, heapSize)
    while (heapSize > 1) {
        heapSize--
        swap(arr, 0, heapSize)
        heapify(arr, heapSize, 0)
    }
    console.log(arr)
}
var buildHeap = function (arr, size) {
    for (var i = Math.floor(size / 2); i >= 0; i--) {
        heapify(arr, size, i)
    }
}
var heapify = function (arr, size, root) {
    var left = 2 * root + 1, right = 2 * root + 2,
        largest = root
    if (arr[left] > arr[largest] && left < size) {
        largest = left
    }
    if (arr[right] > arr[largest] && right < size) {
        largest = right
    }
    if (largest !== root) {
        swap(arr, largest, root)
        heapify(arr, size, largest)
    }
}
var swap = function (arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}

heapSort()
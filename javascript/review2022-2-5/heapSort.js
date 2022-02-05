/*
 * @Author: caomd 
 * @Date: 2022-02-05 19:47:53 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-02-05 19:55:28
 */
var arr = [72, 28, 51, 96, 62, 87, 33, 45, 24]
var heapSort = function () {
    //buildHeap
    var size = arr.length
    buildHeap(arr, size)
    while (size > 1) {
        size--
        swap(arr, size, 0)
        heapify(arr, 0, size)
    }
    console.log(arr)
}
var buildHeap = function (arr, size) {
    for (var i = Math.floor(size / 2); i >= 0; i--) {
        heapify(arr, i, size)
    }
}
var heapify = function (arr, root, size) {
    var left = root * 2 + 1, right = root * 2 + 2,
        largest = root
    if (arr[left] > arr[largest] && left < size) {
        largest = left
    }
    if (arr[right] > arr[largest] && right < size) {
        largest = right
    }
    if (largest !== root) {
        swap(arr, largest, root)
        heapify(arr, largest, size)
    }
}
var swap = function (arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
heapSort()
/*
 * @Author: caomd 
 * @Date: 2022-01-28 13:06:57 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-28 13:46:30
 */
var arr = [72, 28, 51, 96, 62, 87, 33, 45, 24]
var heapSort = function () {
    //step buildHeap
    var heapSize = arr.length
    buildHeap(arr, heapSize)
    while (heapSize > 1) {
        heapSize--
        swap(arr, 0, heapSize)
        heapfy(arr, 0, heapSize)
    }
    console.log(arr)
}
var buildHeap = function (arr, size) {
    for (var i = Math.floor(size / 2); i >= 0; i--) {
        heapfy(arr, i, size)
    }
}
var heapfy = function (arr, root, size) {
    var left = root * 2 + 1, right = root * 2 + 2,
        largest = root
    if (arr[largest] < arr[left] && left < size) {
        largest = left
    }
    if (arr[largest] < arr[right] && right < size) {
        largest = right
    }
    if (largest !== root) {
        swap(arr, largest, root)
        heapfy(arr, largest, size)
    }
}
var swap = function (arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
heapSort()
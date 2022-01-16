/*
 * @Author: caomd 
 * @Date: 2022-01-14 20:07:21 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-14 20:19:08
 */
var arr = [3, 5, 1, 6, 4, 7, 2]
var heapSort = function () {
    var heapSize = arr.length
    buildHeap(arr, heapSize)
    if (heapSize > 1) {
        heapSize--
        swap(arr, 0, heapSize)
        heapify(arr, heapSize, 0)
    }
}
var buildHeap = function (arr, size) {
    for (var i = Math.floor(size / 2); i >= 0; i--) {
        //构建堆
        heapify(arr, size, i)
    }
}
var heapify = function (arr, size, root) {
    var left = 2 * root + 1, right = 2 * root + 2,
        largest = root
    //judge root is largest
    if (arr[left] > arr[largest] && left < size) {
        largest = left
    }
    if (arr[right] > arr[largest] && right < size) {
        largest = right
    }
    //change largest
    if (largest !== root) {
        swap(arr, root, largest)
        heapify(arr, size, largest)
    }
}
var swap = function (arr, root, largest) {
    var tem = arr[root]
    arr[root] = arr[largest]
    arr[largest] = tem
}
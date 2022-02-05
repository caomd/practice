/*
 * @Author: caomd 
 * @Date: 2022-01-25 08:52:55 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-25 10:43:53
 */
var arr = [72, 28, 51, 96, 62, 87, 33, 45, 24]
var heapSort = function () {
    var length = arr.length
    //buildHeap
    buildHeap(arr, length)
    //switch heapTop and lastOne
    while (length > 1) {
        length--
        swap(arr, 0, length)
        heapfy(arr, 0, length)
    }
    console.log(arr)
}
var buildHeap = function (arr, length) {
    for (var i = Math.floor(length / 2); i >= 0; i--) {
        heapfy(arr, i, length)
    }
}
var heapfy = function (arr, root, size) {
    var leftChild = 2 * root + 1, rightChild = 2 * root + 2,
        largest = root
    // if (leftChild < size && rightChild < size) {
    if (arr[leftChild] > arr[largest] && leftChild < size) {
        largest = leftChild
    }
    if (arr[rightChild] > arr[largest] && rightChild < size) {
        largest = rightChild
    }
    if (largest !== root) {
        swap(arr, largest, root)
        heapfy(arr, largest, size)
    }
    // }
}
var swap = function (arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
heapSort()
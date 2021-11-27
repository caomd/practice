/*
 * @Author: caomengdie
 * @Date: 2021-11-27 21:40:14
 * @Last Modified by: caomengdie
 * @Last Modified time: 2021-11-27 22:15:00
 */
//堆排序 索引0是树的根节点 除根节点外，任意节点N的父节点是N/2
//节点L的左子节点是2*L 节点R的右子节点是2*R+1
var heapSort = function (arr) {
    var heapSize = arr.length
    //构建堆结构
    buildHeap(arr)

}
var buildHeap = function (arr) {
    var heapSize = arr.length
    for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, heapSize, i)
    }
}
var heapify = function (arr, heapSize, i) {
    var left = i * 2 + 1
    var right = i * 2 + 2
    largest = i
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left
    }
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right
    }
    if (largest !== i) {
        swap(arr, i, largest)
        heapify(arr, heapSize, largest)
    }
}
var swap = function (arr, index1, index2) {
    //交换时使用中间值来存储某一交换项的值
    var aux = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = aux
}
heapSort([3, 5, 1, 6, 4, 7, 2])

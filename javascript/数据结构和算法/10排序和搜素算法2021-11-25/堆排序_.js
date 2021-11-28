/*
 * @Author: caomengdie
 * @Date: 2021-11-27 21:40:14
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-28 12:06:40
 */
//堆排序 索引0是树的根节点 除根节点外，任意节点N的父节点是N/2
//节点L的左子节点是2*L 节点R的右子节点是2*R+1
var heapSort = function (arr) {
    var heapSize = arr.length
    //构建堆结构
    buildHeap(arr)
    while (heapSize > 1) {
        heapSize-- //最大值已排序放到正确位置 最后一个 长度减一
        swap(arr, 0, heapSize)
        heapify(arr, heapSize, 0)
    }

}
var buildHeap = function (arr) {
    var heapSize = arr.length
    for (var i = Math.floor(arr.length / 2); i >= 0; i--) {
        //i是大堆的顶点
        heapify(arr, heapSize, i)
    }
}
var heapify = function (arr, heapSize, i) {
    var left = i * 2 + 1
    var right = i * 2 + 2
    largest = i //大堆的顶点
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left
    }
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right
    }
    if (largest !== i) {
        //交换把大值放到堆顶
        swap(arr, i, largest)
        //打乱了
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

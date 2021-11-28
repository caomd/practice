/*
 * @Author: caomd 
 * @Date: 2021-11-28 12:07:23 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-28 14:59:30
 */
var heapSort = function (arr) {
    var heapSize = arr.length
    //构建堆结构
    buildHeap(arr, heapSize)
    //heapSize-- 最后一位不再进行比较，已经放到正确位置
    while (heapSize > 1) {
        heapSize-- //下标为length-1
        //将最大值和最后一位交换位置
        swap(arr, heapSize, 0)
        //比较根节点和左右子节点 最后一位变成根节点打破堆结构重新构造
        heapify(arr, heapSize, 0)
    }

    console.log(arr)
}
var buildHeap = function (arr, size) {
    //堆顶坐标
    for (var i = Math.floor(size / 2); i >= 0; i--) {
        heapify(arr, size, i)
    }
}
var heapify = function (arr, size, i) {
    var left = 2 * i + 1
    var right = 2 * i + 2
    //堆顶
    var largest = i
    //必须加这个限定条件left < size 不然已经排序正确的会再次参与排序
    if (arr[left] > arr[largest] && left < size) {
        largest = left
    }
    if (arr[right] > arr[largest] && right < size) {
        largest = right
    }
    if (largest !== i) {
        //将最大值放到堆顶
        swap(arr, i, largest)
        //largest变化 作为堆顶重新构造堆结构
        heapify(arr, size, largest)
    }
}
var swap = function (arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
heapSort([3, 5, 1, 6, 4, 7, 2])
/*
 * @Author: caomd
 * @Date: 2021-11-29 06:16:14
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-29 07:45:43
 */
//堆排序
//1.先构建堆结构 将大值至于堆顶 
//2.节点满足条件 根节点坐标0 左子节点2N+1 右子节点2N+2
//3.将最大值放在堆顶根节点
//4.将根节点和最后位置节点交换位置
//5.数组长度减一
//6.重新构建堆结构，此时根节点是最后一个元素，破坏了堆顶最大的结构
var arr = [3, 5, 1, 6, 4, 7, 2]
var heapSort = function () {
    if (arr.length > 1) {
        var heapSize = arr.length
        buildHeap(arr, heapSize)
        //交换最大值和最后一位交换位置
        while (heapSize > 1) {
            heapSize--
            swap(arr, heapSize, 0)
            //破会了堆结构重新构建
            heapify(arr, heapSize)
        }
    }
}
var buildHeap = function (arr, size) {
    //堆顶坐标
    while (var i = arr[Math.floor(size / 2)]; i >= 0; i--) {
        heapify(arr, size, i)
    }
}
var heapify = function (arr, size, root) {
    var left = root * 2 + 1,
        right = root * 2 + 2,
        largest = root
    while (left < size && right < size) {
        if (arr[left] > arr[largest]) {
            largest = left
        }
        if (arr[right] > arr[largest]) {
            largest = right
        }
        //根节点变了 交换位置，根节点是最大值
        if (root !== largest) {
            swap(arr, largest, root)
            //交换位置后，破坏了堆结构
            heapify(arr, size, largest)
        }
    }
}
var swap = function (arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}

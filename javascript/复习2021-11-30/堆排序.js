/*
 * @Author: caomd
 * @Date: 2021-11-30 07:43:46
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-30 08:02:32
 */
//heapSort 构建堆结构 根节点下标为0 左节点 2*root+1 右节点 2*root+2 交换根节点和最后一位节点 heapSize-- 重新构建堆结构
var arr = [3, 5, 1, 6, 4, 7, 2]
var heapSort = function () {
    var heapSize = arr.length
    buildHeap(arr, heapSize)
    while (heapSize > 1) {
        heapSize--
        swap(arr, 0, heapSize)
        //重新构建堆结构 根节点变成了最后一个元素
        heapify(arr, heapSize, 0)
    }
    return arr
}
var buildHeap = function (arr, size) {
    //根据size 找到根节点坐标
    for (var i = Math.floor(size / 2); i >= 0; i--) {
        //构建堆结构
        heapify(arr, size, i)
    }
}
var heapify = function (arr, size, root) {
    var left = 2 * root + 1, right = 2 * root + 2,
        //定义根节点为最大值
        largest = root
    //判断根节点为最大值
    if (arr[left] > arr[largest] && left < size) {
        largest = left
    }
    if (arr[right] > arr[largest] && right < size) {
        largest = right
    }
    //如果largest不等于root
    if (largest !== root) {
        //交换根节点值和最大值
        swap(arr, root, largest)
        //重新构建堆结构
        heapify(arr, size, largest)
    }
}
var swap = function (arr, i, j) {
    var t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
console.log(heapSort())
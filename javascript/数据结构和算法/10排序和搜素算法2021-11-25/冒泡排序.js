var ArrayList = function () {
    var items = [], length = 0
    this.insert = function (element) {
        items.push(element)
        length++
    }
    this.bubbleSort = function () {
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1; j++) {
                if (items[j] > items[j + 1]) {
                    swap(items, j, j + 1)
                }
            }
        }
        return items
    }
    var swap = function (arr, index1, index2) {
        //交换时使用中间值来存储某一交换项的值
        var aux = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = aux
    }
    this.toString = function () {
        var s = ''
        for (var i = 0; i < items.length; i++) {
            s += items[i] + '  '
        }
        console.log(s)
    }
    //改进后的冒泡排序 除去外层已跑过的轮数 每一轮都把最大值排好了 已在正确位置上的数字不必再比较
    this.modifiedBubbleSort = function () {
        for (var i = 0; i < length; i++) {
            // 除去外层已跑过的轮数 
            for (var j = 0; j < length - 1 - i; j++) {
                if (items[j] > items[j + 1]) {
                    swap(items, j, j + 1)
                }
            }
        }
    }
}

//test
function createNonSortedArray(size) {
    var array = new ArrayList()
    for (var i = size; i > 0; i--) {
        array.insert(i)
    }
    return array
}
var array = createNonSortedArray(5)
array.toString()
// array.bubbleSort()
array.modifiedBubbleSort()
array.toString()
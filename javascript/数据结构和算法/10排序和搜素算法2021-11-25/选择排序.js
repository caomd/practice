var ArrayList = function () {
    var array = [], length = 0
    this.insert = function (element) {
        array.push(element)
        length++
    }
    //外循环控制迭代轮数 
    this.selectionSort = function () {
        var indexMin
        for (var i = 0; i < length; i++) {
            indexMin = i
            for (var j = i; j < length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j
                }
            }
            if (i !== indexMin) {
                swap(array, i, indexMin)
            }
        }
    }
    var swap = function (arr, index1, index2) {
        //交换时使用中间值来存储某一交换项的值
        var aux = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = aux
    }
    this.toString = function () {
        var s = ''
        for (var i = 0; i < array.length; i++) {
            s += array[i] + '  '
        }
        console.log(s)
    }
}
function createNonSortedArray(size) {
    var array = new ArrayList()
    for (var i = size; i > 0; i--) {
        array.insert(i)
    }
    return array
}
var array = createNonSortedArray(5)
array.toString()
array.selectionSort()
array.toString()
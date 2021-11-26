var ArrayList = function () {
    var array = [], length = 0
    this.insert = function (element) {
        array.push(element)
        length++
    }
    //外循环控制迭代轮数 
    this.insertionSort = function () {
        var j, temp
        for (var i = 1; i < length; i++) {
            j = i
            temp = array[i]
            while (j > 0 && array[j - 1] > temp) {
                array[j] = array[j - 1]
                j--
            }
            array[j] = temp
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
function createNonSortedArray(arr) {
    var array = new ArrayList()
    for (var i = 0; i < arr.length; i++) {
        array.insert(arr[i])
    }
    return array
}
var array = createNonSortedArray([3, 5, 1, 4, 2])
array.toString()
array.insertionSort()
array.toString()

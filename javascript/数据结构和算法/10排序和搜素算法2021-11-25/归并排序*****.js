var ArrayList = function () {
    var array = [], length = 0
    this.insert = function (element) {
        array.push(element)
        length++
    }
    //外循环控制迭代轮数 
    this.mergeSortRec = function (array) {
        let length = array.length
        if (length === 1) {
            return array
        }
        var mid = Math.floor(length / 2)
        var left, right
        //slice不改变原数组，不包含尾下标元素
        left = array.slice(0, mid)
        right = array.slice(mid, length)
        //递归函数 merge合并小数组来产生大数组，直到原来的数组已经排序完成
        return merge(this.mergeSortRec(left), this.mergeSortRec(right))
    }
    var merge = function (left, right) {
        var result = [], il = 0; ir = 0
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++])
            } else {
                result.push(right[ir++])
            }
        }
        while (il < left.length) {
            result.push(left[il++])
        }
        while (ir < right.length) {
            result.push(right[ir++])
        }
        return result
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
var array = createNonSortedArray([3, 5, 1, 6, 4, 7, 2])
array.toString()
var arr = [72, 28, 51, 96, 62, 87, 33, 45, 24]
console.log(array.mergeSortRec([72, 28, 51, 96, 62, 87, 33, 45, 24]))

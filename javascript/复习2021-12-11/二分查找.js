/*
 * @Author: caomd 
 * @Date: 2021-12-11 09:19:24 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-11 09:46:20
 */
var LinkedList = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    var head = null, size = 0
    this.insert = function (key) {
        var node = new Node(key)
        if (head !== null) {
            head = node
        } else {
            var current = head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        return size++
    }
    this.toString = function () {
        var s = ''
        if (head !== null) {
            var current = head
            while (current.next) {
                s += current.key + '  '
                current = current.next
            }
            s += current.key
            console.log(s)
        }
    }
}
var arr = [2, 3, 5, 1, 3, 7, 4, 2, 6, 8, 5, 19, 22, 11]
//orderArray 二分查找
var binarySearch = function (key) {
    if (arr !== null && arr.length > 1) {
        //先给数组排序
        quickSort(arr)
        console.log('orderSort is ', arr)
        return binarySearchNode(arr, key)
    }
}
var binarySearchNode = function (arr, key) {
    var mid = Math.floor((arr.length) / 2)
    if (arr[mid] > key) {
        arr = arr.slice(0, mid + 1)
        return binarySearchNode(arr, key)
    } else if (arr[mid] < key) {
        arr = arr.slice(mid + 1, arr.length)
        return binarySearchNode(arr, key)
    } else if (arr[mid] === key) {
        return true
    } else {
        return false
    }
}
//quickSort
var quickSort = function (arr) {
    if (arr.length > 1) {
        quick(arr, 0, arr.length - 1)
    }
}
var quick = function (arr, left, right) {
    var index = partition(arr, left, right)
    if (left < index - 1) {
        quick(arr, left, index - 1)
    }
    if (right > index) {
        quick(arr, index, right)
    }
}
var partition = function (arr, left, right) {
    var pivot = arr[Math.floor((left + right) / 2)],
        i = left, j = right
    while (i <= j) {
        while (arr[i] < pivot && i < arr.length) {
            i++
        }
        while (arr[j] > pivot && j >= 0) {
            j--
        }
        if (i <= j) {
            var t = arr[i]
            arr[i] = arr[j]
            arr[j] = t
            i++
            j--
        }
    }
    return i
}
console.log(binarySearch(22))
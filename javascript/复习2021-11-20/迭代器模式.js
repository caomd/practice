var each = function (array, cb) {
    for (var i = 0, arr; arr = array[i]; i++) {
        cb.call(arr, i, arr)
    }
}
var print = function (i, arr) {
    console.log('下标为' + i + '的元素是' + arr)
}
each([1, 2, 5], print)

var compare = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        console.log('arr1 不等于 arr2')
    } else {
        each(arr1, function (i, n) {
            if (n !== arr2[i]) {
                throw new Error('arr1 不等于 arr2')
            }
        })
        console.log('arr1 等于 arr2')
    }
}
// compare([1, 2, 3], [1, 2, 3])
// compare([1, 2, 3], [1, 2, 9])

//倒序迭代器
var reverseFun = function (arr, cb) {
    for (var i = arr.length - 1; i >= 0; i--) {
        cb.call(arr[i], i, arr[i])
    }
}
reverseFun([1, 2, 3, 4, 5, 6], function (i, n) {
    console.log('倒序下标', i + '---------' + n)
})

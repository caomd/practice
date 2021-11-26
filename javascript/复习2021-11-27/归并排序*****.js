var mergeSortRec = function (arr) {
    var mid, length = arr.length, left, right
    //递归停止条件
    if (length === 1) {
        return arr
    }
    mid = Math.floor(length / 2)
    left = arr.slice(0, mid)
    right = arr.slice(mid, length)
    //合并已排序好的小数组
    return merge(mergeSortRec(left), mergeSortRec(right))
}
var merge = function (left, right) {
    //如果左边大于右边交换位置 result放入最小值
    var il = 0, ir = 0, result = []
    while (il < left.length && ir < right.length) {
        if (left[il] > right[ir]) {
            result.push(right[ir])
            ir++
        } else {
            result.push(left[il])
            il++
        }
    }
    //将没有加到result元素添加到result
    while (il < left.length) {
        result.push(left[il])
        il++
    }
    while (ir < right.length) {
        result.push(right[ir])
        ir++
    }
    console.log(result)
    return result

}
mergeSortRec([8, 5, 3, 7, 4, 6, 2, 1])
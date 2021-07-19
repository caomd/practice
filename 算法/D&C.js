//分治法
//原理1.找到基准条件2.不断将问题分解3.递归直到解决符合条件
//面试题 快速排序
//O(nlogn)

const quickSort2 = function (arr) {
    const quick = function (arr) {
        if (arr.length <= 1) return arr
        const len = arr.length
        const index = Math.floor(len >> 1)
        const pivot = arr.splice(index, 1)[0]
        const left = []
        const right = []
        for (let i = 0; i < len; i++) {
            if (arr[i] > pivot) {
                right.push(arr[i])
            } else if (arr[i] <= pivot) {
                left.push(arr[i])
            }
        }
        return quick(left).concat([pivot], quick(right))
    }
    const result = quick(arr)
    return result
}

const s = quickSort2([432, 3, 5, 34, 567, 2, 23, 4, 143])
console.log(s)

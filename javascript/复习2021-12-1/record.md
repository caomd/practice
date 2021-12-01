//自平衡树 见30号复习
//selectionSort  外层循环是轮数，内存循环每次都找到最小的元素和第一个交换位置 下次找到第二个最小的元素和第二位交换位置
    for (var i = 0; i < arr.length; i++) {
        var min = i
        //j=i 每次都拍好了一位，从前边开始
for (var j = i; j < arr.length; j++) {

//归并排序 
问题：merge函数接受参数（left,right）为undefined
  //这样写merge接受的参数为undefined是因为当数组长度为1时，返回的是undefined所以数组长度为1时，要返回数组 只是一个元素 所以应该 修改如下
    // if (arr.length > 1) {
    //     var length = arr.length, mid = Math.floor(length / 2),
    //         left = arr.slice(0, mid),
    //         right = arr.slice(mid, right)
    //     return merge(mergeSort(left), mergeSort(right))
    // }

    //修改后
    if (arr.length === 1) {
        return arr
    }
    var length = arr.length, mid = Math.floor(length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, right)
    return merge(mergeSort(left), mergeSort(right))
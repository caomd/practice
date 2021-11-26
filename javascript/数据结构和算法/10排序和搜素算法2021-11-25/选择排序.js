//外循环控制迭代轮数 
this.selectionSort = function () {
    var length = array.length, indexMin
    for (var i = 0; i < length; i++) {
        indexMin = i
        for (var j = i; j < length; j++) {
            if (array[indexMin] > array[j]) {
                indexMin = j
            }
        }
        if (i !== indexMin) {
            swap(i, indexMin)
        }
    }
}
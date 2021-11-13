var trimSpace = function (str) {
    if (str === null || typeof str !== 'string') {
        return
    }
    var blankCount = 0, i = 0
    while (str[i]) {
        if (str[i] === ' ') {
            blankCount++
        }
        i++
    }
    if (blankCount) {
        //移动指针节点
        var indexOfOriginal, indexOfNew,
            newLength;
        newLength = blankCount * 2 + str.length
        indexOfOriginal = str.length - 1
        indexOfNew = newLength - 1
        str = str.split('')
        while (indexOfOriginal !== indexOfNew) {
            if (str[indexOfOriginal] != ' ') {
                str[indexOfNew--] = str[indexOfOriginal]
            } else {
                str[indexOfNew--] = '0'
                str[indexOfNew--] = '2'
                str[indexOfNew--] = '%'
            }
            indexOfOriginal--
        }
        str = str.join('')
        console.log(str)
    } else {
        console.log('没有空格不需要替换')
    }
}
trimSpace('we are happy everyday')
//we%20are%20happy
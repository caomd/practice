var repalceBlank = function (str) {
    var blankCount = 0, length
    length = str.length
    for (var i = 0; i < length; i++) {
        if (str[i] === ' ') {
            blankCount++
        }
    }
    if (blankCount) {
        var lastIndex, newLastIndex, newLength
        lastIndex = length - 1
        newLength = length + blankCount * 2
        newLastIndex = newLength - 1
        str = str.split('')
        while (newLastIndex !== lastIndex) {
            if (str[lastIndex] !== ' ') {
                str[newLastIndex--] = str[lastIndex]
            } else {
                str[newLastIndex--] = '0'
                str[newLastIndex--] = '2'
                str[newLastIndex--] = '%'
            }
            lastIndex--
        }
        console.log(str.join(''))
    } else {
        console.log('没有可以替换')
    }
}
repalceBlank('we are the capmpain')

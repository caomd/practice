var each = function (data, callback) {
    var value,
        i = 0,
        length = data.length,
        isArray = Array.isArray(data)
    if (isArray) {
        for (; i < length; i++) {//数组
            callback.call(data[i], i, data[i])
        }
    } else {
        for (i in data) {//对象
            value = callback.call(data[i], i, data[i])
        }
    }
    return data;
};
var appendDiv = function (data) {
    each(data, function (i, n) {
        var div = document.createElement('div')
        div.innerHTML = n
        document.body.appendChild(div)
    })
}
appendDiv([1, 2, 3, 4, 5, 6])
appendDiv({ a: 1, b: 2, c: 3, d: 4 })
Array.prototype.reduce2 = function (callback) {
    var self = this
    var previous = 0, current = 0
    for (var i = 1; i < self.length; i++) {
        previous += self[i - 1]
        current = self[i]
        callback.apply(this, [previous, current, i, self])
    }
    return previous + current//注意这里
}

console.log([1, 2, 3, 4, 5].reduce2(function (previous, current, index, array) {
    console.log(previous + current)
    return previous + current
}))
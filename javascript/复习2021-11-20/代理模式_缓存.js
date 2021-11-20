function ProxyCache() {
    var cache = {}
    var args = [].slice.apply(arguments)
    return function () {
        var str = args.join(',')
        if (str in cache) {
            return cache[str]
        } else {
            return cache[str] = calulate.apply(this, args)
        }
    }
}

function calulate() {
    var args = [].slice.apply(arguments)
    var ret = 1, i = 0
    while (args[i]) {
        ret *= args[i]
        i++
    }
    return ret
}

var ret = ProxyCache(2, 3, 4, 5, 10)
ret()
ret()

//计时器
var timeCount = (function () {
    var count = 0, timer
    return function () {
        timer = setInterval(function () {
            if (count > 20) {
                clearInterval(timer)
                timer = null
            }
            count++
            console.log(count)
        }, 1000)
    }
})()
timeCount()
timeCount()
timeCount()
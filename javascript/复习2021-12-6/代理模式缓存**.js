/*
 * @Author: caomd
 * @Date: 2021-12-06 08:11:16
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-06 08:47:14
 */
//代理模式缓存判断是否是相同数据
var proxyCache = function () {
    var cache = {}
    var dataAry = Array.prototype.slice.call(arguments),
        key = Array.prototype.join.call(arguments)
    return function () {
        if (!cache[key]) {
            return cache[key] = multiply.apply(this, dataAry)
        }
        return cache[key]
    }
}
var multiply = function () {
    var ret = 1,
        dataAry = [].slice.call(arguments)
    for (var i = 0; i < dataAry.length; i++) {
        ret *= dataAry[i]
    }
    return ret
}
var cal = proxyCache(2, 3, 4, 5, 10)
console.log(cal())
console.log(cal())

//计时器
var countTime = function () {
    var count = 0, timer
    return function () {
        timer = setInterval(function () {
            if (count > 6) {
                clearInterval(timer)
                return timer = null
            }
            count++
            console.log(count)
        }, 1000)
    }
}
var count = countTime()
count()
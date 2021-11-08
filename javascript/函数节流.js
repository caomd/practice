//高阶函数作为返回值的应用 因为事件的频繁触发的优化
var throttle = function (fn, interval) {
    var timer,
        __self = fn,//保存需要延迟到函数引用,可以不写
        firstTime = true;
    return function () {
        //第一次请求不需要延迟
        if (firstTime) {
            console.log(this, 'this')//window
            __self.apply(this, arguments)
            return firstTime = false//不再向下执行
        }
        //延迟执行中
        if (timer) {
            return false
        }
        timer = setTimeout(function () {
            clearTimeout(timer)
            timer = null//不写定时器一直执行中
            __self.apply(this, arguments)
        }, interval || 500)
    }
}
window.onresize = throttle(function () {
    console.log(1)
}, 500)

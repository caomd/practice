function throttle(fn, interval) {
    var timer,
        firstTime = true;
    return function () {
        if (firstTime) {
            fn.apply(this, arguments)
            return firstTime = false
        }
        if (timer) {//执行中
            return
        }
        timer = setTimeout(() => {
            timer = null
            clearTimeout(timer)
            fn.apply(this, arguments)
        }, interval || 5000);
    }
}
window.onresize = throttle(function () {
    console.log(new Date())
}, 8000)
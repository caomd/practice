//函数节流 throttle
//原理：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
// 手写简化版:
//节流
// 适用场景：
// 拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
// 缩放场景：监控浏览器resize
// 动画场景：避免短时间内多次触发动画引起性能问题
function throttle(fn, delay) {
    let timer = null;
    let startTime = new Date().getTime();
    return (...args) => {
        const current = new Date().getTime();
        if (current - startTime >= delay) {
            fn.apply(this, args);
            startTime = current;
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args);
                clearTimeout(timer)
            }, delay)
        }
    }

}
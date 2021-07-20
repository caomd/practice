//函数防抖 debounce
//原理在时间被触发n秒后在执行回调，如果在这n秒内再被触发，则重新计时
//防抖函数 
//适用场景按钮提交场景：防止多次提交按钮，只执行最后提交的一次 同lodash.debounce
function debounce(fn, delay) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
            clearTimeout(timer);
        }, delay);
    }
}
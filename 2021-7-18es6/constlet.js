for (var i = 0; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 10)
}
//打印出什么为什么
// 4
// 4
// 4
// 4
// 原因：
//1. var 定义的变量是全局变量，所以全局只有一个变量i 作用域
//2.setTimeout ,下一轮时间循环的时候执行，i=4; 异步

for (let i = 0; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 10)
}
// 0
// 1
// 2
// 3
// let 引入了块级作用域的概念，创建setTimeout的时候，变量i只在作用域内生效
// 对于每一次的循环，引入的i都是不同的


for (let i = 0; i <= 3; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 10)
    })(i)
}
// 0
// 1
// 2
// 3


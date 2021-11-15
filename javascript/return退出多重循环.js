var func = function () {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i * j > 30) {
                return
            }
        }
    }
    console.log(i)//这段代码没有执行
}
//为解决这个问题，把循环后代码放到return后面，如果代码多就提炼出一个单独的函数
var print = function (i) {
    console.log(i)
}
var func = function () {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i * j > 30) {
                return print(i)
            }
        }
    }
    // console.log(i)//这段代码没有执行
}
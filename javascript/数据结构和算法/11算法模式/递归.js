/*
 * @Author: caomd
 * @Date: 2021-11-28 18:05:43
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-28 18:42:16
 */
//javaScript调用栈大小的限制 边界条件很重要，不然函数会一直执行下去
var i = 0
function recursiveFn() {
    i++;
    recursiveFn()
}
try {
    recursiveFn()
} catch (error) {
    console.log(error)//RangeError: Maximum call stack size exceeded
}
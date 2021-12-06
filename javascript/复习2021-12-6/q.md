/*
 * @Author: caomd 
 * @Date: 2021-12-06 09:30:03 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-06 09:57:10
 */
//发布订阅模式 比如事件监听 统一发布消息
//window.addEventListener事件监听 third param false 默认 冒泡排序 ,true 事件捕获
form submit event
form.onsubmit = function(e){
    e.preventDefault()
}

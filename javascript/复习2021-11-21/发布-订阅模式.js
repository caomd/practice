// var salesOffices = {}  //定义售楼处
// salesOffices.clientList = [] //缓存列表，存放订阅者的回调函数
// salesOffices.listen = function (fn) {
//     this.clientList.push(fn)
// }
// salesOffices.trigger = function () {
//     for (var i = 0, fn; fn = this.clientList[i++];) {
//         fn.apply(this, arguments)
//     }
// }
// //测试
// salesOffices.listen(function (price, squareMeter) {//小明订阅信息
//     console.log('价格' + price)
//     console.log('squareMeter=' + squareMeter)
// })
// salesOffices.listen(function (price, squareMeter) {
//     console.log('价格=' + price)
//     console.log('squareMeter=' + squareMeter)
// })
// salesOffices.trigger(200000, 88)
// salesOffices.trigger(300000, 110)

//2.添加标识符 代码修改
// 将缓存列表修改为对象 有标志符的key数组
// var salesOffices = {}
// salesOffices.clientListKey = {}
// salesOffices.listen = function (key, fn) {
//     if (!this.clientListKey[key]) {
//         this.clientListKey[key] = []
//     }
//     this.clientListKey[key].push(fn)
// }
// salesOffices.trigger = function () {
//     var key = Array.prototype.shift.call(arguments)//取出消息类型
//     //取出对应的回调函数集合
//     var fns = this.clientListKey[key]
//     if (!fns || fns.length === 0) {
//         return false
//     }
//     //发布消息
//     for (var i = 0, fn; fn = fns[i++];) {
//         fn.apply(this, arguments)
//     }
// };
//重写
// var salesOffices = {}
// salesOffices.clientList = {}
// //把订阅的消息发布到缓存列表
// salesOffices.listen = function (key, fn) {
//     if (!this.clientList[key]) {
//         this.clientList[key] = []
//     }
//     this.clientList[key].push(fn)
// }
// //发布消息
// salesOffices.trigger = function () {
//     var key = Array.prototype.shift.call(arguments)
//     //发布信息
//     var fns = this.clientList[key]
//     if (!fns || fns.length === 0) {
//         return false
//     }
//     for (var i = 0, fn; fn = fns[i++];) {
//         fn.apply(this, arguments)
//     }
// }
//发布消息者
var salesOffices = {}
salesOffices.clientList = {} //{key:[]}
//缓存列表
salesOffices.listen = function (key, fn) {
    if (!this.clientList[key]) {
        this.clientList[key] = []
    }
    this.clientList[key].push(fn)
}
//发布事件
salesOffices.trigger = function () {
    var key = Array.prototype.shift.call(arguments)
    var fns = this.clientList[key]
    if (!fns || fns.length === 0) {
        return false
    }
    for (var i = 0, fn; fn = fns[i++];) {
        fn.apply(this, arguments)
    }
}

salesOffices.listen('squareMeter88', function (price) {
    console.log('价格=' + price)
})
salesOffices.listen('squareMeter88', function (price) {
    console.log('原价格是' + price)
})
salesOffices.listen('squareMeter100', function (price) {
    console.log('价格=' + price)
})
salesOffices.trigger('squareMeter88', 2000000)
salesOffices.trigger('squareMeter88', 10000000)
salesOffices.trigger('squareMeter100', 30000000)




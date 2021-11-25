//监听 发布消息 
var salesOffices = {}
salesOffices.clientList = {}
salesOffices.listen = function (key, fn) {
    if (!this.clientList[key]) {
        this.clientList[key] = []
    }
    this.clientList[key].push(fn)
}
salesOffices.trigger = function () {
    var key = Array.prototype.shift.call(arguments)
    var fns = this.clientList[key]
    if (!fns || fns.length === 0) {
        return false
    }
    for (var i = 0; i < fns.length; i++) {
        fns[i].apply(this, arguments)
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
var order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay) {
        console.log('500元定金预购，得到100优惠券')
    } else {
        return 'nextSuccessor'
    }
}
var order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay) {
        console.log('200元定金预购，得到50优惠券')
    } else {
        return 'nextSuccessor'
    }
}
var orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
        console.log('普通购买，无优惠券')
    } else {
        console.log('手机库存不足')
    }
}
var Chain = function (fn) {
    this.fn = fn
    this.successor = null
}
Chain.prototype.setNextSuccessor = function (succussor) {
    return this.successor = succussor
}
Chain.prototype.passRequest = function () {
    var ret = this.fn.apply(this, arguments)
    if (ret === 'nextSuccessor') {
        return this.successor && this.successor.passRequest.apply(this.successor, arguments)
    }
    return ret
}
var chainOrder500 = new Chain(order500)
var chainOrder200 = new Chain(order200)
var chainOrderNoraml = new Chain(orderNormal)

//指定节点在职责链中的顺序
chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNoraml)

//把请求传递给第一个节点
chainOrder500.passRequest(1, true, 500)
chainOrder500.passRequest(2, true, 500)
chainOrder500.passRequest(3, true, 500)
chainOrder500.passRequest(1, false, 0)
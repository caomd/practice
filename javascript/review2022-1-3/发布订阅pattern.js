/*
 * @Author: caomd 
 * @Date: 2022-01-03 08:54:09 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-03 09:13:18
 */

//
var SaleOffice = function () {
    this.listenerList = {}
}
SaleOffice.prototype.listener = function (price, fn) {
    if (!this.listenerList[price]) {
        this.listenerList[price] = []
    }
    this.listenerList[price].push(fn)
}
SaleOffice.prototype.subscribe = function (price) {
    var messageFn = this.listenerList[price]
    for (var i = 0; i < messageFn.length; i++) {
        var fn = messageFn[i]
        fn.apply(this, arguments)
    }
}
var saleoff = new SaleOffice()
saleoff.listener('8000', function () {
    console.log('price 8000 now')
})
saleoff.listener('8000', function () {
    console.log('price 8000 change 7000')
})
saleoff.listener('9000', function () {
    console.log('price 9000 sell out')
})
saleoff.listener('10000', function () {
    console.log('price 10000 now')
})

saleoff.subscribe('8000')
saleoff.subscribe('10000')
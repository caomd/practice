/*
 * @Author: caomd 
 * @Date: 2021-12-22 18:59:11 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-22 19:40:04
 */
var saleOfficess = function () {
    this.listenerList = {}
}
saleOfficess.prototype.listener = function (keyword, fun) {
    this.listenerList[keyword] = this.listenerList[keyword] || []
    this.listenerList[keyword].push(fun)
}
saleOfficess.prototype.subscribe = function (price) {
    if (this.listenerList[price]) {
        for (var i = 0; i < this.listenerList[price].length; i++) {
            var listen = this.listenerList[price][i]
            listen()
        }
    }
}

var sales = new saleOfficess()
sales.listener('8000', function () {
    console.log('now salePrice')
})
sales.listener('9000', function () {
    console.log('now salePrice')
})
sales.listener('9000', function () {
    console.log('now salePrice out')
})
sales.listener('10000', function () {
    console.log('now salePrice')
})

// sales.subscribe('8000')
sales.subscribe('9000')
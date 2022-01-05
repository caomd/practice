/*
 * @Author: caomd 
 * @Date: 2022-01-05 12:51:51 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-05 12:58:18
 */

var getGuangdongCity = function () {
    var guandongCity = [
        {
            name: 'shenzhen',
            id: 11
        },
        {
            name: 'guangzhou',
            id: 12
        },
        {
            name: 'zhuhai',
            id: 13
        }
    ]
    return guandongCity
}
//新数据
var guangdongCity = {
    shenzhen: 11,
    guangzhou: 12,
    zhuhai: 13
}
var adapter = function (fn) {
    var oldAddr = fn.apply(this, arguments),
        newAddr = {}
    for (var i = 0; i < oldAddr.length; i++) {
        var add = oldAddr[i]
        newAddr[add.name] = add.id
    }
    return newAddr
}
var guangdongCity = adapter(getGuangdongCity)
console.log(guangdongCity)
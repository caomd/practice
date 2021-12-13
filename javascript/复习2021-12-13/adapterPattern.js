/*
 * @Author: caomd
 * @Date: 2021-12-13 18:08:32
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-13 18:22:57
 */
//adapterPattern.js
var getGuangdongCity = function () {
    var guandongCity = [
        {
            name: 'shenzhen',
            id: 11
        },
        {
            name: 'guangzhou',
            id: 12
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
    var oldAddress = fn.apply(this, arguments),
        newAddr = {}
    for (var i = 0; i < oldAddress.length; i++) {
        var oldAdd = oldAddress[i]
        newAddr[oldAdd.name] = oldAdd.id

    }
    return function () {
        return newAddr
    }
}
var render = function (fn) {
    var ret = fn.apply(this, arguments)
    console.log('map render with constructor')
    console.log(JSON.stringify(ret))
    // document.write(JSON.stringify(ret))
}
render(adapter(getGuangdongCity))
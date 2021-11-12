//原数据
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
//渲染
var render = function (fn) {
    console.log('开始渲染广东省地图')
    document.write(JSON.stringify(fn))
}
//新建适配器 传入旧的函数
var addressAdapter = function (oldAddressfn) {
    var address = {}
    var oldAddress = oldAddressfn()
    for (var i = 0; i < oldAddress.length; i++) {
        address[oldAddress[i][name]] = oldAddress[i]
    }
}
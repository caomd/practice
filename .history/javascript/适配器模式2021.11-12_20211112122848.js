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
}
//新建适配器 传入旧的函数
var 
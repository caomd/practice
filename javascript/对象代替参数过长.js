var setUserInfo = function (id, name, address, sex, mobile, qq) {
    console.log('id=' + id)
    console.log('name=' + name)
    console.log('address=' + address)
    console.log('sex=' + sex)
    console.log('mobile=' + mobile)
    console.log('qq=' + qq)
}
setUserInfo(1314, 'sven', 'shenzhen', 'male', '137********', 3535353424)

//重构之后
var setUserInfo = function (obj) {
    console.log('id=' + obj.id)
    console.log('name=' + obj.name)
    console.log('address=' + address)
    console.log('sex=' + sex)
    console.log('mobile=' + mobile)
    console.log('qq=' + qq)
}
setUserInfo({
    id: '',
    name: 'xx',
    address: 'shenzhen',
    sex: 'XX',
    mobile: '434',
    qq: 435436
})
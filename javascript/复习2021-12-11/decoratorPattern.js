/*
* @Author: caomd
* @Date: 2021-12-11 17:24:22
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-11 17:44:12
*/
//decorator change param
Function.prototype.before = function (fn) {
    var self = this
    return function () {
        fn.apply(this, arguments)
        self.apply(this, arguments)
    }

}
var ajax = function (type, url, param) {
    console.log(param)
}
var addParam = function (type, url, param) {
    param.token = 'Token'
}
var ajax = ajax.before(addParam)
ajax('get', 'http://', { name: 'ajax' })
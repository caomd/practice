/*
 * @Author: caomd
 * @Date: 2021-12-18 09:56:26
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-18 10:03:10
 */
//Singleton
var Singleton = (
    function () {
        var instance
        function createSingleton(name) {
            this.name = name
            if (!instance) return instance = this
            else return instance
        }
        return createSingleton
    }
)()
var singleton1 = new Singleton('s1')
var singleton2 = new Singleton('s2')
console.log(singleton1 === singleton2)
console.log(singleton1.name)
console.log(singleton2.name)
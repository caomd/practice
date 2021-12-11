/*
 * @Author: caomd 
 * @Date: 2021-12-11 20:28:56 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-11 20:44:28
 */

//create dictionary
function Dictionary() {
    var items = {}
    this.set = function (key, val) {
        items[key] = val
    }
    this.get = function (v) {
        return this.has(key) ? items[v] : undefined
    }
    this.delete = function (key) {
        if (items[key]) {
            delete items[key]
            return true
        }
        return false
    }
    this.has = function (key) {
        // return key in items
        if (items.hasOwnProperty(key)) {
            return true
        }
    }
    this.clear = function () {
        return items = {}
    }
    this.size = function () {
        return Object.keys(items).length
    }
    this.keys = function () {
        var keys = []
        for (var key in items) {
            if (this.has(key)) {
                keys.push(key)
            }
        }
        return keys
        // return Object.keys(items)
    }
    this.values = function () {
        var values = []
        for (var key in items) {
            if (this.has(key)) {
                values.push(items[key])
            }
        }
        // return values
        return Object.values(items)
    }
    this.getItems = function () {
        return items
    }
}

//test
var dictionary = new Dictionary()
dictionary.set('A', 'A@emai')
dictionary.set('B', 'B@emai')
dictionary.set('C', 'C@emai')
dictionary.set('D', 'D@emai')
dictionary.set('E', 'E@emai')
dictionary.set('F', 'F@emai')
console.log(dictionary.size())
console.log(dictionary.keys())
console.log(dictionary.values())
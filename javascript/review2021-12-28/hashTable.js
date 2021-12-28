/*
 * @Author: caomd 
 * @Date: 2021-12-28 17:52:58 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-28 18:05:07
 */

var hashTable = functionf(){
    var table = [], size = 0
    this.put = function (key, val) {
        var position = djb2HashCode(key)
        table[position] = val
        return size++
    }
    this.get = function (key) {
        var position = djb2HashCode(key)
        if (table[position]) {
            return table[position]
        }
    }
    this.print = function () {
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + table[i])
            }
        }
    }
    this.isEmpty = function () {
        return size === 0
    }
    var djb2HashCode = function (key) {
        var hash = 5381
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i)
        }
        return hash % 1013
    }
}
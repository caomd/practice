/*
 * @Author: caomd 
 * @Date: 2022-01-06 13:27:58 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-06 13:40:49
 */

var HashTable = function () {
    var table = [], size = 0
    this.put = function (key, val) {
        var position = djb2HashCode(key)
        console.log(position)
        table[position] = val
        return size++
    }
    this.get = function (key) {
        var position = djb2HashCode(key)
        console.log(table[position])
    }
    this.remove = function (key) {
        var postion = djb2HashCode(key)
        for (var i = 0; i < table.length; i++) {
            if (table[i] === table[postion]) {
                table[i] = undefined
            }
        }
        return size--
    }
    this.print = function () {
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(table[i])
            }
        }
    }
    this.size = function () {
        console.log(size)
    }
    var djb2HashCode = function (key) {
        var hash = 5381
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i)
        }
        hash = hash % 1031
        return hash
    }
}
var djb2Hash = new HashTable()
djb2Hash.put('Grandalf', 'gandalf@email.com')
djb2Hash.put('John', 'john@email.com')
djb2Hash.put('Tyrion', 'tyrion@email.com')
djb2Hash.put('Aaron', 'aaron@email.com')
djb2Hash.put('Donnie', 'donnie@email.com')
djb2Hash.put('Ana', 'ana@email.com')
djb2Hash.put('Jonathan', 'jonathan@email.com')//散列值为5
djb2Hash.put('Jamie', 'jamie@email.com')//5
djb2Hash.put('Sue', 'sue@email.com')
djb2Hash.put('Mindy', 'mindy@email.com')
djb2Hash.put('Paul', 'paul@email.com')
djb2Hash.put('Nathan', 'nathan@email.com')
djb2Hash.print()
djb2Hash.size()
djb2Hash.remove('Sue')
djb2Hash.get('Sue')
djb2Hash.size()
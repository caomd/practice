/*
 * @Author: caomd 
 * @Date: 2022-01-09 19:13:12 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-09 19:20:45
 */

var HashTable = function () {
    var table = [], size = 0
    this.put = function (key, val) {
        var position = djb2Hash(key)
        console.log(position)
        return table[position] = val
    }
    this.get = function (key) {
        var position = djb2Hash(key)
        console.log(table[position])
        return table[position]
    }
    var djb2Hash = function (key) {
        var hash = 5381
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i)
        }
        return hash % 1013
    }
    this.print = function () {
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(table[i])
            }
        }
    }
    this.remove = function (key) {
        var position = djb2Hash(key)
        for (var i = 0; i < table.length; i++) {
            if (table[i] === table[position]) {
                table[position] = undefined
            }
        }
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
console.log('***************************')
djb2Hash.get('Nathan')
djb2Hash.remove('Nathan')
djb2Hash.get('Nathan')
/*
 * @Author: caomd 
 * @Date: 2021-12-11 20:48:52 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-12 08:51:08
 */
var Linked = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    var head = null, size = 0
    this.insert = function (key) {
        var node = new Node(key)
        if (head === null) {
            head = node
        } else {
            var current = head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        return size++
    }
    this.getHead = function () {
        return head
    }
    this.isEmpty = function () {
        return size === 0
    }
    this.remove = function (key) {
        if (head !== null) {
            var current = head
            while (current.next) {
                if (current.key === key) {
                    return true
                }
                current = current.next
            }
            if (current.key === key) {
                return true
            }
            return false
        }
    }
}
function HashTable() {
    var table = []
    this.put = function (key, val) {
        var position = loseloseHashCode(key)
        console.log(position + '-' + key)
        table[position] = val
    }
    this.putLinked = function (key, val) {
        var position = loseloseHashCode(key)
        if (table[position] === undefined) {
            table[position] = new Linked()
        }
        table[position].insert(new ValuePair(key, val))
    }
    this.putDjb2 = function (key, val) {
        var position = djb2HachCode(key)
        table[position] = val
        console.log(position + '-' + val)
    }
    var ValuePair = function (key, val) {
        this.key = key
        this.val = val
        this.toString = function () {
            return '[' + this.key + '-' + this.val + ']'
        }
    }
    this.remove = function (key) {
        var position = loseloseHashCode(key)
        table[position] = undefined//还在所在位置上
        return true
    }
    this.removeDjb2 = function (key) {
        var position = djb2HachCode(key)
        table[position] = undefined
        return true
    }
    this.removeLinked = function (key) {
        var position = loseloseHashCode(key)
        //ValuePair
        var head = table[position].getHead()
        var current = head
        while (current.next) {
            if (current.key.key === key) {
                table[position].remove(current.key)
                if (table[position].isEmpty()) {
                    table[position] = undefined
                }
                return true
            }
            current = current.next
        }
        if (current.key.key === key) {
            table[position].remove(current.key)
            if (table[position].isEmpty()) {
                table[position] = undefined
            }
            return true
        }
        return false
    }
    this.getLinked = function (key) {
        var position = loseloseHashCode(key)
        var head = table[position].getHead()
        var current = head
        while (current.next) {
            if (current.key.key === key) {
                return current.key.val
            }
            current = current.next
        }
        if (current.key.key === key) {
            return current.key.val
        }
    }
    this.getDjb2 = function (key) {
        return table[djb2HachCode(key)]
    }
    this.get = function (key) {
        return table[loseloseHashCode(key)]
    }
    this.print = function () {
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + '   ' + table[i])
            }
        }
    }
    this.printLinked = function () {
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                var head = table[i].getHead()
                if (head !== null) {
                    var current = head
                    while (current.next) {
                        console.log(current.key.toString())
                        current = current.next
                    }
                    console.log(current.key.toString())
                }
            }
        }
    }
    //私有方法 散列函数 key 
    var loseloseHashCode = function (key) {
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37 //任意数做除法取余
    }
    //最受欢迎的散列函数
    var djb2HachCode = function (key) {
        var hash = 5381
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i)
        }
        return hash % 1013
    }
}

//test
var hash = new HashTable()
hash.put('A', 'A@emai')
hash.put('B', 'B@emai')
hash.put('C', 'C@emai')
hash.put('D', 'D@emai')
hash.put('E', 'E@emai')
hash.put('F', 'F@emai')
console.log(hash.get('D'))
console.log(hash.get('E'))
console.log(hash.remove('C'))
console.log(hash.get('C'))//undefined

//处理冲突
// var hash = new HashTable()
// hash.put('Grandalf', 'gandalf@email.com')
// hash.put('John', 'john@email.com')
// hash.put('Tyrion', 'tyrion@email.com')
// hash.put('Aaron', 'aaron@email.com')
// hash.put('Donnie', 'donnie@email.com')
// hash.put('Ana', 'ana@email.com')
// hash.put('Jonathan', 'jonathan@email.com')//散列值为5
// hash.put('Jamie', 'jamie@email.com')//5
// hash.put('Sue', 'sue@email.com')
// hash.put('Mindy', 'mindy@email.com')
// hash.put('Paul', 'paul@email.com')
// hash.put('Nathan', 'nathan@email.com')
// hash.print()
//冲突 分离链接 创建链表
// var hashL = new HashTable()
// hashL.putLinked('Grandalf', 'gandalf@email.com')
// hashL.putLinked('John', 'john@email.com')
// hashL.putLinked('Tyrion', 'tyrion@email.com')
// hashL.putLinked('Aaron', 'aaron@email.com')
// hashL.putLinked('Donnie', 'donnie@email.com')
// hashL.putLinked('Ana', 'ana@email.com')
// hashL.putLinked('Jonathan', 'jonathan@email.com')//散列值为5
// hashL.putLinked('Jamie', 'jamie@email.com')//5
// hashL.putLinked('Sue', 'sue@email.com')
// hashL.putLinked('Mindy', 'mindy@email.com')
// hashL.putLinked('Paul', 'paul@email.com')
// hashL.putLinked('Nathan', 'nathan@email.com')
// hashL.printLinked()

var djb2Hash = new HashTable()
djb2Hash.putDjb2('Grandalf', 'gandalf@email.com')
djb2Hash.putDjb2('John', 'john@email.com')
djb2Hash.putDjb2('Tyrion', 'tyrion@email.com')
djb2Hash.putDjb2('Aaron', 'aaron@email.com')
djb2Hash.putDjb2('Donnie', 'donnie@email.com')
djb2Hash.putDjb2('Ana', 'ana@email.com')
djb2Hash.putDjb2('Jonathan', 'jonathan@email.com')//散列值为5
djb2Hash.putDjb2('Jamie', 'jamie@email.com')//5
djb2Hash.putDjb2('Sue', 'sue@email.com')
djb2Hash.putDjb2('Mindy', 'mindy@email.com')
djb2Hash.putDjb2('Paul', 'paul@email.com')
djb2Hash.putDjb2('Nathan', 'nathan@email.com')
djb2Hash.print()
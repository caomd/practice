/*
 * @Author: caomd 
 * @Date: 2022-01-19 09:56:41 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-19 10:02:40
 */
var Linked = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    this.head = null, size = 0
    this.append = function (key) {
        var newNode = new Node(key)
        if (this.head === null) {
            this.head = newNode
        } else {
            var cur = this.head
            while (cur.next) {
                cur = cur.next
            }
            cur.next = newNode
        }
        return size++
    }
    this.hasCycle = function () {
        if (this.head !== null) {
            var cur = this.head
            while (cur.next) {
                cur = cur.next
            }
            //next is null has not cycle
            console.log('this linked has not cycle')
            return false
        }
    }
    this.toString = function () {
        var str = ''
        if (this.head !== null) {
            var cur = this.head
            while (cur.next) {
                str += cur.key + ' -> '
                cur = cur.next
            }
            str += cur.key
        }
        console.log(str)
    }
}

var list = new Linked()
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.toString()
list.hasCycle()
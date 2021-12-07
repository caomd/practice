/*
 * @Author: caomd
 * @Date: 2021-12-06 22:37:04
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-07 21:22:20
 */
//linkedlist tail add element 
var LinkedList = function () {
    var Node = function (element) {
        this.key = element
        this.next = null
    }
    var head = null, size = 0
    //add head or tail element
    this.append = function (element) {
        var current = head
        var node = new Node(element)
        if (!head) {
            head = node
            return size++
        }
        while (current.next) {
            current = current.next
        }
        current.next = node
        return size++
    }
    this.insert = function (element, position) {
        if (position >= 0 && position < size) {
            var node = new Node(element), current = head
            //add head
            if (position === 0) {
                node.next = current
                head = node
            } else {
                // random position
                var i = 0, previous
                while (i++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
            }
            return size++
        } else {
            return 'position not valid'
        }
    }
    this.remove = function (element) {
        var current = head, previous
        var index = this.find(element)
        if (index === 0) {
            head = current.next
            return size--
        } else if (index) {
            var i = 0
            while (i++ < index) {
                previous = current
                current = current.next
            }
            previous.next = current.next
            return --size
        }
    }
    this.find = function (element) {
        var current = head, i = 0
        if (head.key === element) {
            return 0
        }
        while (i++ < size && current.next) {
            if (current.key === element) {
                return i - 1
            }
            current = current.next
        }
        return false
    }
    this.toString = function () {
        var current = head,
            s = current.key + '  '
        while (current.next) {
            current = current.next
            s += current.key + '  '
        }
        console.log(s)
    }
}
//测试append
let list = new LinkedList();
list.append(15)
list.append(10)
list.append(9)
list.append(19)
list.append(39)
console.log('list', list)
list.toString()
list.insert(22, 1)
list.toString()
console.log(list.remove(22))
list.toString()
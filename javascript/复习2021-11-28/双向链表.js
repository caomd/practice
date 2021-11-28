/*
 * @Author: caomengdie 
 * @Date: 2021-11-28 06:27:42 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-28 10:42:27
 */

//双向链表 比单向多了pre
var DoublyLinkedList = function () {
    var head = null, length = 0, tail = null
    var Node = function (element) {
        this.element = element
        this.next = null
        this.pre = null
    }
    //首尾添加元素
    this.append = function (element) {
        var current = head
        var node = new Node(element)
        //添加首部
        if (!head) {
            head = node
            tail = node
        } else {
            current = tail
            current.next = node
            node.pre = current
            tail = node
        }
        length++
        console.log('新添加节点' + element + ',长度加1为' + length)
        this.toString(head)
    }
    //在任意位置添加元素
    this.insert = function (element, index) {
        //判断越界
        if (index < 0 || index > length) {
            return false
        }
        var current = head, previous
        var node = new Node(element)
        //index = 0 插入头部
        if (index === 0) {
            head = node
            node.next = current
            current.pre = node
        } else if (index === length) {
            this.append(element)
        }
        else {
            var mid
            var node = new Node(element)
            mid = Math.floor(length / 2)
            var paramObj = {
                mid,
                index,
                head,
                tail,
                node,
                length
            }
            compareMidPos(paramObj)
        }
        length++
        index = index === 0 ? '头部' : index
        console.log('在' + index + '位置插入新节点' + element + ',长度为' + length)
        this.toString(head)
    }
    var compareMidPos = function (param) {
        var { mid,
            index,
            head,
            tail,
            node,
            length } = param
        var current, previoius, i
        if (mid > index) { //从头部遍历
            current = head, i = 0
            while (i++ < index) {
                previous = current
                current = current.next
            }
            previous.next = node
            node.pre = previous
            node.next = current
            current.pre = node
        } else {
            //从尾部遍历添加元素，在后半部分
            current = tail, i = length - 1
            while (i-- > index) {
                current = current.pre
                previoius = current.pre
            }
            previoius = current.pre
            node.pre = previoius
            previoius.next = node
            node.next = current
            current.pre = node
        }
    }
    //在任意位置移除元素
    this.removeAt = function (index) {
        if (index < 0 || index >= length) {
            throw new Error('index 超过链表长度范围')
        }
        //删除头部
        var current = head, previous, i = 0, element
        if (index === 0) {
            head = current.next
        }
        //删除尾部
        else if (index === length - 1) {
            current = tail
            element = current.element
            tail = current.pre
            tail.next = null
        }
        //删除之间位置
        else {
            while (i++ < index) {
                previous = current
                current = current.next
            }
            element = current.element
            current = current.next
            previous.next = current
            current.pre = previous
        }
        length--
        console.log('删除位置' + index + '的节点' + element, '长度减1为' + length)
        this.toString(head)
    }
    this.toString = function (node) {
        var current = head, s = ''
        while (current.next) {
            s += current.element + '->'
            current = current.next
        }
        s += current.element
        console.log(s)
    }
}
var dll = new DoublyLinkedList()
dll.append(1)
dll.append(2)
dll.append(3)
dll.insert(11, 0)
dll.insert(33, 3)
dll.removeAt(4)
dll.insert(111, 0)
dll.append(4)
dll.insert(44, 3)
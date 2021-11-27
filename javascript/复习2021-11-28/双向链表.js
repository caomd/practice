/*
 * @Author: caomengdie 
 * @Date: 2021-11-28 06:27:42 
 * @Last Modified by: caomengdie
 * @Last Modified time: 2021-11-28 07:28:07
 */

//双向链表 比单向多了pre
var DoublyLinkedList = function () {
    var head = null, length = 0
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
        } else {
            while (current.next) {
                current = current.next
            }
            current.next = node
            node.pre = current
        }
        length++
        console.log('新添加节点' + element + ',长度为' + length)
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
            var current = head, i = 0, previous
            var node = new Node(element)
            while (i++ < index) {
                previous = current
                current = current.next
            }
            previous.next = node
            node.pre = previous
            node.next = current
            current.pre = node
        }
        length++
        index = index === 0 ? '头部' : index
        console.log('在' + index + '位置插入新节点' + element + ',长度为' + length)
        this.toString(head)
    }
    //在任意位置移除元素

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
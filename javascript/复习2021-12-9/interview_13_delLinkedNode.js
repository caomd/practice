/*
 * @Author: caomd
 * @Date: 2021-12-09 17:09:37
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-09 18:01:39
 */
//在O(1)时间删除链表结点 and 新思路
//new idea 把后一项复制给删除项 然后删除后一项
var LinkedList = function () {
    var Node = function (element) {
        this.key = element
        this.next = null
    }
    var root = null, size = 0
    this.append = function (element) {
        var node = new Node(element)
        if (root === null) {
            root = node
            return size++
        }
        var current = root
        while (current.next) {
            current = current.next
        }
        current.next = node
        return size++
    }
    this.insert = function (position, element) {
        var node = new Node(element)
        if (position >= 0 || element !== null) {
            var current = root
            if (position === 0) {
                if (!root) {
                    root = node
                } else {
                    node.next = current
                    root = node
                }
            } else {
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
            return
        }
    }
    this.remove = function (element) {
        if (root !== null) {
            if (root.key === element) {
                //delete root
                //new idear copy next to root and delete next
                var current = root
                if (current.next) {
                    current = current.next
                }
                root = current
            } else {
                removeNode(root, element)
            }
            return size--
        }
    }
    var removeNode = function (node, key) {
        if (node !== null) {
            var current = node, previous
            while (current.next) {
                //new idear
                var previous = current
                current = current.next
                // if (current.key === key) {
                //     //copy current.next
                //     if (current.next !== null) {
                // var temp = current.next
                //     current.key = temp.key
                //     current.next = temp.next
                //     break
                // }
                //     previous.next = null
                //     break
                // }
                //before way
                if (current.key === key) {
                    previous.next = current.next
                }
            }
        }
    }
    this.toString = function () {
        var current = root
        while (current.next) {
            console.log(current.key)
            current = current.next
        }
        console.log(current.key, size)
    }
}
var linked = new LinkedList()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.insert(1, 22)
linked.insert(2, 33)
linked.toString()
linked.remove(4)
linked.toString()
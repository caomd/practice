/*
 * @Author: caomd
 * @Date: 2021-12-09 18:33:39
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-09 19:04:10
 */
//链表中倒数第k个结点 
//隐含信息 链表个数大于k
//idear 1 倒数第k项，下标为length-k 正数第length-k+1项 step 1 遍历链表得到length 然后得到index的结点 遍历了两次，要求只遍历一次
//利用两个指针 第一个指针走k-1步当走到k步开始，第二个指针开始走 当第一个指针走到链表尾部时，第二个指针指向倒数第k个节点
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
    this.findFromEnd = function (k) {
        if (root !== null) {
            var i = 0, current = root, second = root
            //倒数第一项
            if (k === 1) {
                while (current.next) {
                    current = current.next
                }
                console.log(current.key)
                return current
            }
            while (i++ < k - 1) {
                current = current.next
            }
            //current === k-1时 second 开始走 current = k second = 1
            while (current.next && second.next) {
                second = second.next
                current = current.next
            }
            //current.next === null 最后一个节点 返回second
            console.log(second.key)
            return second
        }
    }
    this.toString = function () {
        var current = root
        while (current.next) {
            console.log(current.key)
            current = current.next
        }
        console.log(current.key, '  size:', size)
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
linked.findFromEnd(6)
/*
 * @Author: caomd
 * @Date: 2021-12-09 21:53:01
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-17 12:51:28
 */
//合并两个排序的链表
//思路：从比较两个链表的最后一项开始 前一个链表大就前移 直到小于等于另一个链表节点插入节点next 移动后一个链表指针 小于等于前一项就停止，插入前一项
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
    this.toString = function () {
        var current = root, node = ''
        while (current.next) {
            node += current.key + '  '
            current = current.next
        }
        node += current.key + '  '
        console.log(node, '  size:', size)
    }
    this.reverse = function () {
        if (root !== null) {
            var current = root,
                stack = new Stack()
            while (current.next) {
                stack.push(current)
                current = current.next
            }
            stack.push(current)
            //reverse
            var reverseHead = null, previous = null
            while (!stack.isEmpty()) {
                var current = stack.pop()
                if (current.next === null) {
                    reverseHead = current
                    previous = reverseHead
                } else {
                    current.next = null
                    previous.next = current
                    previous = current
                }

            }
            return reverseHead
        }
    }
    this.reverseTwo = function () {
        if (root !== null) {
            var previous = null, current = root, reverseHead = null
            while (current) {
                var next = current.next
                if (next === null) {
                    reverseHead = current
                }
                current.next = previous
                previous = current
                current = next
            }
            return reverseHead
        }
    }
    this.size = function () {
        return size
    }
    this.setSize = function () {
        return size++
    }
    this.getHead = function () {
        if (root) {
            return root
        }
        return null
    }
    this.remove = function (node) {
        if (root !== null) {
            if (root.key === node.key) {
                var current = root
                root = null
                root = current.next
                size--
                return this
            }
            removeNode(root, node)
            size--
        }
    }
    var removeNode = function (node, rnode) {
        if (node !== null) {
            var current = node, previous
            while (current.next) {
                previous = current
                current = current.next
                if (current.key === rnode.key) {
                    previous.next = current.next
                    return this
                }
            }
            previous.next = null
            return this
        }
    }
}
var print = function (node) {
    if (node !== null) {
        var s = ''
        while (node.next) {
            s += node.key
            node = node.next
        }
        console.log(s)
    }
}
var linked = new LinkedList()
linked.append(1)
linked.append(2)
linked.append(3)
linked.append(4)
linked.append(4)
linked.append(6)
// linked.append(7)
// linked.toString()
var linked2 = new LinkedList()
linked2.append(3)
linked2.append(3)
linked2.append(4)
linked2.append(5)
linked2.append(6)
linked2.append(8)
// linked2.toString()
var mergeSortLinked = function (l1, l2) {
    if (l1 === null && l2 !== null) {
        return l2
    } else if (l1 !== null && l2 === null) {
        return l1
    } else if (l1 === null && l2 === null) {
        return null
    } else {
        var l1head = linked.getHead()
        var l2head = linked2.getHead()
        var currentl1 = l1head, currentl2 = l2head, orderHead = null, previous = null
        if (l1head !== null && l2head !== null) {
            if (l1head.key < l2head.key) {
                orderHead = l1head
                linked = linked.remove(l1head)
                if (l1head.next) {
                    previous = currentl1
                    previous.next = mergeSortLinked(linked, linked2)
                } else {
                    l1head.next = l2head
                }
            } else {
                orderHead = l2head
                linked2 = linked2.remove(l2head)
                if (l2head.next) {
                    previous = currentl2
                    previous.next = mergeSortLinked(linked, linked2)
                } else {
                    l2head.next = l1head
                }
            }
            return orderHead
        } else if (l1head === null) {
            return linked2
        } else if (l2head === null) {
            return linked
        } else {
            throw new Error('not exist node')
        }
    }
}
// var ret = mergeSortLinked(linked, linked2)
// print(ret)

//method 2 not remove node use insert way 返回节点
var orderLinked = function (link1, link2) {
    if (link1 === null && link2 === null) {
        return
    } else if (link1 === null && link2 !== null) {
        return link2
    } else if (link2 === null && link1 !== null) {
        return link1
    } else {
        var head1 = link1.getHead()
        var head2 = link2.getHead()
        if (head1 === null && head2 === null) {
            return
        } else if (head1 === null && head2 !== null) {
            return link2
        } else if (head2 === null && head1 !== null) {
            return link1
        } else {
            //return order Node 无所谓赋值给head1 还是head2
            head1 = mergeLinked(head1, head2, link1)
            return link1
            // return mergeLinked(head1, head2)
        }
    }
}
var mergeLinked = function (h1, h2, link1) {
    var orderHead = null
    if (h1.key <= h2.key) {
        orderHead = h1
        if (h1.next) {
            //只有在link1后插入才size++ 不然有重复
            link1.setSize()
            orderHead.next = mergeLinked(h1.next, h2, link1)
        } else {
            //只有在link1后插入才size++
            link1.setSize()
            h1.next = h2
        }
    } else {
        orderHead = h2
        if (h2.next) {
            orderHead.next = mergeLinked(h1, h2.next, link1)
        } else {
            h2.next = h1
        }
    }
    console.log(link1.size())
    return orderHead
}
var print = function (node) {
    var current = node, s = ''
    while (current.next) {
        s += current.key + '  '
        current = current.next
    }
    s += current.key + '  '
    console.log('orderNode  ' + s)
}
// var orderNode = orderLinked(linked, linked2)
// print(orderNode)
orderLinked(linked, linked2).toString()
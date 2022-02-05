/*
 * @Author: caomd 
 * @Date: 2022-01-28 12:04:38 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-28 13:06:09
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
    this.toString = function () {
        var cur = this.head, str = ''
        while (cur.next) {
            str += cur.key + ' -> '
            cur = cur.next
        }
        str += cur.key
        console.log(str)
    }
    this.size = function () {
        return size
    }
    this.deleteRear = function () {
        var cur = this.head, pre
        while (cur.next) {
            pre = cur
            cur = cur.next
        }
        size--
        if (pre) {
            pre.next = null
            return cur.key
        } else {
            this.head = null
            return cur.key
        }
    }
    this.deleteHead = function () {
        var cur = this.head, pre
        this.head = cur.next
        size--
        return cur.key
    }
}
var Queue = function () {
    var item = new Linked()
    this.enqueue = function (key) {
        item.append(key)
    }
    this.dequeue = function (key) {
        return item.deleteHead()
    }
    this.isEmpty = function () {
        return item.size() === 0
    }
    this.size = function () {
        return item.size()
    }
}
var Stack = function () {
    var item = new Linked()
    this.push = function (key) {
        item.append(key)
    }
    this.pop = function () {
        return item.deleteRear()
    }
    this.isEmpty = function () {
        return item.size() === 0
    }
}
var RedBlackTree = function () {
    var Node = function (key, size, color) {
        this.key = key
        this.left = null
        this.right = null
        this.size = size
        this.color = color
    }
    this.root = null
    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        this.root.color = 'BLACK'
    }
    var isRed = function (node) {
        return node.color
    }
    var flipColor = function (node) {
        if (node.left) {
            node.left.color = 'BLACK'
        }
        if (node.right) {
            node.right.color = 'BLACK'
        }
        node.color = 'RED'
    }
    var size = function (node) {
        return node.size
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key, 1, 'RED')
        var s = new Stack()
        while (node !== null) {
            s.push(node)
            if (node.key > key) {
                node = node.left
            } else {
                node = node.right
            }
        }
        node = newNode
        while (!s.isEmpty()) {
            var parent = s.pop()
            if (parent.key > key) {
                parent.left = node
                node = parent
            } else {
                parent.right = node
                node = parent
            }
        }
        //judge node color
        if (node.left && isRed(node.left) && node.left.left && isRed(node.left.left)) {
            node = rotationRight(node)
        }
        if (node.right && isRed(node.right) && node.left && isRed(node.left)) {
            node = rotationLeft(node)
        }
        if (node.left && isRed(node.left) && node.right && isRed(node.right)) {
            flipColor(node)
        }
        node.size = (node.left && size(node.left)) + (node.right && size(node.right)) + 1
        return node
    }
    var rotationRight = function (node) {
        var temp = node.left
        node.left = temp.right
        temp.right = node
        temp.color = node.color
        temp.size = node.size
        node.color = 'RED'
        node.size = (node.left && size(node.left)) + (node.right && size(node.right))
        return temp
    }
    var rotationLeft = function (node) {
        var temp = node.right
        node.right = temp.left
        temp.left = node
        temp.color = node.color
        temp.size = node.size
        node.color = 'RED'
        node.size = size(node.left) + size(node.right) + 1
        return temp
    }
}
var OrderTraverse = function (root) {
    var q = new Queue()
    if (root !== null) {
        q.enqueue(root)
    }
    while (!q.isEmpty()) {
        var size = q.size()
        for (var i = 0; i < size; i++) {
            var cur = q.dequeue()
            console.log(cur.key)
            if (cur.left) {
                q.enqueue(cur.left)
            }
            if (cur.right) {
                q.enqueue(cur.right)
            }
        }
    }
}
var tree = new RedBlackTree()
tree.insert(10);
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(35);
tree.insert(5);
OrderTraverse(tree.root)
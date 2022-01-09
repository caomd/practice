/*
 * @Author: caomd 
 * @Date: 2022-01-09 14:43:28 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-09 15:33:45
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
    this.removeTail = function () {
        if (this.head !== null) {
            var cur = this.head, pre
            while (cur.next) {
                pre = cur
                cur = cur.next
            }
            if (pre) {
                pre.next = null
            } else {
                this.head = null
            }
            size--
            return cur.key
        }
    }
    this.removeTop = function () {
        if (this.head !== null) {
            var cur = this.head
            this.head = this.head.next
            return cur.key
        }
    }
    this.peek = function () {
        if (this.head) {
            var cur = this.head
            while (cur.next) {
                cur = cur.next
            }
            return cur
        }
    }
    this.isEmpty = function () {
        return size === 0
    }
}
var Queue = function () {
    var item = new Linked(), size = 0
    this.enqueue = function (key) {
        item.append(key)
        return size++
    }
    this.dequeue = function () {
        size--
        return item.removeTop()
    }
    this.isEmpty = function () {
        return size === 0
    }
    this.size = function () {
        return size
    }
}
var Stack = function () {
    var item = new Linked(), size = 0
    this.push = function (key) {
        item.append(key)
        return size++
    }
    this.pop = function () {
        size--
        return item.removeTail()
    }
    this.isEmpty = function () {
        return size === 0
    }
}
var bst = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null
    var size = 0
    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        return size++
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key)
        if (node === null) return node = newNode
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
        return node
    }
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(this.root, callback, size)
    }
    var inOrderTraverseNode = function (node, callback, size) {
        var s = new Stack()
        while (node !== null || !s.isEmpty()) {
            if (node !== null) {
                s.push(node)
                node = node.left
            } else {
                var t = s.pop()
                callback(t.key, size)
                node = t.right
            }
        }
    }
}
var bstMinHeight = function (bst) {
    //minHeight queue from width to deep
    if (bst.root === null) return null
    var q = new Queue(), h = 0
    q.enqueue(bst.root)
    h++
    while (!q.isEmpty()) {
        var size = q.size()
        for (var i = 0; i < size; i++) {
            var cur = q.dequeue()
            if (cur.left === null && cur.right === null) {
                console.log(h)
                return h
            }
            if (cur.left) {
                q.enqueue(cur.left)
            }
            if (cur.right) {
                q.enqueue(cur.right)
            }
        }
        h++
    }
}
var print = (
    function () {
        var cache = []
        return function (val, size) {
            console.log(val)
            cache.push(val)
            if (cache.length === size) {
                console.log(cache.join(' => '))
                cache = []
            }
        }
    }
)()
var bst = new bst()
bst.insert(10);
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(35);
bst.insert(5);
bst.inOrderTraverse(print)
console.log('minHeight: ')
bstMinHeight(bst)
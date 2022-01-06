/*
 * @Author: caomd 
 * @Date: 2022-01-06 14:49:24 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-06 15:34:05
 */

var BST = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null, size = 0
    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        return size++
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key)
        if (node === null) return node = newNode
        var stack = []
        while (node !== null) {
            stack.push(node)
            if (node.key > key) {
                node = node.left
            } else {
                node = node.right
            }
        }
        node = newNode
        while (stack.length) {
            var parent = stack.pop()
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
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(this.root, size, callback)
    }
    var preOrderTraverseNode = function (node, size, callback) {
        var stack = []
        while (node !== null || stack.length) {
            if (node !== null) {
                stack.push(node)
                console.log(node.key)
                node = node.left
            } else {
                var t = stack.pop()
                node = t.right
            }
        }
    }
}
var print = (
    function () {
        var cache = []
        return function (val, size) {
            cache.push(val)
            console.log(val)
            if (cache.length === size) {
                console.log(cache.join(' -> '))
                cache = []
            }
        }
    }
)()
var Queue = function () {
    var items = [], size = 0
    this.enqueue = function (key) {
        items.push(key)
        return size++
    }
    this.dequeue = function (key) {
        size--
        return items.shift()
    }
    this.isEmpty = function () {
        return size === 0
    }
    this.size = function () {
        return size
    }
}
var Linked = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    var head = null, size = 0
    this.append = function (key) {
        var newNode = new Node(key)
        if (head === null) {
            head = newNode
        } else {
            var cur = head
            while (cur.next) {
                cur = cur.next
            }
            cur.next = newNode
        }
        return size++
    }
    this.isEmpty = function () {
        return size === 0
    }
    this.size = function () {
        return size
    }
    this.head = function () {
        return head
    }
}
//from width to deep queue
var bstOrderSort = function (root) {
    if (root === null) return null
    var q = new Queue()
    q.enqueue(root)
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
var bstOrderLevelLinked = function (node) {
    if (node === null) return null
    var curLinkedList = new Linked()
    curLinkedList.append(node)
    while (!curLinkedList.isEmpty()) {
        var cur = curLinkedList.head(), nextLinked = new Linked()
        while (cur) {
            console.log(cur.key.key)
            if (cur.key.left) {
                nextLinked.append(cur.key.left)
            }
            if (cur.key.right) {
                nextLinked.append(cur.key.right)
            }
            cur = cur.next
        }
        curLinkedList = nextLinked
    }
}
var bst = new BST()
bst.insert(10);
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(35);
bst.insert(5);
console.log('preOrderBst')
bst.preOrderTraverse()
console.log('OrderLevelBst')
bstOrderSort(bst.root)
console.log('Order by Linked List')
bstOrderLevelLinked(bst.root)
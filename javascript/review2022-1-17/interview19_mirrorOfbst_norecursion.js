/*
 * @Author: caomd 
 * @Date: 2022-01-17 19:38:19 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-17 19:54:15
 */
var Queue = function () {
    var items = [], size = 0
    this.enqueue = function (key) {
        items.push(key)
        return size++
    }
    this.dequeue = function () {
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
var bst = function () {
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
        if (node.key > key) {
            node.left = insertNode(node.left, key)
        } else {
            node.right = insertNode(node.right, key)
        }
        return node
    }
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(this.root, callback, size)
    }
    var preOrderTraverseNode = function (node, callback, size) {
        var stack = []
        while (node !== null || stack.length) {
            if (node) {
                stack.push(node)
                callback(node.key, size)
                node = node.left
            } else {
                var tem = stack.pop()
                node = tem.right
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
var avl = new bst()
avl.insert(50);
avl.insert(30);
avl.insert(70);
avl.insert(40);
avl.insert(10);
avl.insert(35);
avl.preOrderTraverse(print)
//left and right change
var mirrorOfBst = function (root) {
    var q = new Queue()
    if (root !== null) {
        q.enqueue(root)
    }
    while (!q.isEmpty()) {
        var size = q.size()
        for (var i = 0; i < size; i++) {
            var cur = q.dequeue()
            if (cur.left || cur.right) {
                var tem = cur.left
                cur.left = cur.right
                cur.right = tem
            }
            if (cur.left) {
                q.enqueue(cur.left)
            }
            if (cur.right) {
                q.enqueue(cur.right)
            }
        }
    }
    return root
}
var printNode = function (node) {
    orderTraverse(node)
}
var orderTraverse = function (node) {
    var q = new Queue()
    if (node !== null) {
        q.enqueue(node)
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
printNode(mirrorOfBst(avl.root))
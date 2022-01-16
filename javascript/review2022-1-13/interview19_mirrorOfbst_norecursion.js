/*
 * @Author: caomd 
 * @Date: 2022-01-13 20:48:54 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-13 21:27:53
 */

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
        if (node === null) {
            return node = newNode
        }
        if (node.key > key) {
            node.left = insertNode(node.left, key)
        } else {
            node.right = insertNode(node.right, key)
        }
        return node
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(this.root, callback, size)
    }
    var postOrderTraverseNode = function (node, callback, size) {
        var stack = [], stack1 = []
        while (node !== null || stack.length) {
            if (node !== null) {
                stack.push(node)
                stack1.push(node)
                node = node.right
            } else {
                var t = stack.pop()
                node = t.left
            }
        }
        while (stack1.length) {
            node = stack1.pop()
            callback(node.key, size)
        }
    }
}
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
var mirrorTree = function (node) {
    var q = new Queue()
    if (node !== null) {
        q.enqueue(node)
    }
    while (!q.isEmpty()) {
        var size = q.size()
        for (var i = 0; i < size; i++) {
            var cur = q.dequeue()
            if (cur.left !== null || cur.right !== null) {
                var t = cur.left
                cur.left = cur.right
                cur.right = t
            }
            if (cur.left) {
                q.enqueue(cur.left)
            }
            if (cur.right) {
                q.enqueue(cur.right)
            }
        }
    }
    return node
}
var OrderSort = function (node) {
    var q = new Queue()
    if (node !== null) q.enqueue(node)
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
var printTree = (
    function () {
        var cache = []
        return function (val, size) {
            console.log(val)
            cache.push(val)
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
avl.postOrderTraverse(printTree)
OrderSort(mirrorTree(avl.root))

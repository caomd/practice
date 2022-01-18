/*
 * @Author: caomd 
 * @Date: 2022-01-20 10:41:51 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-20 11:01:12
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
            } else {
                parent.right = node
            }
            node = parent
        }
        return node
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(this.root, callback, size)
    }
    var postOrderTraverseNode = function (node, callback, size) {
        var stack = [], stack1 = []
        while (node !== null || stack.length) {
            if (node) {
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
var print = (
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
                var temp = cur.left
                cur.left = cur.right
                cur.right = temp
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
var orderTraverse = function (root) {
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
var tree = new bst()
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(10);
tree.insert(35);
tree.postOrderTraverse(print)
orderTraverse(mirrorOfBst(tree.root))

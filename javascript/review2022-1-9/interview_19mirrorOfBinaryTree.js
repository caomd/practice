/*
 * @Author: caomd 
 * @Date: 2022-01-09 19:21:10 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-09 19:57:48
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
        if (node !== null) {
            callback(node.key, size)
            preOrderTraverseNode(node.left, callback, size)
            preOrderTraverseNode(node.right, callback, size)
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

var mirrorBST = function (bst) {
    return changeLeftRightNode(bst.root)
}
var changeLeftRightNode = function (root) {
    if (root !== null) {
        if (root.left === null && root.right === null) return null
        var temp = root.left
        root.left = root.right
        root.right = temp
        changeLeftRightNode(root.left)
        changeLeftRightNode(root.right)
        return root
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
var levelTraverse = function (root) {
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
var avl = new bst()
avl.insert(50);
avl.insert(30);
avl.insert(70);
avl.insert(40);
avl.insert(10);
avl.insert(35);
avl.preOrderTraverse(print)
levelTraverse(mirrorBST(avl))
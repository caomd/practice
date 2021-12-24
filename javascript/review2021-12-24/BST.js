/*
 * @Author: caomd 
 * @Date: 2021-12-24 10:22:35 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-24 11:30:20
 */
var BST = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null
    this.size = 0
    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        return this.size++
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key)
        if (node === null) return newNode
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
    this.levelTraver = function (callback) {
        levelTraverseNode(this.root, callback, this.size)
    }
    var levelTraverseNode = function (node, callback, size) {
        if (node === null) return
        var stack = []
        stack.push(node)
        while (stack.length) {
            var current = stack.shift()
            if (current === null) continue
            callback(current.key, size)
            stack.push(current.left)
            stack.push(current.right)
        }

    }
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(this.root, callback, this.size)
    }
    var inOrderTraverseNode = function (node, callback, size) {
        var stack = []
        while (node !== null || stack.length) {
            if (node !== null) {
                stack.push(node)
                node = node.left
            } else {
                var t = stack.pop()
                callback(t.key, size)
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

var bst = new BST()
bst.insert(10);
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(35);
bst.insert(5);
bst.inOrderTraverse(print)
bst.levelTraver(print)
/*
 * @Author: caomd 
 * @Date: 2022-01-08 19:39:23 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-08 19:54:27
 */

var Bst = function () {
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
    this.OrderLevelTraverse = function (callback) {
        OrderLevelTraverseNode(this.root, callback, size)
    }
    var OrderLevelTraverseNode = function (node, callback, sizes) {
        var stack = []
        if (node !== null) stack.push(node)
        while (stack.length) {
            var size = stack.length
            for (var i = 0; i < size; i++) {
                var cur = stack.shift() //queue simulation
                callback(cur.key, sizes)
                if (cur.left) {
                    stack.push(cur.left)
                }
                if (cur.right) {
                    stack.push(cur.right)
                }
            }
        }
    }
    var preOrderTraverseNode = function (node, callback, size) {
        var stack = []
        while (node !== null || stack.length) {
            if (node !== null) {
                stack.push(node)
                callback(node.key, size)
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
            if (cache.length === size) {
                console.log(cache.join(' -> '))
                cache = []
            }
        }
    }
)()
var avl = new Bst()
avl.insert(50);
avl.insert(30);
avl.insert(70);
avl.insert(40);
avl.insert(10);
avl.insert(35);
avl.preOrderTraverse(print)
console.log('OrderLevel')
avl.OrderLevelTraverse(print)
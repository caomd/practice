/*
 * @Author: caomd 
 * @Date: 2021-12-26 10:39:16 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-27 15:22:14
 */
//lever traverse isValid remove 
var bst = function () {
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
        if (node === null) {
            node = newNode
        } else {
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
        }
        return node
    }
    this.leverTraverse = function (callback) {
        leverTraverseNode(this.root, callback, this.size)
    }
    var leverTraverseNode = function (node, callback, size) {
        var stack = []
        if (node !== null) stack.push(node)
        while (stack.length) {
            node = stack.shift()
            callback(node.key, callback)
            if (node.left) {
                stack.push(node.left)
            }
            if (node.right) {
                stack.push(node.right)
            }
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
var bst = new bst()
bst.insert(10);
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(35);
bst.insert(5);
bst.leverTraverse(print)
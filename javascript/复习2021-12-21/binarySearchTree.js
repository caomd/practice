/*
 * @Author: caomd 
 * @Date: 2021-12-21 10:01:44 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-21 10:14:29
 */
//not recursion postOrderTraverse
var BinarySearchTree = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null
    this.size = 0
    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        this.size++
    }
    var insertNode = function (node, key) {
        var stack = [], newNode = new Node(key)
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
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(this.root, callback, this.size)
    }
    var postOrderTraverseNode = function (node, callback, size) {
        var stack = [], stack2 = []
        while (node !== null || stack.length) {
            if (node !== null) {
                stack.push(node)
                stack2.push(node)
                node = node.right
            } else {
                var t = stack.pop()
                node = t.left
            }
        }
        while (stack2.length) {
            node = stack2.pop()
            callback(node.key, size)
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
var bst = new BinarySearchTree()
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(10);
bst.insert(35);
bst.postOrderTraverse(print)
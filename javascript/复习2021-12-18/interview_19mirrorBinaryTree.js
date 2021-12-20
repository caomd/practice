/*
 * @Author: caomd
 * @Date: 2021-12-20 20:36:28
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-20 21:04:05
 */

//left and right switch
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
        return this.size++
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key)
        if (node === null) {
            node = newNode
        } else {
            if (node.key > key) {
                node.left = insertNode(node.left, key)
            } else {
                node.right = insertNode(node.right, key)
            }
        }
        return node
    }
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(this.root, callback, this.size)
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
var mirrorBinaryTree = function (tree) {
    if (tree.root !== null) {
        var node = tree.root, stack = []
        while (node !== null || stack.length) {
            if (node !== null) {
                if (node.left || node.right) {
                    var t = node.left
                    node.left = node.right
                    node.right = t
                }
                stack.push(node)
                node = node.left
            } else {
                var t = stack.pop()
                node = t.right
            }
        }
        return tree
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
bst.insert(39);
bst.insert(9);
bst.insert(65)
bst.insert(60)
bst.preOrderTraverse(print)
var mirror = mirrorBinaryTree(bst)
mirror.preOrderTraverse(print)
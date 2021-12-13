/*
 * @Author: caomd
 * @Date: 2021-12-11 21:52:21
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-13 10:28:50
 */
//树的子结构
//judge b tree is a tree child tree
var BinarySearchTree = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null, size = 0
    this.insert = function (key) {
        root = insertNode(root, key)
        return size++
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key)
        if (node !== null) {
            if (node.key > key) {
                //left
                node.left = insertNode(node.left, key)
            } else {
                node.right = insertNode(node.right, key)
            }
        } else {
            node = newNode
        }
        return node
    }
    this.inOrderTraverse = function (callback) {
        if (root !== null) {
            inOrderTraverseNode(root, callback, size)
        }
    }
    var inOrderTraverseNode = function (node, callback, size) {
        var stack = []
        while (node !== null || stack.length) {
            if (node) {
                stack.push(node)
                node = node.left
            } else {
                var b = stack.pop()
                callback(b.key, size)
                node = b.right
            }
        }

    }

    //left right root
    this.postOrderTraverse = function (callback) {
        //unrecursivily
        if (root !== null) {
            postOrderTraverseNode(root, callback, size)
        }
    }
    var postOrderTraverseNode = function (node, callback, size) {
        var stack = [], stack2 = [], b, top = node
        while (node !== null || stack.length) {
            if (node) {
                stack.push(node)
                stack2.push(node)
                node = node.right
            } else {
                b = stack.pop()
                node = b.left
            }
        }
        while (stack2.length) {
            var node = stack2.pop()
            callback(node.key, size)
        }
    }
    this.preOrderTraverse = function (callback) {
        if (root !== null) {
            preOrderTraverseNode(root, callback, size)
        }
    }
    var preOrderTraverseNode = function (node, callback, size) {
        var stack = []
        while (node !== null || stack.length) {
            if (node) {
                callback(node.key, size)
                stack.push(node)
                node = node.left
            } else {
                var b = stack.pop()
                node = b.right
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
                console.log(cache.join('  '))
                cache = []
            }
        }
    }
)()
var tree = new BinarySearchTree()
tree.insert(10);
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(35);
tree.postOrderTraverse(print)
/*
 * @Author: caomd
 * @Date: 2021-12-14 21:36:17
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-14 22:38:21
 */
//from top to bottom bfs FIFO
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
                //left
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
            if (node) {
                stack.push(node)
                callback(node.key, size)
                node = node.left
            } else {
                var t = stack.pop()
                node = t.right
            }
        }
    }
    this.bfs = function (callback) {
        bfsNode(this.root, callback, this.size)
    }
    var bfsNode = function (node, callback, size) {
        //FIFO
        var stack = []
        while (node !== null || stack.length) {
            if (node) {
                callback(node.key, size)
                stack.push(node)
                node = node.left
            } else {
                var top = stack.shift()
                node = top.right
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
var tree = new BinarySearchTree()
tree.insert(10);
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(35);
// tree.preOrderTraverse(print)
tree.bfs(print)

/*
 * @Author: caomd
 * @Date: 2021-12-16 10:19:11
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-16 11:14:34
 */
//bfs from width to depth uses queue
var BinarySearchTree = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null
    this.size = null
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
    this.bfs = function (callback) {
        if (this.root === null) return null
        bfsNode(this.root, this.size, callback)

    }
    var bfsNode = function (node, size, callback) {
        var queue = []
        queue.push(node)
        //find left and right
        while (queue.length) {
            var node = queue.shift()
            callback(node.key, size)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
}
var printTree = (function () {
    var cache = []
    return function (val, size) {
        cache.push(val)
        console.log(val)
        if (cache.length === size) {
            console.log(cache.join(' -> '))
            cache = []
        }
    }
})()

var tree1 = new BinarySearchTree()
tree1.insert(10);
tree1.insert(50);
tree1.insert(30);
tree1.insert(70);
tree1.insert(40);
tree1.insert(35);
tree1.insert(3);
tree1.insert(6);
tree1.bfs(printTree)
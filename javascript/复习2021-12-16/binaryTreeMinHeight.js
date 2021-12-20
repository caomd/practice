/*
 * @Author: caomd 
 * @Date: 2021-12-16 15:22:35 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-20 11:46:20
 */

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
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(this.root, callback, this.size)
    }
    function inOrderTraverseNode(node, callback, size) {
        if (node === null) return null
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
    this.minHeight = function () {
        if (this.root !== null) {
            var height = 1, queue = []
            node = this.root
            queue.push(node)
            while (queue.length) {
                var size = queue.length
                for (var i = 0; i < size; i++) {
                    node = queue.shift()
                    if (node.left === null && node.right === null) {
                        console.log("minHeight: " + height)
                        return height
                    }
                    if (node.left !== null) {
                        queue.push(node.left)
                    }
                    if (node.right !== null) {
                        queue.push(node.right)
                    }
                }
                //left and right all push height++
                height++
            }
            console.log("minHeight: " + height)
        }
    }
    // this.minHeight = function () {
    //     if (this.root !== null) {
    //         var queue = [], depth = 1
    //         queue.push(this.root)
    //         while (queue.length) {
    //             var qz = queue.length
    //             for (var i = 0; i < qz; i++) {
    //                 var current = queue.shift()
    //                 if (current.left === null && current.right === null) {
    //                     return depth
    //                 }
    //                 if (current.left !== null) {
    //                     queue.push(current.left)
    //                 }
    //                 if (current.right !== null) {
    //                     queue.push(current.right)
    //                 }
    //             }
    //             depth++
    //         }
    //         console.log(depth)
    //     }
    // }
}
var print = (function () {
    var cache = []
    return function (val, size) {
        cache.push(val)
        if (cache.length === size) {
            console.log(cache.join(' => '))
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
// tree1.insert(6);
tree1.inOrderTraverse(print)
tree1.minHeight()
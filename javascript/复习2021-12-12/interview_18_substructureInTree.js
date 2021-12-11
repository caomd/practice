/*
 * @Author: caomd
 * @Date: 2021-12-11 21:52:21
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-11 22:53:47
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
    //left right root
    this.postOrderTraverse = function (callback) {
        //unrecursivily
        if (root !== null) {
            postOrderTraverseNode(root, callback, size)
        }
    }
    var postOrderTraverseNode = function (node, callback, size) {
        var stack = []
        while (node !== null) {
            stack.push(node)
            // while (stack.length !== 0) {

            if (node.left !== null) {
                while (node.left) {
                    node = node.left
                    stack.push(node)
                }
                callback(node.key, size)
                stack.pop()
                node = stack.pop()
            }
            if (node.right === null) {
                callback(node.key, size)
            } else {
                while (node.right) {
                    node = node.right
                    stack.push(node)
                }
            }
            node = stack.pop()
            // }

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
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(10);
tree.insert(35);
tree.postOrderTraverse(print)
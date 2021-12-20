/*
 * @Author: caomd
 * @Date: 2021-12-20 16:07:39
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-20 16:43:06
 */
//level traverse
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
        if (node === null) return node = newNode
        if (node.key > key) {
            node.left = insertNode(node.left, key)
        } else {
            node.right = insertNode(node.right, key)
        }
        return node
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(this.root, callback, this.size)
    }
    this.leverTraverse = function (callback) {
        levelTraverseNode(this.root, callback, this.size)
    }
    var levelTraverseNode = function (node, callback, size) {
        var stack = []
        while (node && node !== null) {
            callback(node.key, size)
            if (node !== null) {
                if (node.left) {
                    stack.push(node.left)
                }
                if (node.right) {
                    stack.push(node.right)
                }
            }
            node = stack.shift()
        }
    }
    var postOrderTraverseNode = function (node, callback, size) {
        var statck = [], stack1 = []
        while (node !== null || statck.length) {
            if (node !== null) {
                statck.push(node)
                stack1.push(node)
                node = node.right
            } else {
                var t = statck.pop()
                node = t.left
            }
        }
        while (stack1.length) {
            node = stack1.pop()
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
                console.log(cache.join(' => '))
                cache = []
            }
        }
    }
)()

var bst = new BinarySearchTree()
bst.insert(10);
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(35);
bst.insert(5);
bst.postOrderTraverse(print)
bst.leverTraverse(print)
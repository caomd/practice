/*
 * @Author: caomd 
 * @Date: 2022-01-09 15:34:34 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-09 16:19:11
 */

var isValidBST = function (bst) {
    return isValid(bst.root, null, null)
}
var isValid = function (node, min, max) {
    if (node === null) return true
    if (min && node.key < min.key) return false
    if (max && node.key > max.key) return false
    return isValid(node.left, min, node) && isValid(node.right, node, max)
}
var bstT = function () {
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
    var preOrderTraverseNode = function (node, callback, size) {
        if (node !== null) {
            callback(node.key, size)
            preOrderTraverseNode(node.left, callback, size)
            preOrderTraverseNode(node.right, callback, size)
        }
    }
}
var OrdinaryTree = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null
    this.size = 0
    this.insert = function (key) {
        var newNode = new Node(key)
        if (this.root === null) {
            this.root = newNode
        } else {
            if (this.root.left === null) {
                this.root.left = newNode
            } else if (this.root.right === null) {
                this.root.right = newNode
            } else if (this.root.left && this.root.right) {
                if (this.root.right.left === null) {
                    this.root.right.left = newNode
                } else if (this.root.right.right === null) {
                    this.root.right.right = newNode
                }
            }
        }
        return this.size++
    }
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNodeWithoutRecursion(this.root, callback, this.size)
    }
    var preOrderTraverseNodeWithoutRecursion = function (node, callback, size) {
        var statck = []
        while (node !== null || statck.length) {
            if (node) {
                callback(node.key, size)
                statck.push(node)
                node = node.left
            } else {
                var t = statck.pop()
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
var tree = new OrdinaryTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(6)
tree.insert(20)
tree.preOrderTraverse(print)
console.log(isValidBST(tree))

var bst = new bstT()
bst.insert(10);
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(35);
bst.insert(5);
bst.preOrderTraverse(print)
console.log(isValidBST(bst))

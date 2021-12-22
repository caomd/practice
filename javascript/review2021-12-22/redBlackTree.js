/*
 * @Author: caomd 
 * @Date: 2021-12-22 13:48:57 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-22 16:46:15
 */
var RedBlackBST = function () {
    var Node = function (key, color, size) {
        this.key = key
        this.left = null
        this.right = null
        this.color = color
        this.size = size
    }
    this.root = null
    var isRed = function (node) {
        if (node === null) return false
        return node.color === 'RED'
    }
    var size = function (node) {
        return node.size
    }
    var rotateLeft = function (node) {
        var temp = node.right
        node.right = temp.left
        temp.left = node
        temp.color = node.color
        node.color = 'RED'
        temp.size = node.size
        node.size = 1 + (node.left && size(node.left)) + (node.right && size(node.right))
        return temp
    }
    var rotateRight = function (node) {
        var temp = node.left
        node.left = temp.right
        temp.right = node
        temp.color = node.color
        node.color = 'RED'
        temp.size = node.size
        node.size = 1 + (node.left && size(node.left)) + (node.right && size(node.right))
        return temp
    }
    var flipColors = function (node) {
        node.color = 'RED'
        node.left.color = 'BLACK'
        node.right.color = 'BLACK'
    }
    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        this.root.color = 'BLACK'
    }
    var insertNode = function (node, key) {
        if (node === null) return new Node(key, 'RED', 1)
        if (node.key > key) {
            node.left = insertNode(node.left, key)
        } else if (node.key < key) {
            node.right = insertNode(node.right, key)
        } else {
            node.key = key
        }
        if (isRed(node.right) && !isRed(node.left)) node = rotateLeft(node)
        if (isRed(node.left) && isRed(node.left.left)) node = rotateRight(node)
        if (isRed(node.left) && isRed(node.right)) flipColors(node)
        node.size = (node.left && size(node.left)) + (node.right && size(node.right)) + 1
        return node
    }
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(this.root, callback, this.root.size)
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
var redbalckBST = new RedBlackBST()
redbalckBST.insert(50);
redbalckBST.insert(30);
redbalckBST.insert(70);
redbalckBST.insert(40);
redbalckBST.insert(10);
redbalckBST.insert(35);
redbalckBST.preOrderTraverse(print)

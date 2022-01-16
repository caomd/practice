/*
 * @Author: caomd 
 * @Date: 2022-01-11 21:14:55 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-13 19:28:50
 */

//thought root is black and then insert a node is red
// rotation situation two red nodes 
// change color 
var RedBlackTree = function () {
    var Node = function (key, color, size) {
        this.key = key
        this.left = null
        this.right = null
        this.color = color
        this.size = size
    }
    this.root = null
    var isRed = function (node) {
        return node.color === 'RED'
    }
    var size = function (node) {
        return node.size
    }
    var flipColor = function (node) {
        if (node !== null) {
            node.color = 'RED'
            node.left.color = 'BLACK'
            node.right.color = 'BLACK'
        }
    }
    var rotationLeft = function (node) {
        var tem = node.left
        node.left = tem.right
        tem.right = node
        tem.size = node.size
        tem.color = node.color
        node.color = 'RED'
        node.size = size(node.left) + size(node.right) + 1
    }
    var rotationRight = function (node) {
        var tem = node.right
        node.right = tem.left
        tem.left = node
        tem.size = node.size
        node.color = 'RED'
        node.size = size(node.left) + size(node.right) + 1
    }
    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        return this.root.color = 'BLACK'
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key, 'RED', 1)
        if (node === null) return node = newNode
        var stack = []
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
            //judge whether rotation or change color
            if (node.right && isRed(node.right) && node.left && !isRed(node.left)) node = rotationLeft(node)
            if (node.left && isRed(node.left) && node.left.left && isRed(node.left.left)) node = rotationRight(node)
            if (node.left && isRed(node.left) && node.right && isRed(node.right)) flipColor(node)
            node.size = (node.left && size(node.left)) + (node.right && size(node.right)) + 1
        }
        return node
    }
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(this.root, callback, this.root.size)
    }
    var preOrderTraverseNode = function (node, callback, size) {
        if (node !== null) {
            callback(node.key, size)
            preOrderTraverseNode(node.left, callback, size)
            preOrderTraverseNode(node.right, callback, size)
        }
    }
}
var print = (
    function () {
        var cache = []
        return function (val, size) {
            console.log(val)
            cache.push(val)
            if (cache.length === size) {
                console.log(cache.join(' -> '))
                cache = []
            }
        }
    }
)()
var redbalckBST = new RedBlackTree()
redbalckBST.insert(50);
redbalckBST.insert(30);
redbalckBST.insert(70);
redbalckBST.insert(40);
redbalckBST.insert(10);
redbalckBST.insert(35);
redbalckBST.preOrderTraverse(print)
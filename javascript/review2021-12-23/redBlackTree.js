/*
 * @Author: caomd 
 * @Date: 2021-12-23 15:24:24 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-23 16:18:14
 */

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
    var rotationRight = function (node) {
        var temp = node.left
        node.left = temp.right
        temp.right = node
        temp.size = node.size
        temp.color = node.color
        node.color = 'RED'
        node.size = size(node.left) + size(node.right) + 1
    }
    var rotationLeft = function (node) {
        var temp = node.right
        node.right = temp.left
        temp.left = node
        temp.size = node.size
        temp.color = node.color
        node.color = 'RED'
        node.size = size(node.left) + size(node.right) + 1
    }
    var flipColor = function (node) {
        if (node !== null) {
            node.color = 'RED'
            node.left.color = 'BLACK'
            node.right.color = 'BLACK'
        }
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(this.root, callback, this.root.size)
    }
    var postOrderTraverseNode = function (node, callback, size) {
        var stack = [], stack1 = []
        while (node !== null || stack.length) {
            if (node !== null) {
                stack.push(node)
                stack1.push(node)
                node = node.right
            } else {
                var t = stack.pop()
                node = t.left
            }
        }
        while (stack1.length) {
            node = stack1.pop()
            callback(node.key, size)
        }
    }

    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        return this.root.color = 'BLACK'
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key, 'RED', 1)
        if (node === null) {
            return newNode
        } else {
            //compare big or small
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
                if (node.right && isRed(node.right) && node.left && !isRed(node.left)) node = rotationLeft(node)
                if (node.left && isRed(node.left) && (node.left.left && isRed(node.left.left))) node = rotationRight(node)
                if (node.left && isRed(node.left) && node.right && isRed(node.right)) flipColor(node)
                node.size = (node.left && size(node.left)) + (node.right && size(node.right)) + 1
            }
            return node
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
var redbalckBST = new RedBlackTree()
redbalckBST.insert(50);
redbalckBST.insert(30);
redbalckBST.insert(70);
redbalckBST.insert(40);
redbalckBST.insert(10);
redbalckBST.insert(35);
redbalckBST.postOrderTraverse(print)
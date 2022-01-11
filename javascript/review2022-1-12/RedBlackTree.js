/*
 * @Author: caomd 
 * @Date: 2022-01-11 21:14:55 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-11 21:42:16
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
    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        this.root.color = 'BLACK'
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key)
        if (node === null) return node = newNode
        var stack = []
        while (node !== null) {
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
        }
        //judge whether rotation or change color
    }
}
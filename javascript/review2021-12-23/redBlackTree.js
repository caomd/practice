/*
 * @Author: caomd 
 * @Date: 2021-12-23 15:24:24 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-23 15:39:58
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
    var isRed = function () {
        return this.color === 'RED'
    }
    var size = function (node) {
        return node.size
    }
    var rotationLL = function (node) {
        var temp = node.left
        node.left = temp.right
        temp.right = node
        temp.size = node.size
        temp.color = node.color
        node.size = size(node.left) + size(node.right) + 1
    }
    var rotationRR = function (node) {
        var temp = node.right
        node.right = temp.left
        temp.left = node
        temp.size = node.size
        temp.color = node.color
        node.size = size(node.left) + size(node.right) + 1
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
            
        }
    }
}
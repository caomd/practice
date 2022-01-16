/*
 * @Author: caomd 
 * @Date: 2022-01-14 21:11:23 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-14 21:28:34
 */

var redBlackTree = function () {
    var Node = function (key, color, size) {
        this.key = key
        this.color = color
        this.size = size
        this.left = null
        this.right = null
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
        if (node !== null) {
            var temp = node.left
            node.left = temp.right
            temp.right = node
            temp.size = node.size
            temp.color = node.color
            node.color = 'RED'
            node.size = size(node.left) + size(node.right) + 1
            return temp
        }
    }
    var rotationRight = function (node) {
        if (node !== null) {
            var temp = node.right
            node.right = temp.left
            temp.left = node
            temp.color = node.color
            temp.size = node.size
            node.color = 'RED'
            node.size = size(node.left) + size(node.right) + 1
            return temp
        }
    }
    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        this.root.color = 'BLACK'
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key, 'RED', 1)
        if (node === null) return newNode
        if (node.key > key) {
            node.left = insertNode(node.left, key)
        } else {
            node.right = insertNode(node.right, key)
        }
        if (node.left && isRed(node.left) && node.right && isRed(node.right)) node = rotationLeft(node)
        if (node.left && isRed(node.left) && node.left.left && isRed(node.left.left)) node = rotationRight(node)
        if (node.left && isRed(node.left) && node.right && isRed(node.right)) flipColor(node)
        node.size = (node.left && size(node.left)) + (node.right && size(node.right)) + 1
        return node
    }
}
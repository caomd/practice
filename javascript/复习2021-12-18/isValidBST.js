/*
 * @Author: caomd 
 * @Date: 2021-12-18 22:18:24 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-18 22:26:36
 */
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
var isValidBST = function (tree) {
    return isValidBSTAss(root, null, null)
}
var isValidBSTAss = function (node, min, max) {
    if (node === null) return true
    if (min !== null && min.key >= node.key) return false
    if (max !== null && max.key <= node.key) return false
    return isValidBSTAss(node.left, min, node) && isValidBSTAss(node.right, node, max)
}
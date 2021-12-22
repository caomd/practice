/*
 * @Author: caomd
 * @Date: 2021-12-22 09:37:18
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-22 10:06:24
 */

//minHeight bfs search util left right all equals null end

var BinarySearchTree = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null
    this.size = 0
    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        return this.size++
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key), stack = []
        if (node === null) {
            node = newNode
        } else {
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
            }
        }
        return node
    }
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(this.root, callback, this.size)
    }
    var inOrderTraverseNode = function (node, callback, size) {
        var stack = []
        while (node !== null || stack.length) {
            if (node !== null) {
                stack.push(node)
                node = node.left
            } else {
                var t = stack.pop()
                callback(t.key, size)
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
var isValidBFS = function (root) {
    return isValid(root, null, null)
}
var isValid = function (node, min, max) {
    if (node === null) return true
    if (min !== null && min.key >= node.key) return false
    if (max !== null && max.key <= node.key) return false
    return isValid(node.left, min, node) && isValid(node.right, node, max)
    return true
}
var bst = new BinarySearchTree()
bst.insert(10);
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(35);
bst.insert(5);
console.log(bst.root)
bst.inOrderTraverse(print)
console.log(isValidBFS(bst.root))
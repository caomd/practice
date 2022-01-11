/*
 * @Author: caomd 
 * @Date: 2022-01-11 20:48:42 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-11 21:14:37
 */
var bst = function () {
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
        var newNode = new Node(key), stack = []
        if (node === null) return node = newNode
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
        return node
    }
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(this.root, callback, size)
    }
    var preOrderTraverseNode = function (node, callback, size) {
        var stack = []
        while (node !== null || stack.length) {
            if (node) {
                stack.push(node)
                callback(node.key, size)
                node = node.left
            } else {
                var ta = stack.pop()
                node = ta.right
            }
        }
    }
}
var isValidBST = function (root) {
    return isValid(root, null, null)
}
var isValid = function (node, min, max) {
    if (node === null) return true
    if (min && min.key > node.key) return false
    if (max && max.key < node.key) return false
    return isValid(node.left, min, node) && isValid(node.right, node, max)
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
var tree = new bst()
tree.insert(10);
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(35);
tree.insert(5);
tree.preOrderTraverse(print)
console.log(isValidBST(tree.root))

var tree2 = new OrdinaryTree()
tree2.insert(10)
tree2.insert(5)
tree2.insert(15)
tree2.insert(6)
tree2.insert(20)
tree2.preOrderTraverse(print)
console.log(isValidBST(tree2.root))
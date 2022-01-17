/*
 * @Author: caomd 
 * @Date: 2022-01-18 08:25:54 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-18 08:47:41
 */

var avlTree = function () {
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
        }
        if (node.key > key) {
            if (node.left) {
                var d = heightNode(node.left) - heightNode(node.right)
                if (d > 1) {
                    if (node.left.key > key) {
                        node = rotationLL(node)
                    } else {
                        node = rotationLR(node)
                    }
                }
            }
        } else {
            if (node.right) {
                var d = heightNode(node.right) - heightNode(node.left)
                if (d > 1) {
                    if (node.right.key > key) {
                        node = rotationRL(node)
                    } else {
                        node = rotationRR(node)
                    }
                }
            }
        }
        return node
    }
    var heightNode = function (node) {
        if (node === null) {
            return -1
        } else {
            return Math.max(heightNode(node.left), heightNode(node.right)) + 1
        }
    }
    var rotationLL = function (node) {
        var temp = node.left
        node.left = temp.right
        temp.right = node
        return temp
    }
    var rotationLR = function (node) {
        node.left = rotationRR(node.left)
        return rotationLL(node)
    }
    var rotationRR = function (node) {
        var temp = node.right
        node.right = temp.left
        temp.left = node
        return temp
    }
    var rotationRL = function (node) {
        node.right = rotationLL(node.right)
        return rotationRR(node)
    }
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(this.root, callback, size)
    }
    var inOrderTraverseNode = function (node, callback, size) {
        var stack = []
        while (node !== null || stack.length) {
            if (node) {
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
var tree = new avlTree()
tree.insert(10);
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(35);
tree.insert(5);
tree.inOrderTraverse(print)
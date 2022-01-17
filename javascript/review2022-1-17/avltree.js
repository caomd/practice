/*
 * @Author: caomd 
 * @Date: 2022-01-17 18:21:30 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-17 18:47:27
 */

var avl = function () {
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
        while (node !== null) {
            if (node) {
                stack.push(node)
                if (node.key > key) {
                    node = node.left
                } else {
                    node = node.right
                }
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
    var heightNode = function (node) {
        if (node === null) {
            return -1
        } else {
            return Math.max(heightNode(node.left), heightNode(node.right)) + 1
        }
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(this.root, callback, size)
    }
    var postOrderTraverseNode = function (node, callback, size) {
        var stack1 = [], stack2 = []
        while (node !== null || stack1.length) {
            if (node) {
                stack1.push(node)
                stack2.push(node)
                node = node.right
            } else {
                var t = stack1.pop()
                node = t.left
            }
        }
        while (stack2.length) {
            node = stack2.pop()
            callback(node.key, size)
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
var avlTree = new avl()
avlTree.insert(50);
avlTree.insert(30);
avlTree.insert(70);
avlTree.insert(40);
avlTree.insert(10);
avlTree.insert(35);
avlTree.postOrderTraverse(print)
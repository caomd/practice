/*
 * @Author: caomd
 * @Date: 2021-12-23 10:31:32
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-23 13:34:44
 */
var BSTree = function () {
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
        var newNode = new Node(key)
        if (node === null) return newNode
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
                var d = heightNode(node.left) - heightNode(node.right)
                if (d > 1) {
                    if (node.key > key) {
                        if (node.left.key > key) {
                            node = rotationLL(node)
                        } else {
                            node = rotationLR(node)
                        }
                    }
                }
            } else {
                parent.right = node
                node = parent
                var d = heightNode(node.right) - heightNode(node.left)
                if (d > 1) {
                    if (node.key > key) {
                        if (node.left.key > key) {
                            node = rotationRL(node)
                        } else {
                            node = rotationRR(node)
                        }
                    }
                }
            }
        }
        return node
    }
    var rotationRR = function (node) {
        var temp = node.right
        node.right = temp.left
        temp.left = node
        return temp
    }
    var rotationLL = function (node) {
        var temp = node.left
        node.left = temp.right
        temp.right = node
        return temp
    }
    var rotationRL = function (node) {
        node.right = rotationLL(node.right)
        return rotationRR(node)
    }
    var rotationLR = function (node) {
        node.left = rotationRR(node.left)
        return rotationLL(node)
    }
    var heightNode = function (node) {
        if (node === null) {
            return -1
        } else {
            return Math.max(heightNode(node.left), heightNode(node.right)) + 1
        }
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(this.root, callback, this.size)
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
//minHeight if left and right === null return depth
var BSTMinHeight = function (tree) {
    if (tree !== null) {
        var root = tree.root
        if (root !== null) {
            var depth = 1
            return calculateMinHeight(root, depth)
        }
    }
}
var calculateMinHeight = function (node, depth) {
    var stack = []
    if (node !== null) stack.push(node)
    while (stack.length) {
        var size = stack.length
        for (var i = 0; i < size; i++) {
            node = stack.shift()
            if (node.left === null && node.right === null) return depth
            if (node.left !== null) {
                stack.push(node.left)
            }
            if (node.right !== null) {
                stack.push(node.right)
            }
        }
        depth++
    }
    return depth
}

var bst = new BSTree()
bst.insert(10);
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(35);
bst.insert(5);
console.log(bst.root)
bst.postOrderTraverse(print)
console.log(BSTMinHeight(bst))

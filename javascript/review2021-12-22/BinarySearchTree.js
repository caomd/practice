/*
 * @Author: caomd 
 * @Date: 2021-12-22 17:20:40 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-22 17:38:11
 */
var BinarySearchTree = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null, size = 0
    this.insert = function (key) {
        root = insertNode(root, key)
        return size++
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key)
        if (node === null) {
            node = newNode
        } else {
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
                    //judge
                    var d = heightNode(node.left) - heightNode(node.right)
                    if (d > 1) {
                        if (node.left && node.left.key > key) {
                            //ll
                            node = rotationLL(node)
                        } else {
                            node = rotationLR(node)
                        }
                    }
                } else {
                    parent.right = node
                    node = parent
                    var d = heightNode(node.right) - heightNode(node.left)
                    if (d > 1) {
                        if (node.right && node.right.key > key) {
                            //rl
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
    var rotationLL = function (node) {
        var temp = node.left
        node.left = temp.right
        temp.right = node
        return temp
    }
    var rotationRR = function (node) {
        var temp = node.right
        node.right = temp.left
        temp.left = node
        return temp
    }
    var rotationLR = function (node) {
        node.left = rotationRR(node.left)
        return rotationLL(node)
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
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback, size)
    }
    var preOrderTraverseNode = function (node, callback, size) {
        var stack = []
        while (node !== null || stack.length) {
            if (node !== null) {
                stack.push(node)
                callback(node.key, size)
                node = node.left
            } else {
                var t = stack.pop()
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
var bst = new BinarySearchTree()
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(10);
bst.insert(35);
bst.preOrderTraverse(print)
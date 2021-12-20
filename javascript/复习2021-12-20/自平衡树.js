/*
 * @Author: caomd 
 * @Date: 2021-12-20 15:30:48 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-20 16:02:52
 */
var BinarySearchTree = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null
    this.size = null
    this.insert = function (key) {
        this.root = insertNode(this.root, key)
        return this.size++
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key)
        if (node === null) {
            node = newNode
        } else {
            if (node.key > key) {
                node.left = insertNode(node.left, key)
                //left
                if (node.left) {
                    var b = heightNode(node.left) - heightNode(node.right)
                    if (b > 1) {
                        //comparet
                        if (node.left.key > key) {
                            rotationLL(node)
                        } else {
                            rotationLR(node)
                        }
                    }
                }
            } else {
                node.right = insertNode(node.right, key)
                if (node.right) {
                    var b = heightNode(node.right) - heightNode(node.left)
                    if (b > 1) {
                        if (node.right.key > key) {
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
    var rotationRL = function (node) {
        node.right = rotationLL(node.right)
        return rotationRR(node)
    }
    var rotationLR = function (node) {
        node.left = rotationRR(node.left)
        return rotationLL(node)
    }
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(this.root, callback, this.size)
    }
    var heightNode = function (node) {
        if (node === null) {
            return -1
        } else {
            return Math.max(heightNode(node.left), heightNode(node.right)) + 1
        }
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
            if (cache.length === size) {
                console.log(cache.join(' => '))
                cache = []
            }
        }
    }
)()
var bst = new BinarySearchTree()
bst.insert(10);
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(35);
bst.inOrderTraverse(print)
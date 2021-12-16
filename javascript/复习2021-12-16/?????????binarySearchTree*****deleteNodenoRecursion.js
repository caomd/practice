/*
 * @Author: caomd 
 * @Date: 2021-12-16 20:56:52 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-16 22:39:13
 */

//非递归查找
var BinarySearchTree = function () {
    var self = this
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null
    this.size = 0
    this.insert = function (key) {
        this.root = insetNode(this.root, key)
        return this.size++
    }
    var insetNode = function (node, key) {
        var newNode = new Node(key)
        if (node === null) {
            node = newNode
        } else {
            if (node.key > key) {
                node.left = insetNode(node.left, key)
            } else {
                node.right = insetNode(node.right, key)
            }
        }
        return node
    }
    this.find = function (node, key) {
        if (node !== null) {
            while (node !== null) {
                if (node.key > key) {
                    //left tree
                    node = node.left
                } else if (node.key < key) {
                    node = node.right
                } else if (node.key === key) {
                    return node
                }
            }
            return false
        }
    }
    this.remove = function (key) {
        this.root = removeNode(this.root, key)
        return this.size--
    }
    var removeNode = function (node, key) {
        var parent = node, stack = []
        while (node !== null || stack.length) {
            stack.push(node)
            if (node.key > key) {
                node = node.left
            } else if (node.key < key) {
                node = node.right
            } else if (node.key === key) {
                //find successor
                if (node.left === null && node.right === null) {
                    node = null
                } else if (node.left === null && node.right !== null) {
                    node = node.right
                } else if (node.left !== null && node.right === null) {
                    node = node.left
                } else {
                    //has left and right
                    //minRightNode
                    var minRightNode = findMinRight(node.right)
                    node.key = minRightNode.key
                    node.right = removeNode(node.right, minRightNode.key)
                }
                // if (parent.key > key) {
                //     //left
                //     var node = node.left
                //     while (node) {
                //         if (node.key > key) {
                //             node = node.left
                //         }
                //     }
                // } else {
                //     //right
                // }
            }
        }
        return false
    }
    var findMinRight = function (node) {
        if (node !== null) {
            var current = node
            while (current.left) {
                current = current.left
            }
            return current
        }
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(this.root, callback, this.size)
    }
    //not recursion
    var postOrderTraverseNode = function (node, callback, size) {
        var stack = [], stack2 = []
        while (node !== null || stack.length) {
            if (node !== null) {
                stack.push(node)
                stack2.push(node)
                node = node.right
            } else {
                var t = stack.pop()
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
                console.log(cache.join(' => '))
                cache = []
            }
        }
    }
)()
var tree = new BinarySearchTree()
tree.insert(10);
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(35);
tree.insert(4);
tree.insert(6);
tree.postOrderTraverse(print)
console.log(tree.find(tree.root, 66))
tree.remove(30)
tree.postOrderTraverse(print)
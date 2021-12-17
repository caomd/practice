/*
 * @Author: caomd
 * @Date: 2021-12-17 08:35:16
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-17 11:16:26
 */
//binarySearchTree notrecursiontraverse and delete find insert
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
        var newNode = new Node(key), stack = []
        if (node === null) return newNode
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
            parent = stack.pop()
            if (parent.key > key) {
                parent.left = node
            } else {
                parent.right = node
            }
            node = parent
        }
        return parent
    }
    this.find = function (key) {
        if (this.root !== null) {
            var node = this.root
            while (node !== null) {
                if (node.key > key) {
                    node = node.left
                } else if (node.key < key) {
                    node = node.right
                } else {
                    return true
                }
            }
            return false
        }
    }
    this.deleteNode = function (key) {
        this.root = deleteNodeUnRecursion(this.root, key)
        return this.size--
    }
    var deleteNodeUnRecursion = function (node, key) {
        var stack = []
        while (node !== null) {
            stack.push(node)
            if (node.key > key) {
                node = node.left
            } else if (node.key < key) {
                node = node.right
            } else {
                //delete
                if (node.left === null && node.right === null) {
                    node = null
                } else if (node.left === null && node.right !== null) {
                    node = node.right
                } else if (node.right === null && node.left !== null) {
                    node = node.left
                } else {
                    //find rightmin
                    var minRight = findMinRight(node.right)
                    node.key = minRight.key
                    node.right = deleteNodeUnRecursion(node.right, minRight.key)
                }
                var parent
                while (stack.length) {
                    parent = stack.pop()
                    if (parent.key > key) {
                        parent.left = node
                        node = parent
                    } else if (parent.key < key) {
                        parent.right = node
                        node = parent
                    } else {
                        parent = node
                        node = parent
                    }
                }
                return parent
            }
        }
    }
    var findMinRight = function (node) {
        while (node !== null) {
            if (node.left) {
                node = node.left
            }
            return node
        }
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNodeUnRecursion(this.root, callback, this.size)
    }
    var postOrderTraverseNodeUnRecursion = function (node, callback, size) {
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
            if (cache.length === size) {
                console.log(cache.join(' => '))
                cache = []
            }
        }
    }
)()
var tree1 = new BinarySearchTree()
tree1.insert(10);
tree1.insert(50);
tree1.insert(30);
tree1.insert(70);
tree1.insert(40);
tree1.insert(35);
tree1.insert(4);
tree1.postOrderTraverse(print)
console.log(tree1.find(4))
tree1.deleteNode(30)
tree1.postOrderTraverse(print)
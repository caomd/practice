/*
 * @Author: caomd 
 * @Date: 2022-01-20 10:03:36 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-20 10:40:17
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
            } else {
                parent.right = node
            }
            node = parent
        }
        return node
    }
    this.min = function () {
        if (this.root !== null) {
            var node = this.root
            while (node.left) {
                node = node.left
            }
            return node
        }
    }
    this.max = function () {
        if (this.root !== null) {
            var node = this.root
            while (node.right) {
                node = node.right
            }
            return node
        }
    }
    this.findNode = function (key) {
        return find(this.root, key)
    }
    var find = function (node, key) {
        while (node !== null) {
            if (node.key > key) {
                node = node.left
            } else if (node.key < key) {
                node = node.right
            } else {
                console.log('find the node')
                return node
            }
        }
        throw new Error('not found the node')
    }
    this.removeNode = function (key) {
        this.root = remove(this.root, key)
        return size--
    }
    var remove = function (node, key) {
        var stack = []
        while (node !== null) {
            stack.push(node)
            if (node.key > key) {
                node = node.left
            } else if (node.key < key) {
                node = node.right
            } else {
                if (node.left === null && node.right === null) {
                    node = null
                } else if (node.right === null && node.left !== null) {
                    node = node.left
                } else if (node.left === null && node.right !== null) {
                    node = node.right
                } else {
                    //find right min Node
                    var minRightNode = findRightNodeMin(node.right)
                    node.key = minRightNode.key
                    node.right = remove(node.right, minRightNode.key)
                    while (stack.length) {
                        var parent = stack.pop()
                        node = parent
                    }
                    return node
                }
            }
        }
        while (stack.length) {
            var parent = stack.pop()
            if (parent.key > key) {
                parent.left = node
            } else if (parent.key < key) {
                parent.right = node
            } else {
                parent = node
            }
            node = parent
        }
        return node
    }
    var findRightNodeMin = function (node) {
        while (node !== null) {
            if (node.left) {
                node = node.left
            }
            return node
        }
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
            if (cache.length === size) {
                console.log(cache.join(' -> '))
                cache = []
            }
        }
    }
)()
var tree = new bst()
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(10);
tree.insert(35);
tree.preOrderTraverse(print)
console.log(tree.max())
console.log(tree.min())
// console.log(tree.findNode(5))
console.log(tree.findNode(35))
// tree.removeNode(70)
// tree.removeNode(40)
tree.removeNode(30)
tree.preOrderTraverse(print)

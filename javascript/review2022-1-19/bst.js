/*
 * @Author: caomd 
 * @Date: 2022-01-19 08:01:12 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-19 09:30:50
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
        if (node.key > key) {
            node.left = insertNode(node.left, key)
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
            node.right = insertNode(node.right, key)
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
    this.findNode = function (key) {
        findKey(this.root, key)
    }
    var findKey = function (node, key) {
        if (node !== null) {
            if (node.key > key) {
                return findKey(node.left, key)
            } else if (node.key === key) {
                console.log(true, 'find the same key Node' + key)
                return true
            } else {
                return findKey(node.right, key)
            }
        }
        throw new Error('not found equals num')
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
                } else if (node.left === null && node.right !== null) {
                    node = node.right
                } else if (node.right === null && node.left !== null) {
                    node = node.left
                } else {
                    var minRightNode = findMinNode(node.right)
                    node.key = minRightNode.key
                    node.right = remove(node.right, minRightNode.key)
                    while (stack.length) {
                        var parent = stack.pop()
                        node = parent
                    }
                    return node
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
        }
    }
    this.min = function () {
        if (this.root !== null) {
            var node = this.root
            while (node.left) {
                node = node.left
            }
            console.log(node)
            return node
        }
    }
    this.max = function () {
        if (this.root !== null) {
            var node = this.root
            while (node.right) {
                node = node.right
            }
            console.log(node)
            return node
        }
    }
    var findMinNode = function (node) {
        while (node.left !== null) {
            node = node.left
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
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(this.root, callback, size)
    }
    var postOrderTraverseNode = function (node, callback, size) {
        var stack = [], stack2 = []
        while (node !== null || stack.length) {
            if (node) {
                stack.push(node)
                stack2.push(node)
                node = node.right
            } else {
                var temp = stack.pop()
                node = temp.left
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
            console.log(val)
            cache.push(val)
            if (cache.length === size) {
                console.log(cache.join(' -> '))
                cache = []
            }
        }
    }
)()
var bstTree = new bst()
bstTree.insert(10);
bstTree.insert(50);
bstTree.insert(30);
bstTree.insert(70);
bstTree.insert(40);
bstTree.insert(35);
bstTree.insert(5);
bstTree.postOrderTraverse(print)
bstTree.findNode(5)
// bstTree.findNode(4)
// bstTree.removeNode(5)
// bstTree.removeNode(50)
bstTree.removeNode(30)
bstTree.postOrderTraverse(print)
bstTree.min()
bstTree.max()
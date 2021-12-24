/*
 * @Author: caomd 
 * @Date: 2021-12-24 10:22:35 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-24 15:19:12
 */
var BST = function () {
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
            } else {
                parent.right = node
                node = parent
            }
        }
        return node
    }
    this.levelTraver = function (callback) {
        levelTraverseNode(this.root, callback, this.size)
    }
    var levelTraverseNode = function (node, callback, size) {
        if (node === null) return
        var stack = []
        stack.push(node)
        while (stack.length) {
            var current = stack.shift()
            if (current === null) continue
            callback(current.key, size)
            stack.push(current.left)
            stack.push(current.right)
        }

    }
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(this.root, callback, this.size)
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
    this.remove = function (key) {
        this.root = removeNode(this.root, key)
        return this.size--
    }
    var removeNode = function (node, key) {
        var stack = []
        if (node === null) return null
        while (node !== null || stack.length) {
            if (node !== null) {
                stack.push(node)
                if (node.key > key) {
                    node = node.left
                } else if (node.key < key) {
                    node = node.right
                } else {
                    //judge has child node
                    if (node.left === null && node.right === null) {
                        node = null
                    } else if (node.right === null && node.left !== null) {
                        node = node.left
                    } else if (node.right !== null && node.left !== null) {
                        node = node.right
                    } else {
                        var minRight = findMinRight(node.right)
                        node.key = minRight.key
                        node.right = removeNode(node.right, minRight.key)
                    }
                    stack.pop()
                    while (stack.length) {
                        var parent = stack.pop()
                        if (parent.key > key) {
                            parent.left = node
                            node = parent
                        } else if (parent.key < key) {
                            parent.right = node
                            node = parent
                        }
                    }
                    return node
                }
            }
        }
    }
    var findMinRight = function (node) {
        if (node !== null) {
            while (node.left !== null) {
                node = node.left
            }
            return node
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
var isValidBST = function (root) {
    if (root !== null) {
        return isValid(root, null, null)
    }
}
var isValid = function (node, min, max) {
    if (node === null) return true
    if (min && min.key > node.key) return false
    if (max && max.key < node.key) return false
    return isValid(node.left, min, node) && isValid(node.right, node, max)
}
//perfect tree sumnodes and tree heights exponent
var countNodes = function (root) {
    var height = 0
    while (root !== null) {
        root = root.left
        height++
    }
    return Math.pow(2, height) - 1
}
//complete tree
var countNodesComplete = function (node) {
    var l = node, r = node, hl = 0, hr = 0
    while (l !== null) {
        l = l.left
        hl++
    }
    while (r !== null) {
        r = r.right
        hr++
    }
    if (hl === hr) {
        return Math.pow(2, hl) - 1
    }
    //if different ordinate 
    return countNodesComplete(node.left) + countNodesComplete(node.right)
}
var bst = new BST()
bst.insert(10);
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(35);
bst.insert(5);
bst.inOrderTraverse(print)
bst.levelTraver(print)
console.log(isValidBST(bst.root))
bst.remove(30)
bst.inOrderTraverse(print)
console.log(countNodes(bst.root))
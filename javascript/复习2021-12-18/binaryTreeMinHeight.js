/*
 * @Author: caomd 
 * @Date: 2021-12-20 10:08:55 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-20 12:28:35
 */
var BinarySearchTree = function () {
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
        var stack = [], newNode = new Node(key)
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
            var parent = stack.pop()
            if (parent.key > key) {
                parent.left = node
                node = parent
            } else {
                parent.right = node
                node = parent
            }
        }
        return parent
    }
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(this.root, callback, this.size)
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
    this.remove = function (key) {
        this.root = removeNode(this.root, key)
        return this.size--
    }
    var removeNode = function (node, key) {
        var stack = []
        while (node !== null) {
            if (node !== null) {
                stack.push(node)
                if (node.key > key) {
                    node = node.left
                } else if (node.key < key) {
                    node = node.right
                } else {
                    //remove node
                    if (node.left === null && node.right === null) {
                        node = null
                    } else if (node.left === null && node.right !== null) {
                        node = node.right
                    } else if (node.right === null && node.left !== null) {
                        node = node.left
                    } else {
                        //find right minRight
                        var minRight = findMinRight(node.right)
                        node.key = minRight.key
                        node.right = removeNode(minRight.key)
                    }
                    //return correct data
                    var parent
                    while (stack.length) {
                        parent = stack.pop()
                        if (parent.key > key) {
                            parent.left = node
                        } else if (parent.key < key) {
                            parent.right = node
                        } else {
                            parent = node
                        }
                        node = parent

                    }
                    return parent
                }
            }
        }
    }
    var findMinRight = function (node) {
        var stack = []
        while (node !== null) {
            stack.push(node)
            node = node.left
        }
        return stack.pop()
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
//FIFO 
var binaryTreeMinHeight = function (tree) {
    if (tree !== null) {
        if (tree.root !== null) {
            var height = 1
            height = findMinHeight(tree.root, height)
            console.log("minHeight:", height)
        }
    }
}

var isValidBST = function (tree) {
    //rule left < root < right
    if (tree !== null) {
        return judgeValid(tree.root, null, null)
    }
}
var judgeValid = function (node, min, max) {
    if (node !== null) {
        if (min !== null && min.key > node.key) return false
        if (max !== null && node.key > max.key) return false
        if (node.left) {
            node = node.left
            judgeValid(node, node.left, max)
        }
        if (node.right) {
            node = node.right
            judgeValid(node, min, node.right)
        }
        return true
    }
}

var findMinHeight = function (node, height) {
    var stack = []
    if (node !== null) {
        stack.push(node)
        while (stack.length) {
            for (var i = 0; i < stack.length; i++) {
                var node = stack.shift()
                if (node.left === null && node.right === null) return height
                if (node.left !== null) {
                    stack.push(node.left)
                }
                if (node.right !== null) {
                    stack.push(node.right)
                }
            }
            height++
        }
    }
}

//test
var bst = new BinarySearchTree()
bst.insert(10);
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(35);
bst.preOrderTraverse(print)
// bst.remove(30)
bst.preOrderTraverse(print)
binaryTreeMinHeight(bst)
console.log(isValidBST(bst))

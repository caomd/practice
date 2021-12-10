/*
 * @Author: caomd
 * @Date: 2021-12-10 09:32:00
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-10 21:01:59
 */
var Stack = function () {
    var items = [], size = 0
    this.push = function (element) {
        items.push(element)
        return size++
    }
    this.pop = function (element) {
        size--
        return items.pop()
    }
    this.isEmpty = function () {
        return size === 0
    }
}
//binarySearchTree
var BinarySearchTree = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.size = 0
    this.root = null
    this.insert = function (key) {
        if (!this.root) {
            var node = new Node(key)
            this.root = node
        } else {
            insertNode(this.root, key)
        }
        return this.size++
    }
    //先序遍历
    this.preOrderTraverse = function (callback) {
        if (this.root !== null) {
            preOrderTraverseNode(this.root, callback, this.size)
        }
    }
    var preOrderTraverseNode = function (node, callback, size) {
        if (node !== null) {
            //print root key
            var stack = new Stack()
            stack.push(node)
            while (!stack.isEmpty()) {
                if (node !== null) {
                    callback(node.key, size)
                    while (node.left !== null) {
                        callback(node.left.key, size)
                        stack.push(node.left)
                        node = node.left
                    }
                    while (node.right !== null) {
                        callback(node.right.key, size)
                        stack.push(node.right)
                        node = node.right
                    }
                }
                node = stack.pop().right
                if (node !== null && stack.isEmpty()) {
                    stack.push(node)
                }
            }
        }
    }
    var insertNode = function (node, key) {
        if (node !== null) {
            var newNode = new Node(key)
            //judge
            if (node.key > key) {
                //left
                if (node.left === null) {
                    return node.left = newNode
                }
                insertNode(node.left, key)
            } else {
                if (node.right === null) {
                    return node.right = newNode
                }
                insertNode(node.right, key)
            }
        }
    }
    this.remove = function (element) {
        if (this.root !== null) {
            this.root = removeNode(this.root, element)
            this.size--
        }
    }
    var removeNode = function (node, key) {
        if (node !== null) {
            if (node.key > key) {
                //left tree
                if (node.left !== null) {
                    node.left = removeNode(node.left, key)
                }
            } else if (node.key < key) {
                //right tree
                node.right = removeNode(node.right, key)
            } else {
                //judge left and rigth
                if (node.left === null && node.right === null) {
                    node = null
                } else if (node.left === null && node.right !== null) {
                    node = node.right
                } else if (node.right === null && node.left !== null) {
                    node = node.left
                } else {
                    //select right tree min Node
                    var minRightNode = find(node.right)
                    // use minNode replace remove node and from rightTree remove minnode
                    node.key = minRightNode.key
                    node.right = removeNode(node.right, minRightNode.key)
                }
            }
            return node
        }
    }
    var find = function (node) {
        if (node !== null) {
            while (node.left) {
                node = node.left
            }
            return node
        }
    }
    this.findNode = function (key) {
        if (this.root !== null) {
            return findNodeFn(this.root, key)
        }
    }
    var findNodeFn = function (node, key) {
        if (node !== null) {
            if (node.key > key) {
                //left tree
                if (node.left !== null) {
                    return findNodeFn(node.left, key)
                } else {
                    return false
                }
            } else if (node.key < key) {
                if (node.right !== null) {
                    return findNodeFn(node.right, key)
                } else {
                    return false
                }
            } else {
                return node
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
                console.log(cache.join('   '))
                cache = []
            }
        }
    }
)()
var tree = new BinarySearchTree()
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(10);
tree.insert(35);
tree.preOrderTraverse(print)
tree.remove(30)
tree.preOrderTraverse(print)
console.log(tree.size)
console.log(tree.findNode(35))

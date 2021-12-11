/*
 * @Author: caomd
 * @Date: 2021-12-11 10:31:53
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-11 11:31:14
 */
//bst
var BinarySearchTree = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null, size = 0
    this.insert = function (key) {
        // if (root === null) {
        //     var node = new Node(key)
        //     root = node
        // } else {
        //     root = insertNode(root, key)
        // }
        root = insertNode(root, key)
        return size++
    }
    var insertNode = function (node, key) {
        var newNode = new Node(key)
        if (node !== null) {
            if (node.key > key) {
                //left tree
                // if (node.left === null) {
                //     return node.left = newNode
                // }
                node.left = insertNode(node.left, key)
            } else {
                // if (node.right === null) {
                //     return node.right = newNode
                // }
                node.right = insertNode(node.right, key)
            }
        } else {
            node = newNode
        }
        return node
    }
    //inOrderTraver
    this.inOrderTraver = function (callback) {
        if (root !== null) {
            inOrderTraverNode(root, callback, size)
        }
    }
    var inOrderTraverNode = function (node, callback, size) {
        //left root right
        if (node !== null) {
            inOrderTraverNode(node.left, callback, size)
            callback(node.key, size)
            inOrderTraverNode(node.right, callback, size)
        }
    }
    this.find = function (key) {
        if (root !== null) {
            return findNode(root, key)
        }
    }
    var findNode = function (node, key) {
        if (node !== null) {
            if (node.key > key) {
                //left 
                return findNode(node.left, key)
            } else if (node.key < key) {
                return findNode(node.right, key)
            } else if (node.key === key) {
                return node
            }
        }
        else {
            throw new Error('not found the node')
        }
    }
    this.remove = function (key) {
        if (root !== null) {
            root = removeNode(root, key)
            return size--
        }
    }
    var removeNode = function (node, key) {
        if (node !== null) {
            if (node.key > key) {
                //left
                node.left = removeNode(node.left, key)
            } else if (node.key < key) {
                node.right = removeNode(node.right, key)
            } else {
                //jduge childnode
                if (node.left === null && node.right === null) {
                    node = null
                } else if (node.left === null && node.right !== null) {
                    node = node.right
                } else if (node.right === null && node.left !== null) {
                    node = node.left
                } else {
                    //left and right all not equals null
                    //select right tree minNode replace remove node
                    var minRight = findMinRight(node.right)
                    node.key = minRight.key
                    //delete from node.right
                    node.right = removeNode(node.right, minRight.key)
                }
            }
            return node
        } else {
            throw new Error('not fount remove key')
        }
    }
    var findMinRight = function (node) {
        // while (node.left !== null) {
        //     node = node.left
        // }
        // return node
        //recursion
        if (node.left !== null) {
            return findMinRight(node.left)
        }
        return node
    }
}
var print = (
    function () {
        var cache = []
        return function (val, size) {
            cache.push(val)
            if (cache.length === size) {
                console.log(cache.join('  '))
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
bst.inOrderTraver(print)
console.log(bst.find(30))
// console.log(bst.find(90))
bst.remove(30)
bst.inOrderTraver(print)
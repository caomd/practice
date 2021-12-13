/*
 * @Author: caomd 
 * @Date: 2021-12-12 18:03:19 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-13 10:46:00
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
        if (node !== null) {
            if (node.key > key) {
                //left
                node.left = insertNode(node.left, key)
            } else {
                node.right = insertNode(node.right, key)
            }
        } else {
            node = newNode
        }
        return node
    }
    this.getRoot = function () {
        return root
    }
    this.preOrderTraverse = function (callback) {
        if (root !== null) {
            preOrderTraverseNode(root, callback, size)
        }
    }
    var preOrderTraverseNode = function (node, callback, size) {
        if (node !== null) {
            callback(node.key, size)
            preOrderTraverseNode(node.left, callback, size)
            preOrderTraverseNode(node.right, callback, size)
        }
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
var getRoot = function (tree1, tree2) {
    var root1 = tree1.getRoot()
    var root2 = tree2.getRoot()
    return HasSubTree(root1, root2)
}
var HasSubTree = function (root1, root2) {
    var result = false
    if (root1 !== null && root2 !== null) {
        if (root1.key === root2.key) {
            return DoesTree1HaveTree2(root1, root2)
        }
        if (!result) {
            result = HasSubTree(root1.left, root2)
        }
        if (!result) {
            result = HasSubTree(root1.right, root2)
        }
    }
    return result
}
var DoesTree1HaveTree2 = function (r1, r2) {
    if (r2 === null) {
        return true
    }
    if (r1 === null) {
        return false
    }
    if (r1.key !== r2.key) {
        return false
    }
    return DoesTree1HaveTree2(r1.left, r2.left) && DoesTree1HaveTree2(r1.right, r2.right)
}
var tree = new BinarySearchTree()
tree.insert(10);
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(35);
tree.preOrderTraverse(print)
console.log(tree.getRoot())
var tree2 = new BinarySearchTree()
tree2.insert(30);
tree2.insert(40);
tree2.insert(35);
tree2.preOrderTraverse(print)
console.log(getRoot(tree, tree2))
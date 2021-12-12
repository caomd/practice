/*
 * @Author: caomd 
 * @Date: 2021-12-12 18:03:19 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-12 19:06:21
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
var hasSubTree = function (tree1, tree2) {
    //root 
    var root1 = tree1.getRoot()
    var root2 = tree2.getRoot()

    if (root1 === null || root2 === null) {
        return false
    } else if (root1 === null && root2 === null) {
        return true
    } else {
        return tree1HasTree2(root1, root2)
    }
    //left
    //right
}
var tree1HasTree2 = function (root1, root2) {
    var current1 = root1, current2 = root2
    if (current1.left) {
        return tree1HasTree2(current1.left, current2)
    } else if (current1.right) {
        return tree1HasTree2(current1.right, current2)
    } else {
        return false
    }
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
tree2.insert(70);
tree2.insert(40);
tree2.preOrderTraverse(print)
console.log(hasSubTree(tree, tree2))
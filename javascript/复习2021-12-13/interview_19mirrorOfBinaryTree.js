/*
 * @Author: caomd
 * @Date: 2021-12-13 11:01:36
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-13 14:59:55
 */

// tree traverse algorithm
//thinking draw picture and see the mirror tree has same root and switch left tree and right tree
//step one 1 create a binary tree
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
        var newNode = new Node(key)
        if (node !== null) {
            //left or right
            if (node.key > key) {
                node.left = insertNode(node.left, key)
            } else {
                node.right = insertNode(node.right, key)
            }
        } else {
            node = newNode
        }
        return node
    }
    this.postOrderTraver = function (callback) {
        postOrderTraverNode(this.root, callback, this.size)
    }
    var postOrderTraverNode = function (node, callback, size) {
        var stack = [], stack2 = []
        while (node !== null || stack.length) {
            if (node) {
                stack.push(node)
                stack2.push(node)
                node = node.right
            } else {
                var b = stack.pop()
                node = b.left
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
            if (cache.length === size) {
                console.log(cache.join('  '))
                cache = []
            }
        }
    }
)()
//change left and right node
var MirrorOfBinaryTree = function (tree) {
    //recursion 
    if (tree !== null) {
        var root = tree.root
        //unrecursivily
        switchMirrorTreeNodeUnRecursivily(root)
        // return root = switchTreeLeftAndRightNode(root)
    }
}
var switchTreeLeftAndRightNode = function (node) {
    if (node !== null) {
        node.left = switchTreeLeftAndRightNode(node.left)
        node.right = switchTreeLeftAndRightNode(node.right)
        if (node.left || node.right) {
            var tem = node.left
            node.left = node.right
            node.right = tem
        }
        return node
    } else {
        return null
    }
}
var switchMirrorTreeNodeUnRecursivily = function (node) {
    var stack = []
    while (node !== null || stack.length) {
        if (node) {
            stack.push(node)
            node = node.left
        } else {
            var node = stack.pop()
            if (node.left || node.right) {
                var tem = node.left
                node.left = node.right
                node.right = tem
                node = node.left
            } else {
                node = node.right
            }
        }
    }
}

var tree = new BinarySearchTree()
tree.insert(10);
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(35);
tree.postOrderTraver(print)
console.log(MirrorOfBinaryTree(tree))
tree.postOrderTraver(print)

// var tem = node.left
// node.left = node.right
// node.right = tem
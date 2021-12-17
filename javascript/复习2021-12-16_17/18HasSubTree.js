/*
 * @Author: caomd
 * @Date: 2021-12-17 14:59:01
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-17 15:39:15
 */
//judge one tree has other tree  compare root if same compare left and right and uses recursion or different judge smalll one wheather in bigger left or bigger right
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
        var stack = []
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
        return node
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
var HasSubTree = function (tree1, tree2) {
    if (tree1 === null) return false
    else if (tree2 === null) return true
    else if (tree1 === null && tree2 === null) {
        return false
    } else {
        return Tree1HasSubTree2(tree1.root, tree2.root)
    }
}
var Tree1HasSubTree2 = function (root1, root2) {
    if (root1 === null && root2 === null) return true
    else if (root1 !== null && root2 === null) return true
    else if (root1 === null && root2 !== null) return false
    else {
        if (root1.key === root2.key) {
            return Tree1HasSubTree2(root1.left, root2.left) && Tree1HasSubTree2(root1.right, root2.right)
        } else {
            return Tree1HasSubTree2(root1.left, root2) || Tree1HasSubTree2(root1.right, root2)
        }
    }
}


//
var bst = new BinarySearchTree()
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(40);
bst.insert(10);
bst.insert(35);
bst.insert(39);
bst.insert(9);
bst.insert(65)
bst.insert(60)
bst.preOrderTraverse(print)
var bst1 = new BinarySearchTree()
bst1.insert(30);
bst1.insert(10);
bst1.insert(40)
bst1.insert(9)
bst1.insert(65)
// bst1.insert(35);
// bst1.insert(39);
bst1.preOrderTraverse(print)
console.log(HasSubTree(bst, bst1))
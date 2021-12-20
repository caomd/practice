/*
 * @Author: caomd
 * @Date: 2021-12-20 19:00:26
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-20 19:25:48
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
        var newNode = new Node(key)
        if (node === null) {
            node = newNode
        } else {
            if (node.key > key) {
                node.left = insertNode(node.left, key)
            } else {
                node.right = insertNode(node.right, key)
            }
        }
        return node
    }
    //levelTraverse
    this.levelOrderTraverse = function (callback) {
        var stack = []
        if (this.root !== null) {
            var node = this.root
            stack.push(node)
            while (stack.length) {
                node = stack.shift()
                callback(node.key, this.size)
                if (node.left) {
                    stack.push(node.left)
                }
                if (node.right) {
                    stack.push(node.right)
                }
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
                console.log(cache.join(' -> '))
                cache = []
            }
        }
    }
)()
var tree = new BinarySearchTree()
tree.insert(10);
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(35);
tree.insert(4);
tree.insert(6);
tree.levelOrderTraverse(print)





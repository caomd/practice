/*
 * @Author: caomd 
 * @Date: 2021-12-03 06:50:38 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-03 07:09:10
 */
var BinarySearchTree = function () {
    var root = null, size = 0,
        Node = function (key) {
            this.key = key
            this.left = null
            this.right = null
        }
    this.insert = function (key) {
        var newNode = new Node(key)
        if (!root) {
            root = newNode
            return size++
        }
        insertNode(root, newNode)
        size++
    }
    var insertNode = function (node, newNode) {
        if (node === null) {
            return node = newNode
        }
        if (node.key < newNode.key) {
            //插入右子树
            if (node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        } else {
            //插入左子树
            if (node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        }
    }
    //中序遍历 左根右
    this.inOrderTranvers = function (callback) {
        inOrderTranversNode(root, callback, size)
    }
    var inOrderTranversNode = function (node, cb, size) {
        if (node !== null) {
            inOrderTranversNode(node.left, cb, size)
            cb(node.key, size)
            inOrderTranversNode(node.right, cb, size)
        }
    }
}
var print = (
    function () {
        var cache = []
        return function (val, size) {
            cache.push(val)
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
tree.inOrderTranvers(print)
/*
 * @Author: caomd
 * @Date: 2021-12-04 18:04:56
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-04 19:25:13
 */
//自平衡树
var AVLTree = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null, size = 0
    this.insert = function (key) {
        var newNode = new Node(key)
        if (!root) {
            root = newNode
            return size++
        }
        root = insertNode(root, newNode)
        size++
    }
    var rotationRR = function (node) {
        //右失衡
        var temp = node.right
        node.right = temp.left
        temp.left = node
        return temp
    }
    var rotationLL = function (node) {
        //左失衡
        var temp = node.left
        node.left = temp.right
        temp.right = node
        return temp
    }
    var rotationLR = function (node) {
        //先插入左边然后右边 先左转后右转
        node.left = rotationRR(node.left)
        return rotationLL(node)
    }
    var rotationRL = function (node) {
        //先插入右边然后左边 先右转后左转
        node.right = rotationLL(node.right)
        return rotationRR(node)
    }
    var insertNode = function (node, newNode) {
        if (node === null) {
            node = newNode
        } else {
            //判断插入左子树还是右子树
            if (node.key > newNode.key) {
                //左
                if (node.left === null) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
                //判断平衡因子 //插入左边 左-右
                var d = heightNode(node.left) - heightNode(node.right)
                if (d > 1) {
                    //判断和左节点的大小
                    if (node.left.key > newNode.key) {
                        //插入左边
                        node = rotationLL(node)
                    } else {
                        //插入右边
                        node = rotationLR(node)
                    }
                }
            } else {
                //右
                if (node.right === null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
                //判断平衡因子 //插入右边 右-左
                var d = heightNode(node.right) - heightNode(node.left)
                if (d > 1) {
                    //判断和左节点的大小
                    if (node.right.key > newNode.key) {
                        //插入左边
                        node = rotationRL(node)
                    } else {
                        //插入右边
                        node = rotationRR(node)
                    }
                }
            }
        }
        return node
    }
    this.postOrderTranvers = function (callback) {
        if (root) {
            postOrderTranversNode(root, callback, size)
        }
    }
    var postOrderTranversNode = function (node, callback, size) {
        //后序遍历
        if (node !== null) {
            postOrderTranversNode(node.left, callback, size)
            postOrderTranversNode(node.right, callback, size)
            callback(node.key, size)
        }
    }
    var heightNode = function (node) {
        if (node === null) {
            return -1
        } else {
            return Math.max(heightNode(node.left), heightNode(node.right)) + 1
        }
    }
}
var print = (
    function () {
        var cache = []
        return function (node, size) {
            cache.push(node)
            if (cache.length === size) {
                console.log(cache.join('  '))
                cache = []
            }
        }
    }
)()
var tree = new AVLTree()
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(10);
tree.insert(35);
tree.postOrderTranvers(print)
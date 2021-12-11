/*
 * @Author: caomd
 * @Date: 2021-11-30 09:19:48
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-11 10:59:56
 */
//创建二叉搜索树 
var BinarySearchTree = function () {
    var Node = function (element) {
        this.element = element
        this.left = null
        this.right = null
    }
    var root = null, size = 0
    this.insert = function (element) {
        // var newNode = new Node(element)

        // if (!root) {
        //     size++
        //     return root = newNode
        // }
        root = insertNode(root, element)
        return size++
    }
    this.max = function () {
        var node = root
        while (node && node.right) {
            node = node.right
        }
        return node.element
    }
    var searchNode = function (node, item) {
        if (node !== null) {
            if (item < node.element) {
                //在左子树中 这里要写return
                return searchNode(node.left, item)
            } else if (item > node.element) {
                return searchNode(node.right, item)
            } else if (item = node.element) {
                return true
            }
        } else {
            return false
        }
    }
    this.search = function (item) {
        if (item === root.element) {
            return root
        }
        return searchNode(root, item)
    }
    //闭包 root 私有变量 不会被外界访问
    var insertNode = function (node, key) {
        //判断新加入节点和根节点的大小
        // if (newNode.element < node.element) {
        //     //插入左子树
        //     //判断左子树是否存在，递归 这样写会赋值成功
        //     if (node.left) {
        //         return insertNode(node.left, newNode)
        //     }
        //     node.left = newNode
        // } else {
        //     //插入右子树
        //     //判断右子树是否为空
        //     if (node.right) {
        //         return insertNode(node.right, newNode)
        //     }
        //     node.right = newNode
        // }
        // size++
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
    //先序遍历 先遍历根节点 然后左子节点 -》右子节点
    this.preOrderTranverse = function (callback) {
        console.log('先序遍历')
        preOrderTranverseNode(root, callback, size)
    }
    var preOrderTranverseNode = function (node, callback, size) {
        if (node !== null) {
            callback(node.element, size)
            preOrderTranverseNode(node.left, callback, size)
            preOrderTranverseNode(node.right, callback, size)
        }
    }
    //中序遍历 先遍历左子节点 根节点 右子节点
    this.inOrderTranver = function (callback) {
        console.log('中序遍历')
        inOrderTranverNode(root, callback, size)
    }
    function inOrderTranverNode(node, callback, size) {
        if (node !== null) {
            inOrderTranverNode(node.left, callback, size)
            callback(node.element, size)
            inOrderTranverNode(node.right, callback, size)
        }
    }
    //后序遍历 先遍历左子节点 然后右子节点 然后根节点
    this.postOrderTranver = function (callback) {
        console.log('后序遍历')
        postOrderTranverNode(root, callback, size)
    }
    function postOrderTranverNode(node, callback, size) {
        if (node !== null) {
            postOrderTranverNode(node.left, callback, size)
            postOrderTranverNode(node.right, callback, size)
            callback(node.element, size)
        }
    }
    this.printTreeStr = function () {
        //根据先序遍历打印 根-》左-》右
        orderTree(root)
    }
}
var print = (
    function () {
        var nodeCache = []
        return function (value, size) {
            if (nodeCache.includes(value)) {
                nodeCache = []
            }
            nodeCache.push(value)
            if (nodeCache.length === size) {
                var nodeCacheStr = nodeCache.join(' ')
                console.log(nodeCacheStr)
            }
        }
    }
)()
// var printTreeStr = function (node) {
//     //根据先序遍历打印 根-》左-》右
//     orderTree(root)
// }

var orderTree = function (node) {
    var s = ''
    if (node !== null) {
        s += '  ' + node.element + '\n'
        if (node.left && node.right) {
            s += '\/' + '   ' + '\\' + '\n'
            orderTree(node.left)
            orderTree(node.right)
        } else if (node.left && !node.right) {
            s += '\/' + '\n'
            orderTree(node.left)
        } else if (node.right && !node.left) {
            s += '\\' + '\n'
            orderTree(node.right)
        }
    } else {

    }
    console.log(s)
}
//测试
var tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)
console.log(tree)
tree.preOrderTranverse(print)
tree.inOrderTranver(print)
tree.postOrderTranver(print)
console.log('The max key is', tree.max())
console.log(tree.search(25))
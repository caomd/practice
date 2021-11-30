/*
 * @Author: caomd
 * @Date: 2021-11-30 09:19:48
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-30 14:53:25
 */
//创建二叉搜索树 
var BinarySearchTree = function () {
    var Node = function (element) {
        this.element = element
        this.left = null
        this.right = null
    }
    var root = null, size = 0
    //并不在二叉树的构造方法中，而是作为闭包函数，私有变量，和root一样
    //要提前声明 这是函数表达式, 不然传入的node 如果是root 会一直是null
    // var insertNode = function (node, newNode) {
    //     //判断是否有根节点，没有创建
    //     if (!node) {
    //         node = newNode
    //     } else {
    //         //判断节点和根节点的大小 插入左子树还是右子树
    //         if (newNode.element < node.element) {
    //             //插入左子树
    //             //判断左子树是否存在，递归
    //             insertNode(node.left, newNode)
    //         } else {
    //             //插入右子树 递归
    //             insertNode(node.left, newNode)
    //         }
    //     }
    // }
    this.insert = function (element) {
        var newNode = new Node(element)
        //root 要在这里赋值才会形成私有变量闭包，不然一直都是null并没有赋值，因为所在的作用域变了
        if (!root) {
            size++
            return root = newNode
        }
        insertNode(root, newNode)
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
            } else {
                return 'not founded the search item'
            }
        } else {
            return false
        }
    }
    this.search = function (item) {
        if (item === root.element) {
            return root
        }
        var rt = searchNode(root, item)
        return searchNode(root, item)
    }
    //函数声明 就不会获取root为null
    function insertNode(node, newNode) {
        // //判断是否有根节点，没有创建 这样写并不会赋值成功 连接不到root上
        // if (!node) {
        //     node = newNode
        // } else {
        //     //判断节点和根节点的大小 插入左子树还是右子树
        //     if (newNode.element < node.element) {
        //         //插入左子树
        //         //判断左子树是否存在，递归 这样写不会赋值成功
        //         insertNode(node.left, newNode)
        //     } else {
        //         //插入右子树 递归
        //         insertNode(node.left, newNode)
        //     }
        // }


        //判断新加入节点和根节点的大小
        if (newNode.element < node.element) {
            //插入左子树
            //判断左子树是否存在，递归 这样写会赋值成功
            if (node.left) {
                return insertNode(node.left, newNode)
            }
            node.left = newNode
        } else {
            //插入右子树
            //判断右子树是否为空
            if (node.right) {
                return insertNode(node.right, newNode)
            }
            node.right = newNode
        }
        size++
    }
    //提前定义函数表达式
    var preOrderTranverseNode = function (node, callback, size) {
        if (node !== null) {
            callback(node.element, size)
            preOrderTranverseNode(node.left, callback, size)
            preOrderTranverseNode(node.right, callback, size)
        }
    }
    //先序遍历 先遍历根节点 然后左子节点 -》右子节点
    this.preOrderTranverse = function (callback) {
        preOrderTranverseNode(root, callback, size)
    }
    //中序遍历 先遍历左子节点 根节点 右子节点
    this.inOrderTranver = function (callback) {
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
console.log(tree.max())
console.log(tree.search(25))
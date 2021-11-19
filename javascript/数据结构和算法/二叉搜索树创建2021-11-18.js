function BinarySearchTree() {
    var self = this
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null
    //辅助函数
    //思路，
    /*如果树不为空，则要插入新节点，调用insertNode方法，传入参数node,newNode,
     2.判断是否新节点是否小于根节点如果小于，是否有左侧子节点，如果没有插入新节点，如果有通过递归调用insertNode继续找到树的下一层，
     3.如果节点的值大于根节点，同时没有右节点的时候，插入新节点，如果有右侧子节点，同样需要递归调用insertNode方法
    */
    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    //在树中实现的方法
    this.insert = function (key) {
        var newNode = new Node(key)
        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }
    //在树中查找一个键，如果节点存在，则返回true,不存在则返回false
    this.search = function (key) { }
    //中序遍历
    /*
    辅助函数
    */
    var inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            //递归遍历子树节点 中序 左中右
            inOrderTraverseNode(node.left, callback)
            //相当于闭包，
            callback(node.key)
            inOrderTraverseNode(node.right, callback)
        }
    }
    //通过中序遍历方式遍历所有节点
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback)
    }
    var preOrderTraverseNode = function (node, cb) {
        if (node !== null) {
            cb(node.key)
            preOrderTraverseNode(node.left, cb)
            preOrderTraverseNode(node.right, cb)
        }
    }
    //通过先序遍历方式遍历所有节点 先访问节点本身 节点-》左右
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback)
    }

    var postOrderTraverseNode = function (node, cb) {
        if (node !== null) {
            postOrderTraverseNode(node.left, cb)
            postOrderTraverseNode(node.right, cb)
            cb(node.key)
        }
    }
    //通过后序遍历方式遍历所有节点 左右后
    this.postOrderTraverse = function (cb) {
        postOrderTraverseNode(root, cb)
    }
    var minNode = function (node) {
        while (node && node.left) {
            node = node.left
        }
        return node
    }
    //返回最小值
    this.min = function () {
        return minNode(root)
    }
    //某个节点最小值节点
    this.findMinNode = function (node) {
        return minNode(node)
    }
    //第二种方式
    var maxNode = function (node) {
        while (node && node.right) {
            node = node.right
        }
        return node.key
    }
    //返回最大值
    this.max = function () {
        return maxNode(root)
    }
    //搜索特定值
    var searchNode = function (node, key) {
        if (node === null) {
            return false
        } else {
            if (key > node.key) {
                searchNode(node.right, key)
            } else if (key > node.key) {
                searchNode(node.right, key)
            } else {
                return true
            }
        }
    }
    //搜索特定的值
    this.search = function (key) {
        return searchNode(root, key)
    }

    var removeNode = function (node, key) {
        if (node === null) {
            return false
        } else {
            if (key > node.key) {
                node.right = removeNode(node.right, key)
                return node
            } else if (key < node.key) {
                node.left = removeNode(node.left, key)
                return node
            } else {
                //key === node.key 
                //第一种情况 左右子树为null
                if (node.left === null && node.right === null) {
                    node = null
                    return node
                }
                //一个节点为空
                else if (node.left === null) {
                    node = node.left
                    return node
                } else if (node.right === null) {
                    node = node.right
                    return node
                } else {
                    //左右节点都不为空  
                    //查找最小的节点替代删除节点
                    var minNode = self.findMinNode(node.right)
                    node.key = minNode.key
                    node.right = removeNode(node.right, minNode.key)
                    return node
                }
            }
        }
    }
    // 从树中移除某个键
    this.remove = function (key) {
        return removeNode(root, key)
    }
}
//打印节点
var printNode = function (value) {
    console.log(value)
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
tree.inOrderTraverse(printNode)
tree.preOrderTraverse(printNode)
tree.postOrderTraverse(printNode)
console.log('the tree max value is ', tree.max())
console.log('the tree min value is ', tree.min())
console.log('search a solid value is found ', tree.search(6))
console.log('remove a key from tree', tree.remove(15))

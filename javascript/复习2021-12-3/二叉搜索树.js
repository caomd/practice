/*
 * @Author: caomd 
 * @Date: 2021-12-03 06:50:38 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-03 10:11:27
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
    //search a node
    this.search = function (key) {
        if (root) {
            return searchNode(root, key)
        }
    }
    var searchNode = function (node, key) {
        if (node !== null) {
            //比较和节点的大小在左子树还是右子树
            if (node.key < key) {
                //right
                return searchNode(node.right, key)
            } else if (node.key > key) {
                return searchNode(node.left, key)
            } else if (node.key === key) {
                return node
            }
        } else {
            return '未查找到搜索项'
        }
    }
    this.max = function () {
        if (root) {
            return maxNodeFind(root)
        }
    }
    var maxNodeFind = function (node) {
        //大值均在右树上
        var maxNode
        if (node.right === null) {
            return maxNode = node
        }
        return maxNodeFind(node.right)
    }
    this.min = function () {
        if (root) {
            return minNodeFind(root)
        }
    }
    var minNodeFind = function (node) {
        if (node.left === null) {
            return node
        }
        return minNodeFind(node.left)
    }
    //删除节点
    this.remove = function (key) {
        if (root) {
            root = removeNode(root, key)
            return --size
        }
    }
    var removeNode = function (node, key) {
        if (node !== null) {
            if (node.key > key) {
                //left
                if (node.left) {
                    node.left = removeNode(node.left, key)
                } else {
                    new Error('不存在删除项')
                }
            } else if (node.key < key) {
                if (node.right) {
                    node.right = removeNode(node.right, key)
                } else {
                    throw new Error('不存在删除项')
                }
            } else if (node.key === key) {
                //判断是否有子节点
                if (node.left === null && node.right === null) {
                    node = null
                } else if (node.left === null) {
                    node = node.right
                } else if (node.right === null) {
                    node = node.left
                } else {
                    //左右都有节点
                    //取右树上最小值代替删除节点的值 保证左边节点小于根 右节点大于根
                    var minRightNode = findMinRight(node.right)
                    console.log('右子树最小值为：', minRightNode)
                    node.key = minRightNode.key
                    //删除右子树上的最小值的节点
                    node.right = removeNode(node.right, minRightNode.key)
                }
            }
            return node
        } else {
            throw new Error('不存在删除项')
        }
    }
    var findMinRight = function (node) {
        if (node.left !== null) {
            return findMinRight(node.left)
        }
        return node
    }
}
var print = (
    function () {
        var cache = []
        return function (val, size) {
            cache.push(val)
            if (cache.length === size) {
                console.log('中序遍历：', cache.join('  '))
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
console.log('查找到搜索项结果是：', tree.search(35))
console.log('最大节点为：', tree.max())
console.log('最小节点为：', tree.min())
console.log('删除元素：30,返回size', tree.remove(30))
console.log('删除元素：40,返回size', tree.remove(40))
// console.log('删除元素：90,返回size', tree.remove(90))
tree.inOrderTranvers(print)

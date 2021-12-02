/*
 * @Author: caomd
 * @Date: 2021-12-02 07:38:56
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-02 10:34:48
 */
//二叉搜索树 BinarySearchTree 左节点小于根节点 右节点大于根节点
var BinarySearchTree = function () {
    //指向当前对象
    var self = this
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
        insertNode(root, newNode)
        size++
    }
    var insertNode = function (node, newNode) {
        if (node === null) {
            node = newNode
        }
        //这样写 总是新节点遍历这个判断 无限插入新的自己在右节点上
        // if (node !== null) {
        //     if (node.key > newNode.key) {
        //         insertNode(node.left, newNode)
        //     } else {
        //         insertNode(node.right, newNode)
        //     }
        // }
        if (node !== null) {
            if (node.key > newNode.key) {
                //判断左节点
                if (node.left === null) {
                    return node.left = newNode
                }
                insertNode(node.left, newNode)
            } else {
                //判断右节点
                if (node.right === null) {
                    return node.right = newNode
                }
                insertNode(node.right, newNode)
            }
        }
    }
    this.search = function (key) {
        if (root !== null) {
            return searchNode(root, key)
        }
    }
    var searchNode = function (node, key) {
        if (node !== null) {
            if (node.key > key) {
                //左子树查找
                return searchNode(node.left, key)
            } else if (node.key < key) {
                return searchNode(node.right, key)
            } else if (node.key === key) {
                return true
            }
        } else {
            console.log('未查询到元素' + key)
            return false
        }
    }
    //后序遍历
    this.postOrderTranvers = function (callback) {
        postOrderTranversNode(root, callback, size)
    }
    var postOrderTranversNode = function (node, callback, size) {
        if (node !== null) {
            postOrderTranversNode(node.left, callback, size)
            postOrderTranversNode(node.right, callback, size)
            callback(node.key, size)
        }
    }
    //最大值一定在右子树上
    this.max = function () {
        if (root !== null) {
            return maxFind(root)
        }
    }
    var maxFind = function (node) {
        if (node.right) {
            return maxFind(node.right)
        }
        console.log(node.key)
        return node
    }
    this.min = function () {
        if (root !== null) {
            return minFind(root)
        }
    }
    var minFind = function (node) {
        if (node.left) {
            return minFind(node.left)
        }
        console.log(node.key)
        return node
    }
    this.findMin = function (node) {
        if (node !== null) {
            return minFind(node)
        }
    }
    this.remove = function (key) {
        if (root === null) {
            return false
        }
        size--
        //直接有就删，没有就返回false
        return removeNode(root, key)
    }
    var removeNode = function (node, key) {
        if (node !== null) {
            //判断在左子树还是右子树
            if (key > node.key) {
                //右删
                node.right = removeNode(node.right, key)
            } else if (key < node.key) {
                //左删
                node.left = removeNode(node.left, key)
            } else {
                //当前节点等于删除元素节点
                //判断是否有左右节点
                if (node.left === null && node.right === null) {
                    node = null
                } else if (node.left === null) {
                    node = node.right
                } else if (node.right === null) {
                    node = node.left
                } else {
                    //左右节点都不为空
                    //查找最小的节点替代删除节点 这样的话会保证左子树的上的点都小于根节点 右子树上的点都大于根节点
                    //这里报错 this.min不是一个函数 因为this指向全局对象
                    // var minNode = this.min(node)
                    //改变this指向 顶部声明self=this 当前对象 构造函数
                    //不能用min了因为是从root搜索，不带参数重新定义findMin函数
                    var minNode = self.findMin(node.right)
                    node.key = minNode.key
                    //从右子树中删除minNode 这样写没有删除成功 因为删除和节点没有重新赋值 
                    node.right = removeNode(node.right, minNode.key)
                }
            }
            //返回删除后的节点
            return node
        } else {
            return false
        }
    }
}

var print = (
    function () {
        var cache = []
        return function (val, size) {
            cache.push(val)
            if (cache.length === size) {
                console.log('后序排列: ' + cache.join('  '))
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
tree.postOrderTranvers(print)
console.log('最大节点值为：', tree.max())
console.log('最小节点值为：', tree.min())
var searchNode = 90
console.log('是否查找到该元素' + searchNode, tree.search(searchNode));
console.log('是否查找到该元素35', tree.search(35));
console.log('是否成功删除元素30', tree.remove(30))
tree.postOrderTranvers(print)
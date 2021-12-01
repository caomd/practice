/*
 * @Author: caomd 
 * @Date: 2021-12-02 05:44:51 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-02 07:02:59
 */
var AVLTree = function () {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    //没有加this的变量和函数就是闭包，私有变量外界访问不到
    var root = null, size = 0
    this.insert = function (key) {
        var newNode = new Node(key)
        //判断根节点是否存在
        if (!root) {
            root = newNode
            return size++
        }
        //否则遍历根节点直到插入合适的位置
        root = insertNode(root, newNode)
        return size++
    }
    var insertNode = function (node, newNode) {
        //判断是否为空
        if (node === null) {
            node = newNode
        }
        else {
            //判断与根节点值的大小选择插入位置
            if (node.key > newNode.key) {
                //判断左子节点是否存在
                node.left = insertNode(node.left, newNode)
                if (node.left !== null) {
                    //判断平衡因子 插入左边 左高-右高
                    var d = heightNode(node.left) - heightNode(node.right)
                    if (d > 1) {
                        //判断和左节点的大小
                        if (node.left.key > newNode.key) {
                            //左节点大于新节点 插入右边
                            node = rotationLL(node)
                        } else {
                            node = rotationLR(node)
                        }
                    }
                }
                console.log(node)
            } else {
                //判断右子节点是否存在
                node.right = insertNode(node.right, newNode)
                //判断平衡因子
                var d = heightNode(node.right) - heightNode(node.left)
                if (d > 1) {
                    //判断和左节点的大小
                    if (node.right.key > newNode.key) {
                        //右节点大于新节点 插入左边
                        node = rotationRL(node)
                    } else {
                        node = rotationRR(node)
                    }
                }
                console.log(node)
            }
        }
        return node
    }
    var rotationLR = function (node) {
        //先左旋转 右失衡 旋转和插入相反
        node.left = rotationRR(node.left)
        return rotationLL(node)
    }
    var rotationRR = function (node) {
        //左旋转 右失衡
        var temp = node.right
        node.right = temp.left //null
        temp.left = node
        return temp
    }
    var rotationRL = function (node) {
        //先右旋转 左失衡
        node.right = rotationLL(node.right)
        return rotationRR(node)
    }
    var rotationLL = function (node) {
        //右旋转 左失衡
        var temp = node.left
        node.left = temp.right
        temp.right = node
        return temp
    }
    var heightNode = function (node) {
        //不存在节点返回-1
        if (!node) {
            return -1
        }
        //存在则加1
        else {
            return Math.max(heightNode(node.left), heightNode(node.right)) + 1
        }
    }
    //私有变量 callback size访问不到 提前声明函数表达式
    var inOrderTranversNode = function (node, callback, size) {
        if (node !== null) {
            inOrderTranversNode(node.left, callback, size)
            callback(node.key, size)
            inOrderTranversNode(node.right, callback, size)
        }
    }
    //中序遍历
    this.inOrderTranvers = function (callback) {
        inOrderTranversNode(root, callback, size)
    }
    this.isEmpty = function () {
        return size === 0
    }
}
var print = (
    function () {
        var cache = []
        return function (val, size) {
            cache.push(val)
            if (size === cache.length) {
                console.log(cache.join('  '))
                cache = []
            }
        }
    }
)()
var tree = new AVLTree()
// tree.insert(11)
// tree.insert(7)
// // tree.insert(15)
// tree.insert(5)
// tree.insert(3)
//LR rotation
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(10);
tree.insert(35);
tree.inOrderTranvers(print)
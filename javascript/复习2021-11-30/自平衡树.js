/*
 * @Author: caomd
 * @Date: 2021-12-01 08:15:00
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-01 17:49:02
 */
//自平衡树 添加节点如果超出左节点高度-右节点高度 不等于 0 -1 1 则使用自平衡方法
var AVLTree = function () {
    var Node = function (element) {
        this.element = element
        this.left = null
        this.right = null
    }
    var root = null, size = 0
    this.insert = function (element) {
        var newNode = new Node(element)
        if (!root) {
            root = newNode
            return size++
        }
        root = insertNode(root, newNode)
        //计算左节点高度差 平衡因子
        size++
    }
    function insertNode(node, newNode) {
        if (node === null) {
            node = newNode
        } else if (newNode.element < node.element) {
            //插入左节点
            node.left = insertNode(node.left, newNode)
            if (node.left !== null) {
                //确认是否失衡 插入左节点就左节点-右节点
                var d = heightCalNode(node.left) - heightCalNode(node.right)
                if (d > 1) {
                    //失去平衡 通过旋转
                    //左节点大于新节点 插入左边节点
                    if (node.left.element > newNode.element) {
                        node = rotationLL(node)
                    } else {
                        //插入右边节点
                        node = rotationLR(node)
                    }
                }
            }
        } else {
            //插入右节点
            node.right = insertNode(node.right, newNode)
            if (node.right !== null) {
                //确认是否失衡 插入右节点就 右节点-左节点
                var d = heightCalNode(node.right) - heightCalNode(node.left)
                if (d > 1) {
                    //失去平衡 通过旋转
                    //右节点大于新节点 插入左边节点
                    if (node.right.element > newNode.element) {
                        node = rotationRL(node)
                    } else {
                        //插入右边节点
                        node = rotationRR(node)
                    }
                }
            }
        }
        return node
    }
    //构建平衡树
    function buildAVLTree(node, newNode) {
        if (node !== null) {
            if (node.element > newNode.element) {
                //插入左子树
                if (node.left !== null) {
                    if (node.left.element > newNode.element) {
                        //插入左节点 右单旋转
                        node.left = LL(node, newNode)
                    }
                }
            }
        }
    }
    //左单旋转 右边失衡 赋给temp
    function rotationRR(node) {
        var temp = node.right
        node.right = temp.left //null
        temp.left = node
        return temp
    }
    //右单旋转 左边失衡 左边赋给temp 把根节点左边置空
    function rotationLL(node) {
        var temp = node.left
        node.left = temp.right
        temp.right = node
        return temp
    }
    //右双旋转
    function rotationLR(node) {
        //先左后右 !!!!!!!!!!! 右边失衡 赋值给左边
        node.left = rotationRR(node.left)
        return rotationLL(node)
    }
    //右双旋转
    function rotationRL(node) {
        //先右后左 左边失衡 赋值给右边
        node.right = rotationLL(node.right)
        return rotationRR(node)
    }
    //计算高度
    function heightCalNode(node) {
        if (node === null) {
            return -1
        } else {
            //这里返回值必须加一，因为上边的if不满足，说明有节点就要加1
            return Math.max(heightCalNode(node.left), heightCalNode(node.right)) + 1
        }
    }
    this.preOrderTranver = function (callback) {
        preOrderTranverNode(root, callback, size)
    }
    function preOrderTranverNode(node, callback, size) {
        if (node !== null) {
            callback(node.element, size)
            preOrderTranverNode(node.left, callback, size)
            preOrderTranverNode(node.right, callback, size)
        }
    }
}
var print = (
    function () {
        var cache = []
        return function (val, size) {
            if (cache.length !== size) {
                cache.push(val)
            } else {
                cache = []
            }
            if (cache.length) {
                console.log(cache.join('    '))
            }
        }
    }
)()
var tree = new AVLTree()
//LR
// tree.insert(50);
// tree.insert(30);
// tree.insert(70);
// tree.insert(40);
// tree.insert(10);
// tree.insert(35);
tree.insert(11)
tree.insert(7)
// tree.insert(15)
tree.insert(5)
tree.insert(3)
// tree.insert(9)
// tree.insert(8)
// tree.insert(10)
// tree.insert(13)
// tree.insert(12)
// tree.insert(14)
// tree.insert(20)
// tree.insert(18)
// tree.insert(25)
// tree.insert(6)
tree.preOrderTranver(print)
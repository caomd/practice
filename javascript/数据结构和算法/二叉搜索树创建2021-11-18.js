function BinarySearchTree() {
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
    //通过中序遍历方式遍历所有节点
    this.inOrderTraverse = function () { }
    //通过先序遍历方式遍历所有节点
    this.preOrderTraverse = function () { }
    //通过后序遍历方式遍历所有节点
    this.postOrderTraverse = function () { }
    //返回最小值
    this.min = function () { }
    //返回最大值
    this.max = function () { }
    // 从树中移除某个键
    this.remove = function (key) { }
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
tree.insert(18)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)
console.log(tree)
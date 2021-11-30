/*
 * @Author: caomd
 * @Date: 2021-11-30 09:19:48
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-30 10:48:35
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
        console.log(root)
        //root 要在这里赋值才会形成私有变量闭包，不然一直都是null并没有赋值，因为所在的作用域变了
        if (!root) {
            return root = newNode
        }
        insertNode(root, newNode)
        this.print(root)
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
    }
    //先序遍历

    this.print = function () {

    }
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
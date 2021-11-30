/*
 * @Author: caomd 
 * @Date: 2021-11-30 09:54:26 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-30 10:19:07
 */
二叉搜索树 root的赋值问题 Closure闭包 将函数表达式提前声明 不然一直为null
 var root = null, size = 0
    this.insert = function (element) {
        var newNode = new Node(element)
        console.log(root)
        //root 要在这里赋值才会形成私有变量，闭包，看左侧的变量结构Closure，不然一直都是null并没有赋值，因为所在的作用域变了 
        root必须在这里赋值才可以！！!
        if (!root) {
            return root = newNode
        }
        insertNode(root, newNode)
    }

//并不在二叉树的构造方法中，构成了闭包，私有变量，和root一样 在insert后声明root会一直为null 函数声明就不会了
    var insertNode = function (node, newNode) {
        //判断是否有根节点，没有创建
        if (!node) {
            node = newNode
        } else {
            //判断节点和根节点的大小 插入左子树还是右子树
            if (newNode.element < node.element) {
                //插入左子树
                //判断左子树是否存在，递归
                insertNode(node.left, newNode)
            } else {
                //插入右子树 递归
                insertNode(node.left, newNode)
            }
        }
    }

    //函数声明 后定义 就不会获取root为null
    function insertNode(node, newNode) {
        //判断是否有根节点，没有创建
        if (!node) {
            node = newNode
        } else {
            //判断节点和根节点的大小 插入左子树还是右子树
            if (newNode.element < node.element) {
                //插入左子树
                //判断左子树是否存在，递归
                insertNode(node.left, newNode)
            } else {
                //插入右子树 递归
                insertNode(node.left, newNode)
            }
        }
    }
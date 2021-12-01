/*
 * @Author: caomd 
 * @Date: 2021-11-30 09:54:26 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-01 17:55:10
 */
二叉搜索树 root的赋值问题 Closure闭包外界无法访问私有变量 将函数表达式提前声明 不然一直为null
 var root = null, size = 0
    this.insert = function (element) {
        var newNode = new Node(element)
        console.log(root)
        //root 要在这里赋值才会形成私有变量，闭包，看左侧的变量结构Closure，不然一直都是null并没有赋值，因为所在的作用域变了 外界是无法访问闭包私有变量的
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

    函数表达式提前声明 才能获取值
    闭包 私有变量的作用域使用范围
    二叉搜索树 左节点小于根节点 右子树大于根节点
    查询一个元素返回true 问题：总是返回undefined 因为递归 
    答：因为调用递归函数没有return 返回就是undefined 每个都要有返回
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

最少零钱问题 判定newMin和min的边界条件 
if (newAmount >= 0 && (newMin.length < min.length || !min.length) && (!newAmount || newMin.length))
if (!amount) {
            return []
        }
//自平衡树 
难点：左右节点高度差计算，
rotationRR两次右插入 左单旋转 第一个R表示插入元素大于根节点 第二个R表示插入元素大于右节点
rotationLL两次左插入 右单旋转 第一个L插入元素小于根节点 第二个L表示插入元素小于左节点
rotationLR 右双旋转 插入元素小于根节点大于左节点 所以旋转时 从后到前旋转 后插入右节点 所以先左转 后右转 rotationRR rotationLL(大写字母表示插入的节点方向和旋转相反)
rotationRL 左双旋转 插入元素大于根节点小于右节点 所以旋转时 从后到前旋转 后插入右节点 所以先右转 后左转 rotationLL rotationRR(大写字母表示插入的节点方向和旋转相反)
从后往前看 RL  LL -》 RR 先插入左边 左边失衡  node.right = rotationLL(node.right)
LR RR -〉LL 先插入右边 右边失衡 赋给给左边 node.left = rotationRR(node.left)
   //计算高度
    function heightCalNode(node) {
        if (node === null) {
            return -1
        } else {
            //这里返回值必须加一，因为上边的if不满足，说明有节点就要加1
            return Math.max(heightCalNode(node.left), heightCalNode(node.right)) + 1
        }
    }
    //左单旋转 右边失衡 赋给temp 把值赋给左边
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
        //先左后右 !!!!!!!!!!! 右边失衡 先向左旋转赋值给左边
        node.left = rotationRR(node.left)
        //然后向右旋转
        return rotationLL(node) 
    }
    //右双旋转
    function rotationRL(node) {
        //先右后左 左边失衡 赋值给右边 传入右边节点
        node.right = rotationLL(node.right)
        return rotationRR(node)
    }

    LL
    var temp = node.left
    node.left = temp.right
    temp.right = node

    RR
    var temp = node.right
    node.right = temp.left
    temp.left = node
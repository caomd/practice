function AVLTree() {
    var Node = function (element) {
        this.key = element
        this.left = null
        this.right = null
    }
    var root = null
    var heightNode = function (node) {
        if (node === null) {
            return -1
        } else {
            return Math.max(heightNode(node.left), heightNode(node.right)) + 1
        }
    }
    var rotationRR = function (node) {
        //旋转 左双旋转 
        var temp = node.right
        node.right = temp.left
        temp.left = node
        return temp
    }
    var rotationLL = function (node) {
        var temp = node.left
        node.left = temp.right //null
        temp.right = node
        return temp
    }
    var rotationLR = function (node) {
        //先左旋转 然后右旋转
        node.left = rotationRR(node.left)
        return rotationLL(node)
    }
    var rotationRL = function (node) {
        node.right = rationLL(node.right)
        return rotationRR(node)
    }
    var insertNode = function (node, element) {
        var newNode = new Node(element)
        if (node === null) {
            node = newNode
        }//左侧子节点
        else if (element < node.key) {
            //判断是否有左侧子节点，没有插入，有继续遍历 L 可以不写因为上边写了
            // if (node.left === null) {
            //      node.left = newNode
            // }
            // else {
            node.left = insertNode(node.left, element)
            //计算平衡因子 确认是否平衡
            if (node.left !== null) {
                //如果高度大于1
                var b = heightNode(node.left) - heightNode(node.right)
                if (b > 1) {
                    //判断是LL,还是LR
                    if (element < node.left.key) {
                        //LL
                        node = rotationLL(node)
                    } else {
                        node = rotationLR(node)
                    }
                }
            }
            // }
        } else {
            //判断右节点是否为空
            //     if (node.right === null) {
            //     node.right = newNode
            // } 
            // else {
            node.right = insertNode(node.right, element)
            if (node.right !== null) {
                //计算平衡因子
                //如果高度大于1
                var b = heightNode(node.right) - heightNode(node.left)
                if (b > 1) {
                    if (element < node.right.key) {
                        node = rotationRL(node)
                    } else {
                        node = rotationRR(node)
                    }
                }
            }
            // }
        }
        return node
    }
    this.insert = function (element) {
        root = insertNode(root, element)
        console.log(root)
    }
    this.print = function () {
        return root
    }
}
var avlTree = new AVLTree()
//LR rotation
avlTree.insert(50);
avlTree.insert(30);
avlTree.insert(70);
avlTree.insert(40);
avlTree.insert(10);
avlTree.insert(35);
avlTree.print()
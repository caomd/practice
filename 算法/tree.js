//树 node left right
//面试实现先序遍历 中序遍历 后序遍历
//先序遍历 中左右
const preOrder = function (node) {
    if (node !== null) {
        console.log(node.val)
        PreOrder(node.left)
        PreOrder(node.right)
    }
}
//中序 左中右
const minOrder = function (node) {
    if (node !== null) {
        PreOrder(node.left)
        console.log(node.val)
        PreOrder(node.right)
    }
}
//后序 左右中
const postOrder = function (node) {
    if (node !== null) {
        PreOrder(node.left)
        PreOrder(node.right)
        console.log(node.val)
    }
}
/*
 * @Author: caomd 
 * @Date: 2022-01-05 14:57:25 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-05 15:21:57
 */
var rebuildBinaryTree = function (preOrder, inOrder, length) {
    var root = preOrder[0], index
    for (var i = 0; i < inOrder.length; i++) {
        if (inOrder[i] === root) {
            index = i
        }
    }

    var leftTree = inOrder.slice(0, index),
        rightTree = inOrder.slice(index + 1, inOrder.length),
        leftPreOrder = preOrder.slice(1, leftTree.length + 1),
        rightPreOrder = preOrder.slice(leftTree.length + 1, length)
    console.log('root: ' + root, 'leftTree: ' + leftTree, 'rightTree: ' + rightTree)
    if (leftTree.length > 0) {
        rebuildBinaryTree(leftPreOrder, leftTree, leftTree.length)
    }
    if (rightTree.length > 0) {
        rebuildBinaryTree(rightPreOrder, rightTree, rightTree.length)
    }
}

rebuildBinaryTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6], 8)